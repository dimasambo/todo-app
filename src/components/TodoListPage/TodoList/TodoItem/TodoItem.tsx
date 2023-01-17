import {Todo} from "../../../../types/types";
import {FC} from "react";
import {StyledTodoItem} from "./StyledTodoItem";

type PropsType = {
    todo: Todo
}

export const TodoItem: FC<PropsType> = ({todo}) => {

    return <StyledTodoItem>
        <span className={'todoCount'}>{todo.id}.</span>
        <span>{todo.title}</span>
    </StyledTodoItem>
}