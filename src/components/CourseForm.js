import React from "react";
import PropTypes from 'prop-types';
import TextInput from './common/TextInput';
import SelectInput from './common/SelectInput';

const selectOptions = [
  {
    label: "Cory House",
    value: 1,
  },
  {
    label: "Scott Allen",
    value: 2
  }
]

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        name="title"
        label="Title"
        onChange={props.onChange}
        value={props.course.title}
        error={props.errors.title}
      />

      <SelectInput 
        options={selectOptions}
        id="author"
        name="authorId"
        label="Author"
        onChange={props.onChange}
        value={props.course.authorId || ""}
        error={props.errors.authorId}
      />

      <TextInput
        label="Category"
        id="category"
        name="category"
        value={props.course.category || ""}
        onChange={props.onChange}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string,
    authorId: PropTypes.number,
    category: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    title: PropTypes.string,
    authorId: PropTypes.number,
    category: PropTypes.string,
  }).isRequired,
}

export default CourseForm;