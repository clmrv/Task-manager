import React from "react"


class AddButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      styles: {
        display: "flex",
        justifyContent: "center",
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#3282b8",
        opacity: 0,
        transition: "all 500ms"
      }
    }
  }
  
  componentDidMount() {
    setTimeout(() => this.setState((previous) => {
      let newStyles = {...previous.styles}
      newStyles.opacity = 1
      return {styles: newStyles}
    }), 0)
  }

  onMouseEnter() {
    this.setState((previous) => {
      let newStyles = {...previous.styles}
      newStyles.backgroundColor = "#126298"
      return {styles: newStyles}
    })
  }

  onMouseLeave() {
    this.setState((previous) => {
      let newStyles = {...previous.styles}
      newStyles.backgroundColor = "#3282b8"
      return {styles: newStyles}
    })
  }
  

  render() {
    return (
      <div 
      style={this.state.styles} 
      onClick={() => this.props.onClick()}
      onMouseEnter={() => this.onMouseEnter()}
      onMouseLeave={() => this.onMouseLeave()}>
        <span style={{color: "white", margin: 0, padding: 0, fontSize: 30}}>+</span>
      </div>
    )
  }
}

export default AddButton