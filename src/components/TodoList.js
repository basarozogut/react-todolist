import React from "react";
import TodoInput from './TodoInput'
import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 1, title: 'Do the grocery shopping', done: false },
                { id: 2, title: 'Feed the dog', done: true },
                { id: 3, title: 'Wash the dishes', done: false }
            ],
            userInput: "",
            editingId: null
        };

        this.nextId = Math.max(...this.state.todos.map(todo => todo.id)) + 1;

        this.handleDoneStatusChange = this.handleDoneStatusChange.bind(this);
        this.handleEditItem = this.handleEditItem.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleUserInputChange = this.handleUserInputChange.bind(this);
        this.handleSaveUserInput = this.handleSaveUserInput.bind(this);
        this.handleNewItem = this.handleNewItem.bind(this);
    }

    handleDoneStatusChange(e) {
        this.setState((prevState) => ({
            todos: prevState.todos.map(todo => {
                if (todo.id === e.id) {
                    todo.done = e.done;
                }

                return todo;
            })
        }));
    }

    handleEditItem(e) {
        this.setState((prevState) => {
            let item = prevState.todos.find(elem => elem.id === e.id);

            return {
                userInput: item.title,
                editingId: item.id
            };
        });
    }

    handleDeleteItem(e) {
        this.setState((prevState) => ({
            todos: prevState.todos.filter(todo => todo.id != e.id),
            userInput: "",
            editingId: null
        }));
    }

    handleUserInputChange(e) {
        this.setState({
            userInput: e.input
        })
    }

    handleSaveUserInput() {
        if (this.state.userInput == null ||
            this.state.userInput === "") {
            alert("Input can't be empty!");
            return;
        }

        this.setState((prevState) => {
            let newState = {
                userInput: "",
                editingId: null
            };

            if (prevState.editingId) {
                // update title
                newState.todos = prevState.todos.map(todo => {
                    if (todo.id === prevState.editingId) {
                        todo.title = prevState.userInput;
                    }

                    return todo;
                });
            } else {
                // insert new todo
                newState.todos = [
                    ...prevState.todos,
                    { id: this.nextId++, title: prevState.userInput, done: false }
                ];
            }

            return newState;
        });
    }

    handleNewItem() {
        this.setState({
            userInput: "",
            editingId: null
        });
    }

    render() {
        return (
            <div className="col-md-12">
                <h1>My Todo List</h1>
                <TodoInput
                    value={this.state.userInput}
                    onUserInputChange={this.handleUserInputChange}
                    onSaveUserInput={this.handleSaveUserInput}
                    onNewItem={this.handleNewItem} />
                <ul className='list-unstyled'>
                    {this.state.todos.map(todo =>
                        <TodoItem key={todo.id}
                            item={todo}
                            onDoneStatusChange={this.handleDoneStatusChange}
                            onEditItem={this.handleEditItem}
                            onDeleteItem={this.handleDeleteItem} />
                    )}
                </ul>
            </div>
        );
    }
}