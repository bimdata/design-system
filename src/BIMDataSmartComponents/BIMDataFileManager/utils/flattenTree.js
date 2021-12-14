function getFlattenTree(entity) {
  return [entity, ...getDescendants(entity)];
}

function getDescendants(entity) {
  if (entity.children && entity.children.length > 0) {
    return [
      ...entity.children,
      ...entity.children.flatMap(child => getDescendants(child)),
    ];
  } else {
    return [];
  }
}

export default getFlattenTree;
