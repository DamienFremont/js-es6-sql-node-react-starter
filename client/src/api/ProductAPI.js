import axios from 'axios';

class ProductAPI {

  static async findAll(params) {
    const esc = encodeURIComponent;
    const query = Object.keys(params)
      .map(k => esc(k) + '=' + esc(params[k]))
      .join('&');
    const response = await fetch('/api/products?' + query);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  static async findOne(id) {
    return axios.get('/api/products/' + id)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        // TODO: error
      })
  };

  static async create(product)  {
    return axios.post('/api/products', product)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        // TODO: error
      });
  };

  static async update(product) {
    return axios.put(`/api/products/${product.id}`, product)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        // TODO: error
      });
  };

}
export default ProductAPI;