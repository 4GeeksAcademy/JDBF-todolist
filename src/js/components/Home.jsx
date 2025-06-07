import React, {useState} from "react";

const Home = () => {
	const[ inputValue, setInputValue ] = useState("");
	const[ todos, setTodos ] = useState([]);	
console.log(todos);
	return (
		<div className="container">
			<h1>Lista</h1>
			<ul>
				<li>
					<input 
						type="text" 
						onChange={(event)=>setInputValue(event.target.value)}
						value={inputValue}
						onKeyDown= {(e)=> e.key === 'Enter' ? setTodos(todos.concat(inputValue)) : null}
						placeholder="Que quieres agregar?"/>
				</li>
					{todos.map((todo, index) => (
						<li key={index} className="todo-item">
							<div className="d-flex justify-content-between">
					<div>{todo}</div>
					<div 
						className="btn btn-danger delete-button"
						onClick={()=>setTodos(todos.filter((_,currentIndex)=> index != currentIndex))}
						style={{}}>
					X
					</div>
					</div>
				</li>
			))}
			</ul>
			<div>
				{todos.length>0? `${todos.length} item` : `"No hay tareas, añadir tareas`}
			</div>
		</div>
	);
};

export default Home;