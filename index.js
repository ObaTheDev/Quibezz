// function add() {
//     const NumberOne = document.getElementById('numberOne').value
//     const NumberTwo = document.getElementById('numberTwo').value
//     document.getElementById('answer').innerHTML = parseInt(NumberOne) + parseInt(NumberTwo)
// }
// function ClickMe() {
//     // document.getElementById('Box').style.marginRight = "300px"
//     document.getElementById("Box").style.marginLeft = "400px"
//     const FirstNumber = document.getElementById('first-Number').value 
//     const SecondNumber = document.getElementById('second-Number').value 
//     document.getElementById('myResult').innerHTML = parseInt(FirstNumber) + parseInt(SecondNumber)
    
// }

function Login(){
    document.getElementById ('Logindiv').style.borderBottom = "2px solid white"
    document.getElementById ('Logindiv').style.borderRadius = "2px"
    document.getElementById('Signupdiv').style.borderBottom = "none"
    document.getElementById('SignUpButton').innerHTML = "LOGIN"
    document.getElementById("Signid").style.display = 'none'

}
function Signup(){
    document.getElementById('Logindiv').style.borderBottom = "none"
    document.getElementById('Signupdiv').style.borderBottom = "2px solid white"
    document.getElementById('Signupdiv').style.borderRadius = "2px"
   document.getElementById('SignUpButton').innerHTML = "SIGNUP" 
   document.getElementById("Signid").style.display = 'block'
   
}
function SignUP(){
    alert (Welcome, to, Quibeez)
}
document.getElementById('SignUpButton').innerHTML = "LOGIN"
document.getElementById ('Logindiv').style.borderBottom = "2px solid white"
document.getElementById ('Logindiv').style.borderRadius = "2px"


