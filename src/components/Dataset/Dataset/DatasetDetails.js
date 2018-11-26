import React from 'react'
import { withRouter } from 'react-router'
import DatasetPresentation from './DatasetPresentation'

class DatasetDetails extends React.Component {
  render() {
    const { match } = this.props
    return (
      <DatasetPresentation datasetKey={match.params.key}/>
    )
  }
}

export default withRouter(DatasetDetails)