import React from 'react'
import TodoList from './TodoList'
import AddButton from './AddButton'

import sampleInput from "./sampleInput"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: sampleInput,
    }

  }

  addList() {
    this.setState( prev => {
      let newState = {...prev}
      let newListId = 1

      if (prev.lists.length > 0) {
        newListId = prev.lists[prev.lists.length-1].id + 1
      }

      const newList = {
        id: newListId,
        title: "",
        items: [],
      }

      newState.lists.push(newList)
      return newState
    })
  }

  markListItem(listId, itemId) {
    this.setState((prev) => {
      let newState = {...prev}
      newState.lists.map( (list) => {
        if (list.id === listId) {
          list.items.map( (item) => {
            if (item.id === itemId) {
              item.completed = !item.completed
            }
            return item
          })
        }
        return list
      })
      return newState
    })
  }

  addListItem(listId, text) {
    this.setState( (prev) => {
      let newState = {...prev}
      let newItemId
      newState.lists.map( (list) => {
        if (list.id === listId) {
          
          if (list.items.length > 0) {
            newItemId = list.items[list.items.length-1].id + 1
          } else {
            newItemId = 1
          }

          const item = {
            id: newItemId,
            text: text,
            completed: false,
          }
          list.items.push(item)
        }
        return list
      })
      return newState
    })
  }

  changeListTitle(listId, title) {
    this.setState((prev) => {
      let newState = {...prev}
      newState.lists.map( (list) => {
        if (list.id === listId) {
          list.title = title
        }
        return list
      })
      return newState
    })
      
   
  }

  render() {
    const lists = this.state.lists.map( (list) => 
      <TodoList 
        key={list.id} 
        items={list.items} 
        title={list.title} 
        changeListTitle={(title) => this.changeListTitle(list.id, title)}
        addListItem={(text) => this.addListItem(list.id, text)}
        markListItem={(itemId) => this.markListItem(list.id, itemId)}  
        />
    )


    return (
      <div className={"listContainer"}>
        {lists}
        <div style={{margin: 40}} ><AddButton onClick={() => this.addList()}/></div>
      </div>
    )
  }
}

export default App