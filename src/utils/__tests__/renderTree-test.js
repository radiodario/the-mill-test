jest.dontMock('../renderTree');

describe('renderTree', () => {

  const renderTree = require('../renderTree').default;

  it('should render one-level trees properly', () => {
    const tree = {
      children: {
        'Unilever': {
          children: {
            'Dove' : {
              children: {
                'Axe' : {
                  children: {
                    'Toot' : {
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

    const result = `Unilever
    -> Dove
        -> Axe
            -> Toot
`;

    expect(renderTree(tree)).toEqual(result);
  });


  it('should render two-level properly', () => {
    const tree = {
      children: {
        'Unilever': {
          children: {
            'Dove' : {
              children: {
                'Axe' : {
                  children: {
                    'Toot' : {
                      children : {}
                    },
                    'Toot2' : {
                      children : {}
                    },
                  }
                }
              }
            }
          }
        }
      }
    };

    const result = `Unilever
    -> Dove
        -> Axe
            -> Toot
            -> Toot2
`;

    expect(renderTree(tree)).toEqual(result);
  })

  it('should render two-level properly', () => {
    const tree = {
      children: {
        'Unilever': {
          children: {
            'Dove' : {
              children: {
                'Axe' : {
                  children: {
                    'Toot' : {
                      children : {}
                    },
                    'Toot2' : {
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
            'Gillete' : {
              children: {
                'Fusion ProGlide' : {
                  children: {
                    'Toot' : {
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

    const result = `Unilever
    -> Dove
        -> Axe
            -> Toot
            -> Toot2
P&G
    -> Gillete
        -> Fusion ProGlide
            -> Toot
`;

    expect(renderTree(tree)).toEqual(result);
  })

})
