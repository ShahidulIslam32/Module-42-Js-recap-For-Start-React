const money = 190;
let food;

if(money > 200){
    food = 'Basmati Kacchi'
}
else{
    food = 'half tehari'
}
//ternery 
let findFood = money > 200 ? 'taka ache tai Basmati Kacchi khabo' : 'Half tehari Only, taka kom re vai';
console.log(findFood);


let a = '1000'
let b = +a
console.log(b);

let userActive = true;
displayUser   = () => console.log('display or user is active');
hideUser      = () => console.log('sign out or user is inactive');
userActive ? displayUser() : hideUser()


