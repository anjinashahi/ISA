// const number1 = prompt("Enter a number: ")
//         const number2 = prompt("Enter second number: ")
//         const operator = prompt("+, -, *, /")
//         let result
//         console.log(number1, number2, operator)
//         const add=(number1, number2) => {
//                 return number1 +number2
//             }
//         const sub = (number1, number2) =>{
//             return number1-number
//         }
//         const multiple = (number1, number2) => {
//             return number1*number2
//         }
//         const divide = (number1, number2) =>{
//             return number1/number2
//         }
//         if(operator == "+"){
//             result = add(number1, number2)
//         }
//         else if(operator == "-"){
//            result = sub(number1, number2)
//         }
//         else if(operator == "*"){
//             result = multiple(number1, number2)
//         }
//         else if(operator == "/"){
//             result = divide(number1, number2)
//         }
//         else{
//             console.log("Invalid input ")
//         }
//     console.log(result)
let cal = ''
let ans = ''
const show = document.getElementsByClassName("input")[0]
const num = document.querySelectorAll(".number")
console.log(num)
num.forEach(element => {
    console.log(element)
    element.addEventListener('click', ()=>{
        cal = cal + element.value
        show.innerHTML = cal
    })
});
let sign =''
let cal2 = ''
const show1 = document.getElementsByClassName("input")[0]

const command = document.querySelectorAll(".op")
command.forEach(element=> {
    element.addEventListener('click', ()=>{
        operation()
        sign = element.value
        show1.innerHTML = sign
        cal2 = cal
        cal = ''
    })
})
const eqbutton = document.getElementsByClassName("equal")[0]
eqbutton.addEventListener('click', ()=> {
   operation()
})
function operation(){
    if(sign == "+"){
        ans = parseFloat(cal2)+parseFloat(cal)
        console.log("print")
    }
    else if(sign == "-"){
        ans = parseFloat(cal2)-parseFloat(cal)
    }
    else if(sign == "*"){
        ans = parseFloat(cal2)*parseFloat(cal)
    }
    else if(sign == "/"){
        ans = parseFloat(cal2)/parseFlaot(cal)
    }
    console.log(ans)
    show1.innerHTML = ans
    cal = ans
}
