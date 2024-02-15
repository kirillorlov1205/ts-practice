// async / await --------------

async function getPostById(id) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
}

async function showPosts() {
    let arr = [];
    arr.push(await getPostById(3));
    arr.push(await getPostById(7));
    arr.push(await getPostById(15));
    arr.push(await getPostById(23));
    console.log(arr);
}
showPosts();

// then--------------
// function getPostById(id) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
//         (res) => res.json()
//     );
// }

// async function showPosts() {
//     let arr = [];
//     getPostById(3)
//         .then((res) => arr.push(res))
//         .then(() => getPostById(7))
//         .then((res) => arr.push(res))
//         .then(() => getPostById(15))
//         .then((res) => arr.push(res))
//         .then(() => getPostById(23))
//         .then((res) => arr.push(res))
//         .then(console.log(arr))
//         .catch((err) => console.log(err));
// }

// showPosts();
