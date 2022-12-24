import React, { Component } from "react";
import Add from "./components/AddItem/Add";
import Todo from "./components/Todolist/Todo";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "ahmed", age: 10 },
      { id: 2, name: "farrag", age: 20 },
      { id: 3, name: "addy", age: 30 },
    ],
  };

  deleteItem = (id) => {
    let items = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items });
  };

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };

  render() {
    return (
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <Todo items={this.state.items} deleteItem={this.deleteItem} />
        <Add addItem={this.addItem} />
      </div>
    );
  }
}
export default App;
