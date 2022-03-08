// array maping

let products = [
    {name: 'laptop', price: 80000, brand: 'lenovo', model: 'L20'},
    {name: 'mobile', price: 8000, brand: 'Iphone', model: '12 pro max'},
    {name: 'desktop', price: 40000, brand: 'Dell', model: 'DE40'},
    {name: 'headphone', price: 800, brand: 'lenovo', model: 'NH10'},
    {name: 'watch', price: 400, brand: 'HP', model: 'HW50'},
]

let product = products.map(product => product.brand)
let productTwo = products.map(product => product.price)
console.log(product,productTwo);

products.forEach(item => console.log(item.brand))
products.forEach(item => console.log(item.model))


const cheap = products.filter(singelItem => singelItem.price <= 4000)
console.log(cheap);

const findWord = products.filter(names => names.name.includes('t'))
console.log(findWord);


