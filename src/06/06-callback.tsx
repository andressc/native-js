import React, {JSX, MouseEvent} from "react"

export const User: React.FC = (): JSX.Element => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        alert("user have been deleted")
    }

    const saveUser = () => {
        alert("user have been saved")
    }

    const nameChangedHandler = () => {
        alert("name changed")
    }

    const focusLostHandler = () => {
        alert("focus lost")
    }


    return (
        <div>
            <textarea onChange={nameChangedHandler} onBlur={focusLostHandler}>Andrey</textarea>
            <button onClick={deleteUser}>Delete</button>
            <button onClick={saveUser}>Save</button>
        </div>
    )
}