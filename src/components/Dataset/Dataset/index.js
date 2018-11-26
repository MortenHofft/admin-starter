import React from 'react'
import { withRouter } from 'react-router'
import DatasetMenu from './DatasetMenu'
import { Route, Switch } from 'react-router-dom'
import NotFound from '../../NotFound'

import DatasetDetails from './DatasetDetails'

class Dataset extends React.Component {
  render() {
    console.log(this.props)
    const { match } = this.props
    return (
      <DatasetMenu>
        <Switch>
          <Route exact path={`${match.path}`} component={DatasetDetails} />
          <Route path={`${match.path}/contacts`} component={() => <h1>contacts</h1>} />
          {/* <Route exact path="/dataset/search" component={DatasetSearch} />
          <Route exact path="/dataset/deleted" component={DatasetDeleted} />
          <Route path="/dataset/:key" component={Dataset} /> */}
          <Route component={NotFound}/>
        </Switch>
      </DatasetMenu>
    )
  }
}

export default withRouter(Dataset)