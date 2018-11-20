import { faBoxOpen, faHome, faPlus, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import * as intl from 'react-intl-universal';
import { Link } from 'react-router-dom';
import { Badge, Breadcrumb, BreadcrumbItem, Button, Col, Container, Row } from 'reactstrap';

import ProductAPI from '../api/ProductAPI';
import ProductTable from '../components/product/ProductTable';

class ProductSearch extends React.Component {

  constructor(props, state) {
    super(props);
    this.state = {
      datas: [],
      dataTotalSize: 0,
      currentPage: 1,
      sizePerPage: 5
    };
  }

  componentDidMount() {
    this.fetchDatas()(this.state.currentPage, this.state.sizePerPage);
  }

  render() {  
    return (
      <div>
        <div className="bg-info clearfix px-4 py-2">
          <h1 className="text-white">{intl.get('product.search.title')}{' '}
            <FontAwesomeIcon icon={faBoxOpen} fixedWidth /></h1>
          <p className="text-white ml-1">{intl.get('product.search.description')}</p>
        </div>
        <Breadcrumb>
          <BreadcrumbItem><Link to="/"><FontAwesomeIcon icon={faHome} fixedWidth /></Link></BreadcrumbItem>
          <BreadcrumbItem active>{intl.get('breadcrumb.product')}</BreadcrumbItem>
        </Breadcrumb>
        <Container>
          <Row>
            <Col className="mb-4">
              <Button color="primary" tag={Link} to="/product/create" >
                <FontAwesomeIcon icon={faPlus} fixedWidth />{' '}
                {intl.get('product.search.buttons.create')}
              </Button>
            </Col>
            <Col>
              <div className="text-right">
                <Button color="link" tag={Link} to="/help#product">
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              {!this.state.dataTotalSize ? this.renderEmpty() : null}
              {this.state.dataTotalSize ? this.renderTable() : null}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  renderEmpty() {
    return (
      <div className="text-center">
        <Badge color="info" pill>{intl.get('form.empty')}</Badge>
      </div>
    );
  }

  renderTable() {
    return (
      <ProductTable
        datas={this.state.datas}
        dataTotalSize={this.state.dataTotalSize}
        fetchDatas={this.fetchDatas()} />
    );
  }

  fetchDatas() {
    const ref = this; // FIXME: losing this reference after BootstrapTable
    return (currentPage, sizePerPage) => {
      ProductAPI.findAll({
        page: currentPage-1,
        count: sizePerPage
      })
        .then((response) => {
          ref.setState({
            datas: response,
            dataTotalSize: 999
          });
        });
    }
  }
}
export default ProductSearch;