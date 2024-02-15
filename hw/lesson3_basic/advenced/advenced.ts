// taskOneAdvenced();
// taskThreeAdvenced();

function taskOneAdvenced() {
    let a = 4;
    let b = 3;

    [a, b] = [b, a];
    console.log(a);
    console.log(b);
}

function taskThreeAdvenced() {
    for (let i = 0; i < 10; i++) {
        console.log("*".repeat(i));
    }
}
