import React from 'react';
import AdvertiserActions from '../actions/AdvertiserActions';


export default React.createClass({

  getInitialState() {
    return {
      advertiser: '',
      brand: '',
      product: ''
    };
  },

  handleAdvertiser(event) {
    const advertiser = event.target.value;
    if (advertiser)  {
      this.setState({
        advertiser: advertiser,
        advertiserError: false
      });
    } else {
      this.setState({advertiserError: true});
    }
  },

  handleBrand(event) {
    const brand = event.target.value;
    if (brand)  {
      this.setState({
        brand: brand,
        brandError: false
      });
    } else {
      this.setState({brandError: true});
    }
  },

  handleProduct(event) {
    const product = event.target.value;
    if (product)  {
      this.setState({
        product: product,
        productError: false
      });
    } else {
      this.setState({productError: true});
    }
  },

  areAllValid() {
    const advertiserValid = !this.state.advertiserError && this.state.advertiser.length;
    const brandValid = !this.state.brandError && this.state.brand.length;
    const productValid = !this.state.productError && this.state.brand.length;

    return advertiserValid && brandValid && productValid;
  },

  handleAdd(event) {
    event.preventDefault();
    if (!this.areAllValid()) {
      return;
    }
    const advertiser = this.state.advertiser;
    const brand = this.state.brand;
    const product = this.state.product;

    AdvertiserActions.add(advertiser, brand, product);

  },

  render() {
    const advertiserValid = !this.state.hasOwnProperty('advertiserError') || !this.state.advertiserError
    const brandValid = !this.state.hasOwnProperty('brandError') || !this.state.brandError
    const productValid = !this.state.hasOwnProperty('productError') || !this.state.productError

    return (
      <form onSubmit={this.handleAdd}>
        <h3>Add A Client:</h3>
        <span className={!advertiserValid ? 'input input--error' : 'input'}>
          <label for="advertiser">Advertiser:</label>
          <input type="text"
            name="advertiser"
            onChange={this.handleAdvertiser}
          />
        </span>
        <span className={!brandValid ? 'input input--error' : 'input'}>
          <label for="brand">Brand:</label>
          <input type="text"
            name="brand"
            onChange={this.handleBrand}
          />
        </span>
        <span className={!productValid ? 'input input--error' : 'input'}>
          <label for="product">Product:</label>
          <input type="text"
            name="product"
            onChange={this.handleProduct}
          />
        </span>
        <button type="submit">Add</button>
      </form>
    );

  }



})
