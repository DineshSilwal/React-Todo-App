import './App.css';
import React, {useEffect, useState} from "react";
import {Todos, AddTodo, About, Footer, Header} from "./Components";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const App = () => {
    let initTodo;
    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    } else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }


    const onDelete = (todo) => {
        console.log("I am ondelete of todo", todo);
        // Deleting this way in react does not work
        // let index = todos.indexOf(todo);
        // todos.splice(index, 1);

        setTodos(todos.filter((e) => {
            return e !== todo;
        }));
        console.log("deleted", todos)
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    const addTodo = (title, desc) => {
        console.log("I am adding this todo", title, desc)
        let sno;
        if (todos.length === 0) {
            sno = 0;
        } else {
            //index ..

            sno = todos[todos.length - 1].sno + 1;
        }

        const myTodo = {
            sno: sno,
            title: title,
            desc: desc,
        }
        setTodos([...todos, myTodo]);
        console.log(myTodo);
    }

    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    return (
        <>
            {/*place the header-component inside -router*/}
            <Router>
                <Header title="My Todos List" searchBar={false}/>
                <Switch>
                    <Route exact path="/" render={() => {
                        return (
                            <>
                                <AddTodo addTodo={addTodo}/>
                                <Todos todos={todos} onDelete={onDelete}/>
                            </>)
                    }}>
                    </Route>
                    <Route exact path="/about">
                        <About/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </>
    );
}

export default App;