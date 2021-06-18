import TextField from '@material-ui/core/TextField';
import { useState } from 'react';

function Input(props) {
  const [text, setText] = useState('')
  
  const onSubmit = (e) => {
    props.onSubmit(text)
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmit} >
      <TextField 
        id="todoInput" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        onBlur={onSubmit}
        />
    </form>
  )
}

export default Input