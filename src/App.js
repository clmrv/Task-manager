import { useState } from 'react'
import TodoList from './TodoList/TodoList'
import AddButton from './inputs/AddButton'
import sampleInput from "./data/testData"

function App(props) {
  const [lists, setLists] = useState(sampleInput)

  const addList = () => {
    let newListId = 1
    if (lists.length > 0) {
      newListId = lists[lists.length-1].id + 1
    }

    const newList = {
      id: newListId,
      title: "",
      items: [],
    }
    setLists( lists.concat([newList]) )
  }

  const markListItem = (listId, itemId) => {
    // deep copy
    let newLists = lists.map( (list) => {
      const newList = {...list}
      newList.items = list.items.map( (item) => {return {...item}})
      return newList
    }) 

    newLists.map( (list) => {
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

    setLists(newLists)
  }

  const addListItem = (listId, text) => {
    // deep copy (w/o items)
    let newLists = lists.map( (list) => {
      const newList = {...list}
      newList.items = [...list.items]
      return newList
    }) 
    
    newLists.map( (list) => {
      if (list.id === listId) {
        let newItemId = 1
        if (list.items.length > 0) {
          newItemId = list.items[list.items.length-1].id + 1
        }

        const item = {
          id: newItemId,
          text: text,
          completed: false,
        }
        list.items.push(item) // works, because list.items is a reference
      }
      return list
    })

    setLists(newLists)
  }

  const changeListTitle = (listId, title) => {
    setLists(lists.map( (list) => {
      if (list.id === listId) {
        list.title = title
      }
      return list
    }))
  }

  const listsComponents = lists.map( (list) => 
    <TodoList 
      key={list.id} 
      items={list.items} 
      title={list.title} 
      changeListTitle={(title) => changeListTitle(list.id, title)}
      addListItem={(text) => addListItem(list.id, text)}
      markListItem={(itemId) => markListItem(list.id, itemId)}  
    />
  )

  return (
    <div className={"listContainer"}>
      {listsComponents}
      <div style={{margin: 40}} >
        <AddButton onClick={() => addList()} />
      </div>
    </div>
  )
}      
  
export default App