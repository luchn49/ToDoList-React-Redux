import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as action from "../../Actions/taskActions";

export class TaskModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      taskName: "",
      taskStatus: "",
      taskNote: "",
      SelectedTask: {}
    };
  }

  onHandleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSaveTask = () => {
    this.props.onSaveTask(this.state);
  };
  onAddTask = () => {
    this.props.onAddTask();
  };
  onResetModal = () => {
    this.setState({
      id: "",
      taskName: "",
      taskStatus: "",
      taskNote: "",
      SelectedTask: {}
    });
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      !_.isEmpty(nextProps.SelectedTask) &&
      !_.isEqual(nextProps.SelectedTask, prevState.SelectedTask)
    ) {
      return {
        SelectedTask: nextProps.SelectedTask,
        id: nextProps.SelectedTask.id,
        taskName: nextProps.SelectedTask.taskName,
        taskStatus: nextProps.SelectedTask.taskStatus,
        taskNote: nextProps.SelectedTask.taskNote
      };
    }
    return null;
  }
  render() {
    return (
      <div className="col-3 d-flex">
        <div className="task_modal">
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-info"
            data-toggle="modal"
            data-target="#taskModal"
            onClick={() => {
              this.onAddTask();
              this.onResetModal();
            }}
          >
            Thêm công việc
          </button>
          {/* Modal */}
          <div
            className="modal fade"
            id="taskModal"
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    {this.state.id ? "Cập nhật công việc" : "Thêm công việc"}
                  </h5>
                  <button type="button" className="close" data-dismiss="modal">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlInput1">
                        Tên công việc
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        onChange={this.onHandleChange}
                        value={this.state.taskName}
                        name="taskName"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect1">Mức độ</label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        onChange={this.onHandleChange}
                        value={this.state.taskStatus}
                        name="taskStatus"
                      >
                        <option>Vui lòng chọn</option>
                        <option>Cao</option>
                        <option>Thấp</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">
                        Ghi chú
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={2}
                        onChange={this.onHandleChange}
                        value={this.state.taskNote}
                        name="taskNote"
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Thoát
                  </button>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={this.onSaveTask}
                  >
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    SelectedTask: state.SelectedTask
  };
};

const mapDispatchToProps = dispatchEvent => {
  return {
    onSaveTask: newTask => {
      dispatchEvent(action.onSaveTask(newTask));
    },
    onAddTask: () => {
      dispatchEvent(action.removeEditStaff());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskModal);
