import React, { Component } from "react";
import * as action from "../../Actions/taskActions";
import { connect } from "react-redux";

export class SortTask extends Component {
  getValueSort = (by, value) => {
    let SortTask = {
      by: by,
      value: value
    };
    this.props.onSortTask(SortTask);
  };
  render() {
    const { SortTask } = this.props;
    return (
      <div className="col-2 d-flex justify-content-end">
        <div className="Sort">
          <button
            className="btn btn-secondary dropdown-toggle ml-auto"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
          >
            Sắp Xếp
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              href="#a"
              className={
                SortTask.by === "name" && SortTask.value === 1
                  ? "dropdown-item sort_selected"
                  : "dropdown-item"
              }
              onClick={() => {
                this.getValueSort("name", 1);
              }}
            >
              <span className="d-inline-block dropdown-item ">
                <i className="fa fa-sort-alpha-down pr-2 " />
                Tên A-Z
              </span>
            </a>
            <a
              href="#a"
              className={
                SortTask.by === "name" && SortTask.value === -1
                  ? "dropdown-item sort_selected"
                  : "dropdown-item"
              }
              onClick={() => {
                this.getValueSort("name", -1);
              }}
            >
              <span className=" d-inline-block dropdown-item">
                <i className="fa fa-sort-alpha-up pr-2" />
                Tên Z-A
              </span>
            </a>
            <a
              href="#a"
              className={
                SortTask.by === "status" && SortTask.value === -1
                  ? "dropdown-item sort_selected border-top"
                  : "dropdown-item border-top"
              }
              onClick={() => {
                this.getValueSort("status", -1);
              }}
            >
              <span className="d-inline-block dropdown-item">
                <i className="fa fa-long-arrow-alt-down pr-2" />
                Mức độ
              </span>
            </a>
            <a
              href="#a"
              className={
                SortTask.by === "status" && SortTask.value === 1
                  ? "dropdown-item sort_selected"
                  : "dropdown-item"
              }
              onClick={() => {
                this.getValueSort("status", 1);
              }}
            >
              <span className="d-inline-block dropdown-item">
                <i className="fa fa-long-arrow-alt-up pr-2" />
                Mức độ
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSortTask: SortTask => {
      dispatch(action.sortTask(SortTask));
    }
  };
};
const mapStateToProps = state => {
  return {
    SortTask: state.SortTask
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SortTask);
