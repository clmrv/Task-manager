import { useEffect, useState } from "react"
import TodoItem from "./TodoItem"
import Input from "../inputs/Input"
import AddButton from "../inputs/AddButton"
import { listTitleChanged, listItemAdded, listItemMarked } from '../store/actions'
import { useDispatch, useSelector } from "react-redux"
import * as styles from './styles'


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

  let titleView = <h2 style={{alignSelf: "center"}}>{listData.title}</h2>
  if (!addTaskMode) {
    if (changeTitleMode) {
      titleView = (
        <div style={styles.titleInputContainer}>
          <Input onSubmit={(text) => changeTitle(text)} text={listData.title} />
        </div>
      )
    } else {
      titleView = ( 
          <h2 onClick={() => setChangeTitleMode(true)} style={{alignSelf: "center"}}>
            {listData.title}
          </h2>
      )
    }
  }

  const items = listData.items.map( (item) => 
    <TodoItem 
      key={item.id} 
      item={item} 
      onChange={() => dispatch(listItemMarked(listData.id, item.id))} 
    />
  )

  
  let newTaskPlaceholder
  let newTaskPlaceholderStyles

  if (!changeTitleMode) {
    if (addTaskMode) {
      newTaskPlaceholderStyles = styles.inputContainer
      newTaskPlaceholder = <Input onSubmit={(text) => addListItem(text)} />
    } else {
      newTaskPlaceholderStyles = styles.addNewTaskButtonContainer
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