import {FC} from "react";
import {StyledDownloadTodoList} from "./StyledDownloadTodoList";
import {useDispatch} from "react-redux";
import {requestTodos} from "../../Redux/todo/todo-slice";

export const DownloadTodoList: FC = () => {

    const dispatch = useDispatch()

    const handleClick = () => {
        // @ts-ignore
        dispatch(requestTodos())
    }

    return <StyledDownloadTodoList>
        <button onClick={handleClick}>{'Download TODO List'}</button>
    </StyledDownloadTodoList>
}