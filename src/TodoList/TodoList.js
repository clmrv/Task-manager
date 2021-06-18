import { useEffect, useState } from "react"
import TodoItem from "./TodoItem"
import Input from "../inputs/Input"
import AddButton from "../inputs/AddButton"


function TodoList(props) {
  const [addTaskMode, setAddTaskMode] = useState(false)
  const [changeTitleMode, setChangeTitleMode] = useState(false)

  useEffect(() => {
    if (!props.title) {
      setChangeTitleMode(true)
    }
  }, [props.title])


  const handleAddButton = () => {
    setAddTaskMode(true)
  }

  const addListItem = (text) => {
    if (text !== "") {
      props.addListItem(text)
    }
    setAddTaskMode(false)
  }

  const changeTitle = (title) => {
    if (title !== "") {
      props.changeListTitle(title)
      setChangeTitleMode(false)
    }
  }

  let title = <span style={{alignSelf: "center"}}><h2>{props.title}</h2></span>
  if (!addTaskMode) {
    if (changeTitleMode) {
      title = <span style={{alignSelf: "center"}} ><Input onSubmit={(text) => changeTitle(text)} /></span>
    } else {
      title = <span onClick={() => setChangeTitleMode(true)} style={{alignSelf: "center"}}><h2>{props.title}</h2></span>
    }
  }

  const items = props.items.map( (item) => 
    <TodoItem key={item.id} item={item} onChange={() => props.markListItem(item.id)} />
  )

  let newTaskPlaceholderStyles = {
    alignSelf: "center",
    maxHeight: 19,
  }
  let newTaskPlaceholder
  if (!changeTitleMode) {
    if (addTaskMode) {
      newTaskPlaceholder = <Input onSubmit={(text) => addListItem(text)} />
    } else {
      Object.assign(newTaskPlaceholderStyles, {alignSelf: "flex-end", position: "relative", bottom: 12, left: 10})
      newTaskPlaceholder = <AddButton onClick={() => handleAddButton()} />
    }
  }

  return (
    <div className="todoList">
      {title}
      {items}
      <div style={newTaskPlaceholderStyles}>
        {newTaskPlaceholder}
      </div>
    </div>
  )
}

export default TodoList