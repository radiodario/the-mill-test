import AppDispatcher from '../dispatcher/AppDispatcher';
import AdvertiserConstants from '../constants/AdvertiserConstants';
import {EventEmitter} from 'events';
import assign from 'object-assign';
import tree from '../models/tree';

const CHANGE_EVENT = 'change';

const AdvertiserStore = assign({}, EventEmitter.prototype, {

  /**
   * returns the current tree
   */
  getTree() {
    return tree.getTree();
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register((action) => {

  switch (action.actionType) {
    case AdvertiserConstants.ADVERTISER_ADD:
      const advertiser = action.advertiser;
      const brand = action.brand;
      const product = action.product;
      const date = action.date;
      tree.add(advertiser, brand, product, date);
      AdvertiserStore.emitChange();
      break;
    default:
      //noop
  }
});


export default AdvertiserStore;
