import React, {FC, useState} from "react";
import {useSelector} from "react-redux";
import {TodoList} from "./TodoList/TodoList";
import {AddTodo} from "../AddTodo/AddTodo";
import {StyledTodoListPage} from "./StyledTodoListPage";
import {State} from "../../Redux/redux-store";
import {DownloadTodoList} from "../DownloadTodoList/DownloadTodoList";

export const TodoListPage: FC = () => {

    const [newTodoValue, setNewTodoValue] = useState('')

    const {todos} = useSelector((state: State) => state.todo)

    return <StyledTodoListPage>
        <DownloadTodoList/>
        {todos.length
            ? <>
                <AddTodo lastTodoItemId={todos[todos.length - 1].id}
                         setNewTodoValue={setNewTodoValue} newTodoValue={newTodoValue}/>
                <div className={'todoListsWrapper'}>
                    <TodoList todos={todos} addingTodo={newTodoValue}/>
                    <TodoList todos={todos} addingTodo={newTodoValue}/>
                </div>
            </>
            : <div>{'Please, download TODO list'}</div>
        }
    </StyledTodoListPage>
}