import trioToTree from '../utils/trioToTree';

const root = {
  children: {}
};



export default {
  /**
   * Adds a ad, brand, prod and date to the tree
   * @param {string} advertiser The advertiser to add
   * @param {string} brand The brand to add to the tree
   * @param {string} product the product to add to the tree
   * @param {string} date An ISOString representing the date added
   */
  add(advertiser, brand, product, date) {

    const trio = [advertiser, brand, product, date];

    let currentFunctionName;

    let currentNode = root;
    for (var j = 0; j < trio.length; j++) {
      let currentNodeName = trio[j];
      if (!currentNode.children.hasOwnProperty(currentNodeName)) {
        currentNode.children[currentNodeName] = { children:{} };
      }
      currentNode = currentNode.children[currentNodeName];
    }


    return root;


  },

  getTree() {
    return root;
  }

}
