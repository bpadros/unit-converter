let convertor = document.getElementById("convertor")
// let inputValue = number(document.getElementById("number").value)
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")






convertor.addEventListener("click",function(){
    let inputValue = (document.getElementById("number").value)
   
length.innerHTML = `${inputValue} meters = ${(inputValue*3.281).toFixed(3)} feet |${inputValue} feet = ${(inputValue/3.281).toFixed(3)} meters `

volume.innerHTML = `${inputValue} liters = ${(inputValue*0.264).toFixed(3)} gallons |${inputValue} gallons = ${(inputValue/0.264).toFixed(3)} liters `

mass.innerHTML = `${inputValue} kilos = ${(inputValue*2.204).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue/2.204).toFixed(3)} kilos `
})