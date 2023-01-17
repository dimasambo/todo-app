import {FC} from "react";
import {TodoItem} from "./TodoItem/TodoItem";
import {StyledTodoList} from "./StyledTodoList";
import {Todo} from "../../../types/types";

type PropsType = {
    todos: Array<Todo>
    addingTodo: string
}

export const TodoList: FC<PropsType> = ({todos, addingTodo}) => {

    return <StyledTodoList>
        {todos.map(todo => {
            return <TodoItem key={todo.id} todo={todo}/>
        })}
        {addingTodo !== '' &&
            <div className={'addingTodo'}>
                <span>Adding: </span>
                <span>{addingTodo}</span>
            </div>
        }
    </StyledTodoList>
}