export const createUser = async () => {
    const response = await fetch("https://playground.4geeks.com/todo/users/JDBF", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
};

export const getTasks = async () => {
    const response = await fetch("https://playground.4geeks.com/todo/users/JDBF")
    if (!response.ok) createUser()
    const data = await response.json()
    return data.todos
}

export const createTask = async (task) => {
    const response = await fetch("https://playground.4geeks.com/todo/todos/JDBF", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify( {
            "label": task,
            "is_done": false
        })

    }) 

}
 export const deleteTask = async (id) => {
       const response = await fetch("https://playground.4geeks.com/todo/todos/" + id, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
       })
 }