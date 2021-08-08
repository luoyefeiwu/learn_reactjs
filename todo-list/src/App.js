import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: [
                { id: 0, value: 'React', done: false, delete: false }
            ]
        };
    }
    addTodoItem = () => {
        const newTodoItem = {
            id: this.state.todoItems.length,
            value: this.refs.todoItemValue.value,
            done: false,
            delete: false
        };
        this.setState({
            todoItems: [...this.state.todoItems, newTodoItem]
        });
    };
    deleteTodoItem = (item) => {
        item.delete = true;
        this.setState({
            todoItems: [...this.state.todoItems, item]
        })
    }


    render() {
        return (
            <div>
                <h1>TodoList</h1>
                <div>
                    <input type="text" placeholder="add something..." ref="todoItemValue" />
                    <button type="submit" onClick={this.addTodoItem}>添加</button>
                </div>
                <ul>
                    {
                        this.state.todoItems.map((item) => {
                            if (item.delete) return;
                            return (
                                <li key={item.id}>
                                    <label>{item.value}</label>
                                    <button onClick={() => this.deleteTodoItem(item)}>删除</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}