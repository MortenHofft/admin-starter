import React, { Component } from "react"
import injectSheet from 'react-jss'
import { Input, Tooltip, Icon, Row, Col } from "antd"

const styles = theme => ({
  formItem: {
    marginBottom: 24
  },
  label: {
    textAlign: 'right',
    verticalAlign: 'middle',
    lineHeight: '40px',
    display: 'block',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    '&:after': {
      content: '":"',
      margin: '0 8px 0 2px',
      position: 'relative',
      top: '-0.5px'
    }
  },
  content: {
    verticalAlign: 'middle',
    lineHeight: '40px',
  }
})

class TextField extends Component {
  render() {
    const { classes, id, name, label, value, error, touched, onChange, onBlur, helperText } = this.props;
    console.log(this.props)
    let showError = error && touched;
    return (
      <div className={classes.formItem}>
      <dl>
        <Row className="has-error has-feedback ant-form-item-with-help">
          <Col md={24} lg={8}>
            <div>
              {/* <label htmlFor={id} className={classes.label}>{label}</label> */}
              <dt className={classes.label}>
                sdflkj
                &nbsp;<Tooltip title="What do you want others to call you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </dt>
            </div>
          </Col>
          <Col md={24} lg={16}>
            {/* <Input
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
            <div className="ant-form-explain">{helperText}</div> */}
            <dd className={classes.content}>Ceiling</dd>
          </Col>
        </Row>
        </dl>
      </div>
    );
  }
}

export default injectSheet(styles)(TextField)
