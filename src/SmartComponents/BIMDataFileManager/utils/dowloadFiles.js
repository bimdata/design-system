const FOLDER_TYPE = "Folder";

async function downloadFiles(files, apiInfos = {}) {
  try {
    let downloadName, downloadUrl;
    if (files.length === 0) {
      return;
    }
    downloadName = files[0].fileName;
    if (files.length === 1 && files[0].type !== FOLDER_TYPE) {
      downloadUrl = files[0].file;
    } else {
      downloadUrl = getArchiveUrl(files, apiInfos);
    }
    return await download({ name: downloadName, url: downloadUrl });
  } catch (error) {
    throw new Error(error);
  }
}

function getArchiveUrl(files, apiInfos) {
  const {
    projectId,
    spaceId,
    accessToken,
    baseURL = "https://archive.bimdata.io",
  } = apiInfos;

  const { folders, documents } = segregate(files);
  let url = "";
  if (folders.length > 0 || documents.length > 0) {
    url += `${baseURL}/cloud/${spaceId}/project/${projectId}?`;
    url += `accessToken=${accessToken}&`;
    url += folders.map(f => `folderId[]=${f.id}`).join("&");
    url += folders.length > 0 && documents.length > 0 ? "&" : "";
    url += documents.map(f => `documentId[]=${f.id}`).join("&");
  }
  return url;
}

function segregate(files) {
  const folders = [];
  const documents = [];
  for (const file of files) {
    if (file.type === FOLDER_TYPE) {
      folders.push(file);
    } else {
      documents.push(file);
    }
  }
  return {
    folders,
    documents,
  };
}

async function download({ name, url }) {
  const link = document.createElement("a");
  link.style.display = "none";
  link.download = name;
  link.href = url;
  document.body.append(link);
  link.click();
  await delay(100);
  link.remove();
  await delay(500);
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default downloadFiles;
