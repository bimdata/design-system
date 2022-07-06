const FOLDER_TYPE = "Folder";

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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

function segregate(files) {
  const folders = [];
  const documents = [];
  for (const file of files) {
    if (file.nature === FOLDER_TYPE) {
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

function getArchiveUrl(files, apiInfos) {
  const {
    projectId,
    spaceId,
    accessToken,
    apiUrl = "https://api.bimdata.io",
  } = apiInfos;

  const baseURL = getUrlFromAPIUrl(apiUrl);

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

function getUrlFromAPIUrl(apiUrl) {
  const url = new URL(apiUrl);
  const hostname = url.hostname;
  let env = "";
  const [apiEnv, ...domainPath] = hostname.split(".");
  const domain = domainPath.join(".");
  if (apiEnv.includes("-staging")) {
    env = "-staging";
  } else if (apiEnv.includes("-next")) {
    env = "-next";
  }
  return url.protocol + "//archive" + env + "." + domain;
}

async function downloadFiles(files, apiInfos = {}) {
  try {
    if (files.length === 0) {
      return;
    }
    let downloadUrl = null;
    const downloadName = files[0].name;
    if (files.length === 1 && files[0].nature !== FOLDER_TYPE) {
      downloadUrl = files[0].file;
    } else {
      downloadUrl = getArchiveUrl(files, apiInfos);
    }
    return await download({ name: downloadName, url: downloadUrl });
  } catch (error) {
    throw new Error(error);
  }
}

export { downloadFiles };
