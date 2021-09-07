const FILE_TYPES = Object.freeze({
  FOLDER: "Folder",
  DOCUMENT: "Document",
  IFC: "Ifc",
});

function getDescendants(file) {
  const children = file.children || [];
  return children.concat(children.flatMap(child => getDescendants(child)));
}

export { FILE_TYPES, getDescendants };
