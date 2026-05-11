const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
]

// Filter
console.log('Filter')

const filteredItems = items.filter((item) => {
    return item.price <= 100
})

console.log(filteredItems)

// Map
console.log('Map')

const itemNames = items.map((item) => {
    return item.price
})

console.log(itemNames)

// Find
console.log('Find')

const foundItem = items.find((item) => {
    return item.name === 'Book'
})

console.log(foundItem)

// ForEach
console.log('ForEach')

items.forEach((item) => {
    console.log(item.name)
})

// Some
console.log('Some')

const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
})

console.log(hasInexpensiveItems)

// Every
console.log('Every')

const expensiveItems = items.every((item) => {
    return item.price <= 100
})

console.log(expensiveItems)

// Reduce
console.log('Reduce')

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

console.log(total)

// Includes
console.log('Includes')

const example = [1, 2, 3, 4, 5]

const includesValue = example.includes(5)

console.log(includesValue)