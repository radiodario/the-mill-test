jest.dontMock('../AdvertiserStore');
jest.dontMock('object-assign');
jest.dontMock('keymirror');
jest.dontMock('../../models/tree');

describe('AdvertiserStore', () => {
  const AdvertiserConstants = require('../../constants/AdvertiserConstants');
  let AppDispatcher;
  let AdvertiserStore;
  let callback;
  // mock action
  const actionAdd = {
    actionType: AdvertiserConstants.ADVERTISER_ADD,
    advertiser: 'Unilever',
    brand: 'Dove',
    product: 'Axe',
    date: new Date().toISOString()
  };

  beforeEach(() => {
    AppDispatcher = require('../../dispatcher/AppDispatcher');
    AdvertiserStore = require('../AdvertiserStore').default;
    callback = AppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', () => {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  it('initialises with an empty ad tree', () => {
    expect(AdvertiserStore.getTree()).toEqual({
      children: {}
    });
  });

  it('adds an advertiser item', () => {
    callback(actionAdd);
    const tree = AdvertiserStore.getTree();
    expect(tree)
    .toEqual({
      children: {
        'Unilever': {
          children: {
            'Dove': {
              children: {
                'Axe': {
                  children: {
                    [actionAdd.date] : {
                      children: {}
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  })
});
