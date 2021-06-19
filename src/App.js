import TodoList from './TodoList/TodoList'
import AddButton from './inputs/AddButton'
import { useDispatch, useSelector } from 'react-redux'
import { listAdded } from './store/actions'

function App(props) {
  const dispatch = useDispatch()
  const lists = useSelector((state) => state)

  const listsComponents = lists.map( (list) => <TodoList key={list.id} id={list.id} />)

  return (
    <div className={"listContainer"}>
      {listsComponents}
      <div style={{margin: 40}} >
        <AddButton onClick={() => dispatch(listAdded())} />
      </div>
    </div>
  )
}      
  
export default App