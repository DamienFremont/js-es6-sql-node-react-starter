import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import intl from 'react-intl-universal';
import { Link } from 'react-router-dom';
import Button from 'reactstrap/lib/Button';

class ProductTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            sizePerPage: 5
        };
    }

    render() {
        const headerStyle =  { background: '#343a40', color: '#FFF' } ;
        return (
            <BootstrapTable
                version="4"
                data={this.props.datas}
                headerStyle={headerStyle}
                remote={this.remote}
                fetchInfo={this.fetchInfo()}
                pagination={true}
                striped={true} hover={true}
                options={this.options()}>
                <TableHeaderColumn dataField='id' isKey>#</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>{intl.get('product.search.table.columns.name')}</TableHeaderColumn>
                <TableHeaderColumn dataField='type'>{intl.get('product.search.table.columns.type')}</TableHeaderColumn>
                <TableHeaderColumn dataField='price'>{intl.get('product.search.table.columns.price')}</TableHeaderColumn>
                <TableHeaderColumn dataField="button" dataFormat={this.buttonFormatter}>Buttons</TableHeaderColumn>
            </BootstrapTable>
        );
    }

    options() {
        return {
            page: this.state.currentPage,
            sizePerPageList: [{
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {
                text: 'All', value: 100
            }],
            sizePerPage: this.state.sizePerPage,
            paginationShowsTotal: true,
            onPageChange: this.onPageChange()
        };
    }

    remote(remoteObj) {
        remoteObj.pagination = true;
        remoteObj.sort = true;
        remoteObj.filter = true;
        remoteObj.search = true;
        return remoteObj;
    }

    fetchInfo() {
        return {
            dataTotalSize: this.props.dataTotalSize
        };
    }

    buttonFormatter(cell, row) {
        return (
            <Button color="secondary" tag={Link} to={"/product/edit/" + row.id} >
                <FontAwesomeIcon icon={faChevronRight} fixedWidth />{' '}
                {intl.get('form.open')}
            </Button>
        );
    }

    onPageChange() {
        const ref = this; // FIXME: losing this reference after BootstrapTable
        return (currentPage, sizePerPage) => {
            ref.props.fetchDatas(currentPage, sizePerPage);
        };
    }
}
export default ProductTable;