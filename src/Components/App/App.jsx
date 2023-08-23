import './App.css'
import React from 'react'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'

const defaultTodos = [
  {text:'Comprar Agua', completed: false},
  {text:'Comprar Arroz', completed: true},
  {text:'Comprar Azucar', completed: true},
  {text:'Comprar Leche', completed: false},
  

];

function App() {
  
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    }
  );
  const completedTodos = todos.filter((todo) => todo.completed).length;const totalTodos = todos.length;

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[index].completed = true;
    setTodos(newTodos);
  } 
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(index,1);
    setTodos(newTodos);
  } 
  

  return (
    <>
    <div className='w-full max-w-md grid place-content-center mx-auto'>

    
    <TodoCounter completed={completedTodos} total={totalTodos}/>
    <TodoSearch
    searchValue ={searchValue}
    setSearchValue = {setSearchValue}
    />
    <TodoList>
      {searchedTodos.map(
        todo =>(
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete = {() => completeTodo(todo.text)}
          onDelete = {() => deleteTodo(todo.text)}
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