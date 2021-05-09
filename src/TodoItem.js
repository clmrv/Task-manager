import React from "react"

const textDoneStyles = {
  color: "#bbbbbb",
  textDecoration: "line-through",
  fontStyle: "italic"
}

class TodoItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      textStyles: {
        marginLeft: 10,
        pointerEvents: "none",
        opacity: 0,
        transition: "color 250ms, opacity 500ms",
      },
      checkboxStyles: {
        pointerEvents: "none",
        opacity: 0,
        transition: "opacity 500ms",
      }
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState((previous) => {
      let newTextStyles = {...previous.textStyles}
      newTextStyles.opacity = 1
      let newCheckboxStyles = {...previous.checkboxStyles}
      newCheckboxStyles.opacity = 1
      return {textStyles: newTextStyles, checkboxStyles: newCheckboxStyles}
    }), 0)
  }

  handleMouseEnter() {
    if (!this.props.item.completed) {
      this.setState((previous) => {
        let newStyles = {...previous.textStyles}
        newStyles.color = "#126298"
        return {textStyles: newStyles}
      })
    }
  }

  handleMouseLeave() {
    if (!this.props.item.completed) {
      this.setState((previous) => {
        let newStyles = {...previous.textStyles}
        newStyles.color = "#000000"
        return {textStyles: newStyles}
      })
    }
  }
  
  render() {
    const isCompleted = this.props.item.completed
    const text = this.props.item.text
    let styles = {...this.state.textStyles}
    if (isCompleted)
      Object.assign(styles, textDoneStyles)

    return (
      <div className="todoItem"
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
        onClick={() => this.props.onChange()}
      >
        <input type="checkbox" style={this.state.checkboxStyles} checked={isCompleted} onChange={() => 1} />
        <p onClick={() => this.props.onChange()} style={styles}>{text}</p>
      </div>
    )
  }
}

export default TodoItem