import React from 'react';
import PropTypes from 'prop-types';

function TextInput(props) {
  const wrapperClasses = ["form-group"];

  if (props.error.length > 0) {
    wrapperClasses.push("has-error")
  }

  return (
    <div className={wrapperClasses.join(" ")}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type="text"
          name={props.name}
          className="form-control"
          onChange={props.onChange}
          value={props.value}
        />
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  )
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
}

TextInput.defaultProps = {
  error: "",
  value: "",
}

export default TextInput;