import React, { Component } from "react"
import { connect } from 'react-redux'
import injectSheet from 'react-jss'
import { FormattedMessage } from 'react-intl'

import PresentationItem from './Form/PresentationItem'

const styles = theme => ({

})

class DatasetPresentation extends Component {
  render() {
    const { classes, loading, dataset, error } = this.props;
    return (
      <div style={{maxWidth: 800}}>
      {dataset &&
        <dl>
          <PresentationItem label={<FormattedMessage id="title" defaultMessage="Title" />} >
            {dataset.title}
          </PresentationItem>
          <PresentationItem label={<FormattedMessage id="datasetType" defaultMessage="Dataset type" />} >
            {dataset.type}
          </PresentationItem>
          <PresentationItem label={<FormattedMessage id="doi" defaultMessage="DOI" />} >
            {dataset.doi}
          </PresentationItem>
        </dl>
      }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.dataset.loading,
  dataset: state.dataset.dataset,
  error: state.dataset.error,
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(DatasetPresentation))