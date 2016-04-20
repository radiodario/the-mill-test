import React from 'react';
import AdvertiserStore from '../stores/AdvertiserStore';
import ButtonForm from './buttonForm';
import TreeDisplay from './treeDisplay';

export default React.createClass({

  getInitialState() {
    return {
      tree: AdvertiserStore.getTree()
    }
  },

  componentWillMount () {
    AdvertiserStore.addChangeListener(this._onChange);
  },

  render() {
    return (
      <div>
        <ButtonForm/>
        <TreeDisplay {...this.state}/>
      </div>
    )
  },

  _onChange() {
    this.setState({
      tree: AdvertiserStore.getTree()
    });
  }
})
