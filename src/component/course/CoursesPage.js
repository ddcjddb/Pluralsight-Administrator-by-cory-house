import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from '../../actions/courseActions';
import CourseList from "./CourseList";
// import CourseListRow from './CourseListRow';
import { browserHistory } from "react-router";


class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    // this.state = {
    //   course: { title: '' }
    // };
    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
  }

  // onTitleChange(e) {
  //   const course = this.state.course;
  //   course.title = e.target.value;
  //   this.setState({ course: course });
  // }

  // onClickSave() {
  //   this.props.actions.createCourse(this.state.course);
  // }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    const { courses } = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          className="btn btn-primary"
          value="Add Course"
          onClick={this.redirectToAddCoursePage} />
        <CourseList courses={courses} />
        {/* {this.props.courses.map(this.courseRow)} */}
        {/* <h2>Add Course</h2> */}
        {/* <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />
        <input
          type="submit"
          value="save"
          onClick={this.onClickSave}
        /> */}
        {/* <button
          value="save"
          onClick={this.onClickSave}
        >save</button> */}
      </div>
    );
  }
}

CoursesPage.propTypes = {

  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

