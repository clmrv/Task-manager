import { useEffect, useState } from "react"
import TodoItem from "./TodoItem"
import Input from "../inputs/Input"
import AddButton from "../inputs/AddButton"
import { listTitleChanged, listItemAdded, listItemMarked } from '../store/actions'
import { useDispatch, useSelector } from "react-redux"


function TodoList(props) {
  const dispatch = useDispatch()
  const listData = useSelector((store) => store.find((list) => list.id === props.id) )
  
  /*
    improvement todo? :
      move mode to redux store
  */

  const [addTaskMode, setAddTaskMode] = useState(false)
  const [changeTitleMode, setChangeTitleMode] = useState(false)

  useEffect(() => {
    if (!listData.title) {
      setChangeTitleMode(true)
    }
  }, [listData.title])


  const handleAddButton = () => {
    setAddTaskMode(true)
  }

  const addListItem = (text) => {
    if (text !== "") {
      dispatch(listItemAdded(listData.id, text))
    }
    setAddTaskMode(false)
  }

  const changeTitle = (title) => {
    if (title !== "") {
      dispatch(listTitleChanged(listData.id, title))
      setChangeTitleMode(false)
    }
  }

  let titleView = <span style={{alignSelf: "center"}}><h2>{listData.title}</h2></span>
  if (!addTaskMode) {
    if (changeTitleMode) {
      titleView = <span style={{alignSelf: "center"}} ><Input onSubmit={(text) => changeTitle(text)} /></span>
    } else {
      titleView = <span onClick={() => setChangeTitleMode(true)} style={{alignSelf: "center"}}><h2>{listData.title}</h2></span>
    }
  }

  const items = listData.items.map( (item) => 
    <TodoItem key={item.id} item={item} onChange={() => dispatch(listItemMarked(listData.id, item.id))} />
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
      {titleView}
      {items}
      <div style={newTaskPlaceholderStyles}>
        {newTaskPlaceholder}
      </div>
    </div>
  )
}

export default TodoList