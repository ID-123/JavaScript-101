const coders = [{
    id: 1,
    name: "jose",
    age: 19,
    status: "training",
    inactive: true,
}, {
    id: 1,
    name: "jamh",
    age: 19,
    status: "training",
    inactive: true,
}, {
    id: 1,
    name: "santiago",
    age: 19,
    status: "training",
    inactive: true,
}

]

// Ver antes de
console.log(JSON.stringify(coders))

// Edita
coders.filter((coder) => coder.name === "jose").map(c => {
    c.status = "employed"
    return c
})

console.log("despues");

console.log(JSON.stringify(coders));
