import React, { Component } from "react";
import SearchTask from "./Search/SearchTask";
import SortTask from "./Sort/SortTask";
import TaskModal from "./TaskModal/TaskModal";
import TaskList from "./TaskList/TaskList";

export default class TaskControl extends Component {
  render() {
    return (
      <div className="bg_body">
        <div className="container">
          <h1>to do list</h1>
          <div className="form_input">
            <div className="row m-0">
              <SearchTask />
              <SortTask />
              <TaskModal />
            </div>
          </div>
          <TaskList />
        </div>
      </div>
    );
  }
}
