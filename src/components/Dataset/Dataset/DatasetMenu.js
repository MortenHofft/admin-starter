import React from 'react'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Menu, Row } from 'antd';

const DatasetMenu = (props) => {
  const { children, dataset, match } = props
  return (
    <div style={{ background: 'white' }}>
      <Row type="flex" justify="start">
        <Menu
          // onClick={this.handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['contacts']}
          mode="inline"
        >
          <Menu.Item key="overview"><NavLink to={`/dataset/${match.params.key}`}>Overview</NavLink></Menu.Item>
          <Menu.Item key="contacts"><NavLink to={`/dataset/${match.params.key}/contacts`}>Contacts</NavLink></Menu.Item>
          <Menu.Item key="endpoints">Endpoints ({dataset.endpoints.length})</Menu.Item>
          <Menu.Item key="identifiers">Identifiers</Menu.Item>
          <Menu.Item key="tags">Tags</Menu.Item>
          <Menu.Item key="machineTags">Machine tags</Menu.Item>
          <Menu.Item key="comments">Comments</Menu.Item>
          <Menu.Item key="constituentDatasets">Constituent datasets</Menu.Item>
        </Menu>
        <div style={{ padding: 16, width: 'calc(100% - 256px)' }}>
          {children}
        </div>
      </Row>
    </div>
  )
}

export default withRouter(DatasetMenu)