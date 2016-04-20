import AdvertiserConstants from '../constants/AdvertiserConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';
import moment from 'moment';

export default {
  add : (advertiser, brand, product) => {
    AppDispatcher.dispatch({
      actionType: AdvertiserConstants.ADVERTISER_ADD,
      advertiser: advertiser,
      brand: brand,
      product: product,
      date: moment().format('DD/MM/YYYY hh:mm:ss')
    });
  }
}
