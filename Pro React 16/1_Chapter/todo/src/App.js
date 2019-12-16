import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import VisibilityControl from "./VisibilityControl";

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {

      userName: "James",
      todoItems: [{ action: "Study React", done: false },
      { action: "Learn Saleforce", done: false },
      { action: "Learn C++", done: false },
      { action: "Learn C#", done: false }],
      showCompleted: true
    }

  }

  updateNewTextValue = (event) => {

    this.setState({ newItemText: event.target.value });

  }

  createNewTodo = () => {

    if (!this.state.todoItems.find(item => item.action === this.state.newItemText)) {

      this.setState({
        todoItems: [...this.state.todoItems, { action: this.state.newItemText, done: false }], newItemText: ""
      });

    }

  }

  // changeStateData = () => {

  //   this.setState({
  //     userName: this.state.userName === "James" ? "Logan" : "James"
  //   })

  // }

  toggleTodo = (todo) => this.setState({
    todoItems:
      this.state.todoItems.map(item => item.action === todo.action ? { ...item, done: !item.done } : item)
  });

  todoTableRows = (doneValue) => this.state.todoItems.filter(item => item.done === doneValue).map(item =>
    <tr key={item.action}>
      <td>{item.action}</td>
      <td><input type="checkbox" checked={item.done} onChange={() => this.toggleTodo(item)} /></td>
    </tr>
  );

  render = () => {

    return (
      <div>

        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName}'s To Do List
          ({this.state.todoItems.filter(t => !t.done).length} items to do)
        </h4>
        <div className="container-fluid">
          <div className="my-1">
            <input className="form-control"
              value={this.state.newItemText}
              onChange={this.updateNewTextValue} />
            <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>Add</button>
          </div>
          <table className="table table-striped table-boardered">
            <thead>
              <tr><th>Description</th><th>Done</th></tr>
            </thead>
            <tbody>{this.todoTableRows(false)}</tbody>
          </table>
          <div className="bg-secondary text-white text-center p-2">
            <VisibilityControl description="Completed Tasks" isChecked={this.state.showCompleted}
              clallback={(checked) => this.setState({ showCompleted: checked })} />
          </div>

        {this.state.showCompleted && 
        <tabel className="table table-striped table-borderd">
          <thead>
           <tr><th>Description</th><th>Done</th></tr> 
          </thead>
          <tbody>{this.todoTableRows(true)}</tbody>
        </tabel>}
        </div>

      </div >
    );

  }

}

export default App;
