const employee = {
    name : 'shahidul islam',
    IDE : 'VS Code',
    designation : 'MERN Developer',
    address: 'Dhaka',
    language : ['python', 'javascript', 'java', 'kotlin', 'flutter'],
    specification :{
        height : '5 feet',
        weight : '80 kg',
        expert : 'MERN',
        experiyence : '4 years',
        watch : {
            color : 'black',
            price : 500,
            brand: 'Rolex'
        }
    }
}

const [experties] = [employee.language]
const {name, designation, address} = employee;
const {height, weight, experiyence} = employee.specification;
const {color, brand} = employee.specification.watch;
console.log(name, designation, address);
console.log(height, weight, experiyence);
console.log(color,brand);
console.log(experties);