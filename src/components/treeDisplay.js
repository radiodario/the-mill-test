import React from 'react';

import renderTree from '../utils/renderTree';


export default React.createClass({

  render() {

    const treeText = renderTree(this.props.tree);

    return (
      <div>
        <h3>Tree:</h3>
        <pre>
          {treeText}
        </pre>
      </div>
    );

  }
})
