import React, { Component } from "react";
import { connect } from "react-redux";
import TaskItem from "../TaskItem/TaskItem";
import * as action from "../../Actions/taskActions";
import _ from "lodash";

class TaskList extends Component {
  renderTask = () => {
    let { TaskList, keyWord, SortTask } = this.props;
    if (SortTask.by === "name") {
      TaskList.sort((a, b) => {
        if (a.taskName.toLowerCase() > b.taskName.toLowerCase())
          return SortTask.value;
        else if (a.taskName.toLowerCase() < b.taskName.toLowerCase())
          return -SortTask.value;
        else return 0;
      });
    } else {
      TaskList.sort((a, b) => {
        if (a.taskStatus > b.taskStatus) return -SortTask.value;
        else if (a.taskStatus < b.taskStatus) return SortTask.value;
        else return 0;
      });
    }
    if (keyWord) {
      let SearchList = [...TaskList];
      SearchList = SearchList.filter(task => {
        return (
          task.taskName.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1
        );
      });
      if (!_.isEmpty(SearchList)) {
        TaskList = SearchList;
        return TaskList.map((task, index) => {
          return <TaskItem key={task.id} stt={index} task={task} />;
        });
      } else {
        return (
          <tr>
            <td colSpan="5" className="text-center">
              Không tìm thấy!!!
            </td>
          </tr>
        );
      }
    }
    return TaskList.map((task, index) => {
      return (
        <TaskItem
          key={task.id}
          stt={index}
          task={task}
          onChangeStatus={this.props.onChangeStatus}
          onDeleteTask={this.props.onDeleteTask}
          onEditTask={this.props.onEditTask}
        />
      );
    });
  };
  render() {
    return (
      <div className="form_list">
        <table className="table table-striped task__table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên công việc</th>
              <th scope="col">Mức độ</th>
              <th scope="col">Thao tác</th>
              <th scope="col">Ghi chú</th>
            </tr>
          </thead>
        </table>
        <div className="task__item">
          <table className="table table-striped task__table task__table1">
            <tbody>{this.renderTask()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    TaskList: state.TaskList,
    keyWord: state.keyWord,
    SortTask: state.SortTask
  };
};
const mapDispatchToProps = dispatchEvent => {
  return {
    onDeleteTask: id => {
      dispatchEvent(action.deleteTask(id));
    },
    onEditTask: id => {
      dispatchEvent(action.editTask(id));
    },
    onChangeStatus: id => {
      dispatchEvent(action.changeStatus(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
