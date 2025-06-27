import React, { useState, useEffect } from "react";
import { createUser, getTasks, createTask, deleteTask } from "./api/todo.js"


const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	const [getTasksApi, setGetTasksApi] = useState([]);

	const dataApi = async () => {
		const data = await getTasks()
		setGetTasksApi(data)
	}
	const handleClick = async () => {
	    await createTask(inputValue)
		await dataApi()
		setInputValue('')
	}

	useEffect(() => {
		dataApi()


	}, [])
	return (
		<div className="container">
			<h1>lista</h1>
			<div className= "d-flex gap-2">
				<input
					type="text"
					onChange={(event) => setInputValue(event.target.value)}
					value={inputValue}
					placeholder="Que quieres agregar?" />
				<button className="btn btn-success" onClick= {handleClick}>Crear tarea</button>
			</div>
			<ul>
				{getTasksApi.map((todo, index) => (
					<li key={todo.id} className="todo-item">
						<div className="d-flex justify-content-between">
							<div>{todo.label}</div>
							<div
								className="btn btn-danger delete-button"
								onClick={ async () => (deleteTask(todo.id), await dataApi())}
								style={{}}>
								X
							</div>
						</div>
					</li>
				))}
			</ul>
			<div>
				{getTasksApi.length > 0 ? `${getTasksApi.length} item` : `"No hay tareas, añadir tareas`}
			</div>
		</div>
	);
};

export default Home;