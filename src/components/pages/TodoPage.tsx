import React, {FC, useEffect, useState} from 'react';
import TodoFrom from "../TodoFrom";
import {ITodo} from "../../interfaces/interfaces";
import TodoList from "../TodoList";

const TodoPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        setTodos(prevState => [newTodo, ...prevState])
    }
    const toggleHandler = (id: number) => {
        setTodos(prevState => prevState.map((todo) => {
            if (id === todo.id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }
    const removeHandler = (id: number) => setTodos(prevState => prevState.filter((todo) => id !== todo.id))

    return (
        <div>
            <TodoFrom onAdd={addHandler}/>
            <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
        </div>
    );
};

export default TodoPage;