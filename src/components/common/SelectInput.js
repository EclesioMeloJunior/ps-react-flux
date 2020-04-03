import React from 'react';
import PropType from 'prop-types';

function SelectInput(props) {
  const wrapperClasses = ["form-group"]
  
  if (props.error.length > 0) {
    wrapperClasses.push("has-error");
  }

  return (
    <div className={wrapperClasses.join(" ")}> 
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          className="form-control"
        >
          <option value="" />
          {props.options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            )
          })}
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  )
}

SelectInput.propTypes = {
  id: PropType.string.isRequired,
  label: PropType.string.isRequired,
  name: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
  value: PropType.any,
  options: PropType.arrayOf(PropType.shape({
    value: PropType.any.isRequired,
    label: PropType.string.isRequired,
  })).isRequired,
  error: PropType.string,
}

SelectInput.defaultProps = {
  error: "",
  value: "",
}


export default SelectInput;