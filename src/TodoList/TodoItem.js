import { useState } from "react"

const textDoneStyles = {
  color: "#bbbbbb",
  textDecoration: "line-through",
  fontStyle: "italic"
}

function TodoItem(props) {
  const [textStyles, setTextStyles] = useState({
    marginLeft: 10,
    pointerEvents: "none",
    transition: "color 250ms",
  })

  const handleMouseEnter = () => {
    if (!props.item.completed) {
      setTextStyles(Object.assign({}, textStyles, {color: "#126298"}))
    }
  }

  const handleMouseLeave = () => {
    setTextStyles(Object.assign({}, textStyles, {color: "#000000"}))
  }

  const isCompleted = props.item.completed
  const text = props.item.text
  let styles = {...textStyles}
  if (isCompleted) {
    Object.assign(styles, textDoneStyles)
  }

  return (
    <div className="todoItem"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      onClick={() => props.onChange()}
    >
      <input type="checkbox" style={{pointerEvents: "none"}} checked={isCompleted} onChange={() => 1} />
      <p onClick={() => props.onChange()} style={styles}>{text}</p>
    </div>
  )
}

export default TodoItem