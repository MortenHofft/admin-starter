import React, { Component } from "react"
import { connect } from 'react-redux'
import injectSheet from 'react-jss'
import { loadDataset } from '../../../actions/dataset'
import { FormattedMessage } from 'react-intl'

import PresentationItem from './Form/PresentationItem'

const styles = theme => ({

})

class DatasetPresentation extends Component {
  componentDidMount() {
    this.loadData()
  }

  loadData(){
    this.props.loadDataset(this.props.datasetKey)
  }

  render() {
    const { classes, loading, dataset, error } = this.props;
    console.log('dataset');
    console.log(dataset);
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
  loadDataset: loadDataset,
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(DatasetPresentation))