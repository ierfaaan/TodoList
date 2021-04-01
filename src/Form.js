import { useEffect, useState } from "react"
import "./Form.css"
function Form({ addTodo, edit, taskEditing }) {
    const [text, setText] = useState("")
    const [category, setCategory] = useState("#e74c3c")

    useEffect(() => {
        if (edit) {
            setText(taskEditing.text)
        } else {
            setText("")
        }
    }, [edit, taskEditing])

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                let action = e.currentTarget.dataset.action
                addTodo(text, category, action, taskEditing.id)
                setText("")
            }}
            data-action={edit ? "edit" : "add"}
            className='footer__wrapper'
        >
            <div className='form-box'>
                <input
                    type='text'
                    value={text}
                    placeholder='add todo...'
                    onChange={(event) => {
                        setText(event.target.value)
                    }}
                    className='form-box__input'
                />
                <button type='submit' className='form-box__btn'>
                    {edit ? "Edit" : "Add"}
                </button>
            </div>
            <div className='colors'>
                <div className='color'>
                    <input
                        type='radio'
                        id='red'
                        className='color__radio'
                        value='#e74c3c'
                        name='category'
                        checked={category === "#e74c3c"}
                        onChange={(event) => {
                            setCategory(event.target.value)
                        }}
                    />
                    <span className='checked'></span>
                    <label htmlFor='red' className='color__label red'></label>
                </div>
                <div className='color'>
                    <input
                        type='radio'
                        id='blue'
                        className='color__radio'
                        value='#3498db'
                        name='category'
                        onChange={(event) => {
                            setCategory(event.target.value)
                        }}
                    />
                    <span className='checked'></span>
                    <label htmlFor='blue' className='color__label blue'></label>
                </div>
                <div className='color'>
                    <input
                        type='radio'
                        id='green'
                        className='color__radio'
                        value='#2ecc71'
                        name='category'
                        onChange={(event) => {
                            setCategory(event.target.value)
                        }}
                    />
                    <span className='checked'></span>
                    <label
                        htmlFor='green'
                        className='color__label green'
                    ></label>
                </div>
            </div>
        </form>
    )
}

export default Form
