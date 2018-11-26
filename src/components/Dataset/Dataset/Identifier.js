import React from "react";
import { FormattedMessage } from "react-intl";
import { Form, Input, Select, Button, Row, Col } from "antd";
const FormItem = Form.Item;
const Option = Select.Option;

class IdentifierForm extends React.Component {
  state = {
    confirmDirty: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  render() {
    const { getFieldDecorator, isNew } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    const types = [
      "URL",
      "LSID",
      "HANDLER",
      "DOI",
      "UUID",
      "FTP",
      "URI",
      "UNKNOWN",
      "GBIF_PORTAL",
      "GBIF_NODE",
      "GBIF_PARTICIPANT",
      "GRBIO_ID",
      "GRBIO_URI"
    ];
    const options = types.map(type => (
      <Option key={type} value={type}>
        <FormattedMessage
          id={`enums.IdentifierType.${type}`}
          defaultMessage={type}
        />
      </Option>
    ));

    return (
      <React.Fragment>
        <Row type="flex" justify="center" align="top">
          <Col span={8}>box1</Col>
          <Col span={16}>box2</Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
        </Row>
      
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label={
              <FormattedMessage
                id="fieldIdentifier"
                defaultMessage="Identifier"
              />
            }
          >
            {getFieldDecorator("identifier", {
              initialValue: "something goes here",
              rules: [{ required: true, message: "Please input an identifier!" }]
            })(<Input disabled={true} style={{background: 'white', color: '#333'}} />)}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="fieldType" defaultMessage="Type" />}
          >
            {getFieldDecorator("type", {
              rules: [{ required: true, message: "Please select the identifier type!" }]
            })(
              <Select
                placeholder="Select a type"
                onChange={this.handleSelectChange}
              >
                {options}
              </Select>
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            {isNew && (
              <Button type="primary" htmlType="submit">
                Create
              </Button>
            )}
            {!isNew && (
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            )}
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Cancel
            </Button>
          </FormItem>
        </Form>
      </React.Fragment>
    );
  }
}

const WrappedIdentifierForm = Form.create()(IdentifierForm);
export default WrappedIdentifierForm;
