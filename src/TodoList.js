import React from "react"
import TodoItem from "./TodoItem"
import Input from "./Input"
import AddButton from "./AddButton"

class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.container = React.createRef()
    this.containerWidth = null

    this.state = {      
      inputMode: false,
      changeTitle: false,
    }

    
  }

  componentDidMount() {
    this.containerWidth = this.container.current.clientWidth
    this.setState((previous) => {
      let newState = {...previous}
      if (!this.props.title) {
        newState.changeTitle = true
      }
      return newState
    })
  }

  componentDidUpdate() {
    this.containerWidth = this.container.current.clientWidth
  }


  handleAddButton() {
    this.setState( (previous) => {
      let newState = {...previous}
      newState.inputMode = true
      return newState
    })
  }

  addListItem(text) {
    if (text !== "") {
      this.props.addListItem(text)
    }
    this.setState({inputMode: false})
  }

  changeTitle(title) {
    if (title !== "") {
      this.props.changeListTitle(title)
      this.setState({changeTitle: false})
    }
  }



  render() {
    
    let inputStyles = {
      alignSelf: "flex-end",
      maxHeight: 19
    }

    let inputPlaceholder
    if (!this.state.changeTitle) {
      if (this.state.inputMode)
        inputPlaceholder = <Input width={this.containerWidth} onSubmit={(text) => this.addListItem(text)} />
      else {
        Object.assign(inputStyles, {position: "relative", bottom: 12, left: 10})
        inputPlaceholder = <AddButton onClick={() => this.handleAddButton()} />
      }
    }

    let title
    if (this.state.changeTitle) {
      title = <Input width={this.containerWidth} onSubmit={(text) => this.changeTitle(text)} />
    } else {
      title = <span onClick={() => this.setState({changeTitle: true})} style={{alignSelf: "center"}}><h2>{this.props.title}</h2></span>
    }
 
    const items = this.props.items.map( (item) => 
      <TodoItem key={item.id} item={item} onChange={() => this.props.markListItem(item.id)} />
    )
    
    return (
        <div className="todoList" ref={this.container}>
          {title}
          {items}
          <div style={inputStyles}>{inputPlaceholder}</div>
        </div>
    )}
}

export default TodoList