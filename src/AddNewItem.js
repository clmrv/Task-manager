import React from "react"

class AddNewItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
      styles: {
        opacity: 0,
        transition: "opacity 500ms"
      }
    }

    this.inputRef = React.createRef()
  }

  handleChange(event) {
    this.setState({text: event.target.value})
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state.text)
    this.setState({text: ""})
    if (event) {
      event.preventDefault()
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState((previous) => {
      let newStyles = {...previous.styles}
      newStyles.opacity = 1
      return {styles: newStyles}
    }), 0)
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div style={{display: "flex", justifyContent: "flex-start"}}>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input 
            type="text"
            ref={this.inputRef} 
            value={this.state.text} 
            style={this.state.styles}
            onChange={(e) => this.handleChange(e)}
            onBlur={() => this.handleSubmit()}
     />
          </form>
      </div>
    )
  }
}

export default AddNewItem