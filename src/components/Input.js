import TextField from '@material-ui/core/TextField';
import { useState } from 'react';

function Input(props) {
  const [text, setText] = useState(props.text || '')
  
  const onSubmit = (e) => {
    props.onSubmit(text)
    e.preventDefault()
  }

  return (
    <form 
      style={{width: "100%"}}
      onSubmit={onSubmit} 
    >
      <TextField 
        id="todoInput" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        onBlur={onSubmit}
        autoFocus
        fullWidth
      />
    </form>
  )
}

export default Input