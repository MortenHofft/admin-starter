// Helper styles for demo
// import DisplayFormikState from './DisplayFormikState';
import React, { Component } from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';
import TextField from './Form/TextField';

// Our inner form component. Will be wrapped with Formik({..})
const MyInnerForm = props => {
  console.log(props.values);
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    classes
  } = props;
  console.log(values);
  console.log(values.email);
  return (
    <form onSubmit={handleSubmit}>
      <h1>hej</h1>
      <TextField
        id="email"
        label="Enter your email"
        value={values.email}
        margin="normal"
        error={errors.email && touched.email}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={errors.email}
      />
      
      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </button>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>

      {/* <DisplayFormikState {...props} /> */}
    </form>
  );
};

class IdentifierForm extends Component {
  getForm = (props, handleSubmit) => {
    return withFormik({
      mapPropsToValues: () => {
        return {email: ''};
      },
      validationSchema: yup.object().shape({
        email: yup.string()
          .email('Invalid email address')
          .required('Email is required!'),
      }),
      handleSubmit: handleSubmit,
      displayName: 'BasicForm', // helps with React DevTools
    })(MyInnerForm);
  }
  
  render() {
    let onSubmit = this.props.onSubmit;
    // let startValues = this.props.values;
    let Form = this.getForm(this.props, (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        onSubmit(values);
        setSubmitting(false);
      }, 1000)});

    return (
      <div>
        <Form />
      </div>
    );
  }
}

export default IdentifierForm;

/*

Ønsket brug

<Identifier id="123" endpoint="/organization/456/identifier" onChange="myCallback" />

Logic
paper
  <IdentifierForm endpoint, id, callbacks>


Use a formbuilder with a config. 
Wrapping it in an identifierForm might not be necessary, 
but could make it easier to implement changes/overwrites

*/