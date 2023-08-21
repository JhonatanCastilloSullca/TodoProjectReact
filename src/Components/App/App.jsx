import './App.css'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'

const defaultTodos = [
  {text:'Comprar Agua', completed: false},
  {text:'Comprar Arroz', completed: false},
  {text:'Comprar Azucar', completed: true},
  {text:'Comprar Leche', completed: false},

];

function App() {
  return (
    
    <>
    <div className='w-full max-w-md grid place-content-center mx-auto'>

    
    <TodoCounter completed={10} total={16}/>
    <TodoSearch/>
    <TodoList>
      {defaultTodos.map(
        todo =>(
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          />
        )
      )}
    </TodoList>
    <CreateTodoButton/>
    </div>
    </>
  )
}
export default App