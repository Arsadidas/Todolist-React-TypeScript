import React, {FC, useState} from 'react';
import {ITodo} from "../interfaces/interfaces";

interface TodoListProps {

    todos: ITodo[];

    onToggle(id: number): void

    onRemove(id: number): void
}

const TodoList: FC<TodoListProps> = ({todos, onRemove, onToggle}) => {
    if (todos.length === 0) {
        return <p className={'center'}>Список дел пуст</p>
    }
    return (
        <div>
            <ul>
                {todos.map((todo) => {
                    const classes = ['todo']
                    if (todo.completed) {
                        classes.push('completed')
                    }
                    return (
                        <li className={classes.join(' ')} key={todo.id}>
                            <label>
                                <input
                                    onChange={() => onToggle(todo.id)}
                                    type="checkbox"
                                    checked={todo.completed}
                                />

                                <span>{todo.title}</span>

                                <i
                                    className='material-icons red-text'
                                    onClick={() => onRemove(todo.id)}>delete</i>
                            </label>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default TodoList;