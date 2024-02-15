async function getTodos() {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let arr = await res.json();
    return arr;
}

async function printTodos() {
    let arr = await getTodos();
    let newArr = arr.map(({ id, title }) => ({
        id,
        title,
    }));
    console.log(newArr);
}

printTodos();
