import React, { Component } from 'react';
import './App.css';
import Container from './components/todo_container';
import Form from './components/todo_form';
import TodoList from './components/todo-list';

class App extends Component {
  constructor(props) {
    super(props);
    this.id = 3;
    this.state = {
        input: '',
        todos: [
            {id: 1, text: "할일 1", checked: false},
            {id: 2, text: "할일 2", checked: true},
            {id: 3, text: "할일 3", checked: false}
        ]
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const todos = this.state.todos;
    this.id++;
    const input = this.state.input;

    const new_todos = todos.concat({id: this.id, text: input, checked: false});
    this.setState({
      todos: new_todos,
      input: ''
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    const new_todos = todos.filter( (todo) => todo.id !== id);

    this.setState({
      todos: new_todos
    });
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex( (todo) => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];
    console.log(id);

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };
    this.setState({
      todos: nextTodos
    });
  }

  render() {
    const { input, todos } = this.state;
    const { handleChange, handleCreate, handleKeyPress, handleRemove, handleToggle } = this;

    return (
      <div className="App">
        <Container
        form={<Form input={input} onChange={handleChange} onKeyPress={handleKeyPress} onCreate={handleCreate} />}
        list={<TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle} />}>
        </Container>
      </div>
    );
  }
}
export default App;
