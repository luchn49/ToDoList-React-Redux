import React, { Component } from "react";

class TaskItem extends Component {
  onDeleteTask = () => {
    this.props.onDeleteTask(this.props.task.id);
  };
  onEditTask = () => {
    this.props.onEditTask(this.props.task);
  };
  onChangeStatus = () => {
    this.props.onChangeStatus(this.props.task.id);
  };
  render() {
    let { task, stt } = this.props;
    return (
      <tr>
        <th scope="row" className = "task__num">{stt + 1}</th>
        <td className = "task__name">{task.taskName}</td>
        <td className = "task__status">
          <button
            className={
              task.taskStatus === "Cao" ? "btn btn-danger" : "btn btn-warning"
            }
            onClick={this.onChangeStatus}
          >
            {task.taskStatus}
          </button>
        </td>
        <td className = "task__button">
          <button
            type="button"
            className="btn btn-success mr-2"
            data-toggle="modal"
            data-target="#taskModal"
            onClick={this.onEditTask}
          >
            Sửa
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.onDeleteTask}
          >
            Xóa
          </button>
        </td>
        <td>{task.taskNote}</td>
      </tr>
    );
  }
}

export default TaskItem;
