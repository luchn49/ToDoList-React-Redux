import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../Actions/taskActions";

export class SearchTask extends Component {
  onHandleChange = e => {
    this.props.SearchTask(e.target.value);
  };
  render() {
    return (
      <div className="col-7">
        <input
          type="text"
          className="form-control"
          placeholder="Tìm tên..."
          onChange={this.onHandleChange}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatchEvent => {
  return {
    SearchTask: name => {
      dispatchEvent(action.searchTask(name));
    }
  };
};

export default connect(null, mapDispatchToProps)(SearchTask);
