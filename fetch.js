let phones = [
    {name: 'laptop', price: 80000, brand: 'lenovo', model: 'L20'},
    {name: 'mobile', price: 8000, brand: 'Iphone', model: '12 pro max'},
    {name: 'mobile', price: 7000, brand: 'sony', model: 'Xperia pro'},
    {name: 'desktop', price: 40000, brand: 'Dell', model: 'DE40'},
    {name: 'headphone', price: 800, brand: 'lenovo', model: 'NH10'},
    {name: 'watch', price: 400, brand: 'HP', model: 'HW50'},
]

let addNew = {name: 'bike', price: '1 crore', model: 'F230'}
let addNewTwo = {name: 'car', price: '2 laks', model: 'C230'}
let remove = phones.filter(phones => phones.name !== 'mobile')
let copy = [...phones, addNew,addNewTwo]
let copyTWo = [remove]
console.log(copy,copyTWo);
