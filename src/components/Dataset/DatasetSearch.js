import React from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { Input, Table, Divider, Tag } from 'antd';
import { updateDatasetSearch } from '../../actions/datasetSearch'

const Search = Input.Search;

const columns = [{
  title: <FormattedMessage id="title"/>,
  dataIndex: 'title',
  key: 'title',
  render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: 'key',
    dataIndex: 'key',
    key: 'key',
  }
];

const DatasetSearch = (props) => (
  <div style={{background: 'white', padding: 16}}>
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={value => props.updateDatasetSearch(value)}
    />

    <Table 
      columns={columns} 
      dataSource={props.result.results}
      pagination={{total: props.result.count, current: 2, pageSize: props.result.limit}}
      loading={props.loading}
      />
  </div>
)

const mapStateToProps = state => ({
  loading: state.datasetSearch.loading,
  result: state.datasetSearch.result,
})

const mapDispatchToProps = {
  updateDatasetSearch: updateDatasetSearch,
}

export default connect(mapStateToProps, mapDispatchToProps)(DatasetSearch)