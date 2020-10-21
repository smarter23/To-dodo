import React, { Component } from 'react';
import { render } from '@testing-library/react';
import Additems from './components/AddItems'
import ItemList from './components/ItemList'
import DeleteItem from './components/deleteItem'
import './App.css';

class App extends Component {
  state = {
    items: []
  }

  AddNewitemhandle = item => {
    this.setState(prevState => ({ items: [...prevState.items, item] }));
    console.log(this.state.items)
  }
  onDeleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  }

  noItemsfind = () => {
    return this.state.items.length === 0

  }


  render() {
    return (
      <div className="App" >
        <div>
          <h1> Adding Shopping Todo List</h1>
          <Additems onAddItem={this.AddNewitemhandle} />
          <DeleteItem onDeleteLastItem={this.onDeleteLastItem}
            noItemsfind={this.noItemsfind()}
          />

          <ItemList items={this.state.items} />


        </div>
      </div>
    );
  }
}
export default App;
