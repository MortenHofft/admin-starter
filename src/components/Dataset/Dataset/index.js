import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import DatasetMenu from './DatasetMenu'
import { Spin } from 'antd'
import { Route, Switch } from 'react-router-dom'
import { loadDataset } from '../../../actions/dataset'
import NotFound from '../../NotFound'
import DatasetDetails from './DatasetDetails'

class Dataset extends React.Component {
  componentDidMount() {
    this.loadData()
  }

  loadData(){
    this.props.loadDataset(this.props.match.params.key)
  }

  render() {
    const { match, dataset } = this.props
    return (
      <React.Fragment>
        {dataset && <DatasetMenu dataset={dataset}>
          <Switch>
            <Route exact path={`${match.path}`} component={DatasetDetails} />
            <Route path={`${match.path}/contacts`} component={() => <h1>contacts</h1>} />
            {/* <Route exact path="/dataset/search" component={DatasetSearch} />
            <Route exact path="/dataset/deleted" component={DatasetDeleted} />
            <Route path="/dataset/:key" component={Dataset} /> */}
            <Route component={NotFound}/>
          </Switch>
        </DatasetMenu>}
        {!dataset && <Spin size="large" />}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.dataset.loading,
  dataset: state.dataset.dataset,
  error: state.dataset.error,
})

const mapDispatchToProps = {
  loadDataset: loadDataset,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dataset))
