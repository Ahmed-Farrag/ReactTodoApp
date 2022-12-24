import React, { Component } from "react";

class Add extends Component {
  state = {
    name: "",
    age: "",
  };
  handeleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handeleSubmit = (e) => {
    e.preventDefault();
    if(e.target.name.value===''){
      return false
    }else{
      this.props.addItem(this.state)
    this.setState({
      name:'',
      age:''
    })
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handeleSubmit}>
          <input
            type="text"
            placeholder="Enter name..."
            id="name"
            onChange={this.handeleChange}
            value={this.state.name}
          />
          <input
            type="number"
            placeholder="Enter age..."
            id="age"
            onChange={this.handeleChange}
            value={this.state.age}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
export default Add;
