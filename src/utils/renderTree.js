
export default function renderTree(tree) {
  var level = 1;
  var string = '';
  function walk(tree) {
      for (var k in tree.children) {
        const node = tree.children[k];
        const sep = (level > 1) ? '-> ' : '';
        string += Array(level).join('    ') + sep + k + '\n';
        if (Object.keys(node.children).length > 0) {
          level++;
          walk(node);
        }
      }
      level--;
  }
  walk(tree);
  return string;
}
