import React, {useState} from 'react';

export const AddTodo = ({addTodo}) => {
    // declare state ... state can be changed only using useState Hooks
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        // prevents from refreshing..page
        e.preventDefault();
        // if not title and not desc : alert
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        } else {
            // call add todo function comes as props ...
            addTodo(title, desc);
            // once added set field : empty
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    {/*set initial value to input : input takes empty value */}
                    {/*onchange captures the value inserted.*/}
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control"
                           id="title" aria-describedby="emailHelp"/>

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                 {/*set initial value to description : input takes empty value*/}
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control"
                           id="desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}