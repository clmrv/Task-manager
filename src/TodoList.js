import React from "react"
import TodoItem from "./TodoItem"
import todoInput from "./todoInput"
import AddNewItem from "./AddNewItem"
import AddButton from "./AddButton"

class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: todoInput,
      inputMode: false,
    }

  }

  mark(id) {
    let itemList = this.state.items.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed
      }
      return item
    })
    this.setState({items: itemList})
  }

  addItem(text) {
    this.setState( (previous) => {
      const newState = {...previous}
      newState.inputMode = false

      if (text !== "") {
        const newId = previous.items[previous.items.length - 1].id + 1
        const item = {
          id: newId,
          text: text,
          completed: false,
        }
        newState.items.push(item)
      }

      return newState
    })
  }

  addItemButton() {
    this.setState( (previous) => {
      let newState = {...previous}
      newState.inputMode = !previous.inputMode
      return newState
    })
  }


  render() {
    let inputPlaceholder
    let inputStyles = {
      alignSelf: "flex-end",
      maxHeight: 19
    }

    if (this.state.inputMode)
      inputPlaceholder = <AddNewItem onSubmit={(text) => this.addItem(text)} />
    else {
      Object.assign(inputStyles, {position: "relative", bottom: 12, left: 10})
      inputPlaceholder = <AddButton onClick={() => this.addItemButton()} />
    }

    const items = this.state.items.map( (item) => 
    <TodoItem key={item.id} item={item} onChange={() => this.mark(item.id)} />)
    return (
        <div className="todoList">
          {items}
          <div style={inputStyles}>{inputPlaceholder}</div>
        </div>
    )}
}

export default TodoList