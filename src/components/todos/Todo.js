import "./Todos.css"
import { BiEdit, BiTrashAlt, BiPlusCircle } from "react-icons/bi"
function Todo({
    text,
    id,
    category,
    deleteCh,
    editCh,
    editing,
    edit,
    cancellEditCh,
    checked,
    checkingCh,
}) {
    const callFunc = (e) => {
        let action = e.currentTarget.dataset.action
        if (action === "edit") {
            editCh(id)
        } else if (action === "delete") {
            deleteCh(id)
        } else if (action === "checked") {
            checkingCh(id)
        }
    }
    return (
        <div className='todo'>
            <span
                className='category'
                style={{ backgroundColor: category }}
            ></span>
            <p
                className='todo__text'
                style={
                    checked
                        ? { color: "var(--textColor)" }
                        : { color: "var(--textColor)" }
                }
                onClick={callFunc}
                data-action='checked'
            >
                {text}
                <span
                    className='line'
                    style={checked ? { width: "100%" } : { width: "0%" }}
                ></span>
            </p>

            <div className='settings'>
                {editing ? (
                    <BiPlusCircle
                        className='settings__icon cancell'
                        onClick={cancellEditCh}
                    />
                ) : (
                    <BiEdit
                        className='settings__icon'
                        data-action='edit'
                        onClick={callFunc}
                    />
                )}
                <BiTrashAlt
                    className='settings__icon'
                    data-action='delete'
                    onClick={callFunc}
                    style={edit && { pointerEvents: "none" }}
                />
            </div>
        </div>
    )
}

export default Todo
