import {Field, Form, Formik} from "formik";
import React, {FC} from "react";
import {StyledAddTodo} from "./StyledAddTodo";
import {useDispatch} from "react-redux";
import {addTodo} from "../../Redux/todo/todo-slice";

type PropsType = {
    lastTodoItemId: number
    newTodoValue: string
    setNewTodoValue: (newTodoValue: string) => void
}

type InitialValuesFormType = {
    value: string
}

export const AddTodo: FC<PropsType> = ({lastTodoItemId, setNewTodoValue, newTodoValue}) => {

    const dispatch = useDispatch()

    const handleSubmit = (values: InitialValuesFormType) => {
        const value = values.value

        if (value !== '') {
            // @ts-ignore
            dispatch(addTodo({id: lastTodoItemId + 1, title: value, completed: false, userId: 1}))

            values.value = ''
            setNewTodoValue('')
        } else {
            alert('The field should not be empty!')
        }
    }

    return <StyledAddTodo>
        <Formik
            enableReinitialize
            initialValues={{value: newTodoValue}}
            onSubmit={handleSubmit}
        >
            <Form className={''}>
                <div className={'inputBox'}>
                    <Field type={"text"}
                           placeholder={"type todo..."}
                           className={'input'}
                           name={"value"}
                           onChange={(e: any) => setNewTodoValue(e.target.value)}/>
                    <span>{'Press "ENTER" to add new TODO item to the list'}</span>
                </div>
            </Form>
        </Formik>
    </StyledAddTodo>
}