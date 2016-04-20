jest.unmock('../tree');

describe('tree model', () => {

  describe('#add', () => {
    it('should add a to an empty tree and return itself', () => {
      const tree = require('../tree').default;
      const date = new Date().toISOString();
      const result = {
        children: {
          'Unilever': {
            children: {
              'Dove' : {
                children: {
                  'Axe' : {
                    children: {
                      [date] : {
                        children : {}
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };


      expect(tree.add('Unilever', 'Dove', 'Axe', date))
        .toEqual(result);

    });

    it('should add a newer date to a tree when the rest of things are the same', () => {
      const tree = require('../tree').default;
      const date = new Date().toISOString();
      const result = {
        children: {
          'Unilever': {
            children: {
              'Dove' : {
                children: {
                  'Axe' : {
                    children: {
                      [date] : {
                        children : {}
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };

      // add one first
      const newTree = tree.add('Unilever', 'Dove', 'Axe', date);
      expect(newTree).toEqual(result);
      const laterDate = new Date().toISOString();
      result.children.Unilever.children.Dove.children.Axe.children[laterDate] = {children:{}};

      expect(tree.add('Unilever', 'Dove', 'Axe', laterDate))
        .toEqual(result);

    });

    it('should add new values when the advertiser is different', () => {
      const tree = require('../tree').default;
      const date = new Date().toISOString();
      const result = {
        children: {
          'Unilever': {
            children: {
              'Dove' : {
                children: {
                  'Axe' : {
                    children: {
                      [date] : {
                        children : {}
                      }
                    }
                  }
                }
              }
            }
          },
          'P&G': {
            children: {
              'Gillete': {
                children: {
                  'Fusion ProGlide': {
                    children: {
                      [date] : {
                        children : {}
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };


      tree.add('Unilever', 'Dove', 'Axe', date)

      expect(tree.add('P&G', 'Gillete', 'Fusion ProGlide', date))
        .toEqual(result);

    });
  });

  describe('#getTree', () => {
    it('should return the tree', () => {
      const tree = require('../tree').default;
      expect(tree.getTree()).toEqual({
        children: {}
      });
    });
  });

});
