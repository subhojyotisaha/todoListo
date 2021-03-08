import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/* 

1. Add Todo
2. Display Todos
3. Cross-off Todos
4. Show Number of Active Todos
5. Filter All/Active/Complete
6. Delete Todos
7. Delete all complete
    7.1 Only show if atleast one is complete
8. Button to Toggle all on/off

*/

export class TodoList extends Component {
  state = {
    todos: [],
    todoToShow: "all",
    toggleCompleteAll: true,
  };

  addTodo = (todo) => {
    this.setState((state) => ({ todos: [todo, ...state.todos] }));
  };

  toggleComplete = (id) => {
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    }));
  };

  ListType = (s) => {
    this.setState({
      todoToShow: s,
    });
  };

  handleDelete = (id) => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  };

  removeAllComplete = () => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => !todo.complete),
    }));
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else {
      todos = this.state.todos.filter((todo) => todo.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            deleteTodo={() => this.handleDelete(todo.id)}
            toggleComplete={() => this.toggleComplete(todo.id)}
            todo={todo}
          />
        ))}
        <div>
          Number of Remaining Tasks :{" "}
          {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <div>
          <button onClick={() => this.ListType("all")}>All</button>
          <button onClick={() => this.ListType("active")}>Active</button>
          <button onClick={() => this.ListType("completed")}>Completed</button>
        </div>
        {this.state.todos.some((todo) => todo.complete) ? (
          <div>
            <button onClick={this.removeAllComplete}>
              Delete All Completed Tasks
            </button>
          </div>
        ) : null}
        <div>
          <button
            onClick={() => {
              this.setState((state) => ({
                todos: state.todos.map((todo) => ({
                  ...todo,
                  complete: state.toggleCompleteAll,
                })),
                toggleCompleteAll: !state.toggleCompleteAll,
              }));
            }}
          >
            Toggle Complete All: {`${this.state.toggleCompleteAll}`}
          </button>
        </div>
      </div>
    );
  }
}

export default TodoList;
