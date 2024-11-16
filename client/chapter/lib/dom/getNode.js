function getNode(node, context = document) {
  if (context.nodeType !== 9) context = getNode(context); //document말고 부모요소가 들어올수 있음
  return context.querySelector(node);
}

function getNodes(node, context = document) {
  if (context.nodeType !== 9) context = getNode(context);
  return context.querySelectorAll(node);
}
