// let linethrough = document.querySelectorAll(`.feature li`)

// for (let i=0; i < linethrough.length; i++){
//     linethrough[i].addEventListner(`click`, function(){
//     linethrough[i].style.text = "line-through"
//     }) 
// }

let list1 = document.querySelectorAll(`#section-1 li`)

for(let i=0; i < list1.length; i++){
    list1[i].addEventListener(`click`, function(){
        if(list1[i].style.textDecoration !== `line-through`){
            list1[i].style.textDecoration = `line-through`
        }   else(list[i].style.textDecoration = `none`)
    })
}

let list2 = document.querySelector(`#section-2`)
let list2All = document.querySelectorAll("#section-2 li")

list2.addEventListener(`click`, function(event){
    let element = event.target
    element.style.opacity = `0`
})

let list3 = document.querySelector(`#row`)
let list3All = document.querySelectorAll("#row img")

list3.addEventListener(`click`, function(event){
    let element = event.target
    element.style.width = `0px`
})

let button = document.querySelector("#destroy-all")
button.addEventListener(`click`, function(){
    burn()
})

function burn() {

    list1.forEach(function(i){
        i.style.textDecoration = "line-through"
    })

    list2All.forEach(function(i){
        i.style.opacity = "0"
    })

    list3All.forEach(function(i){
        i.style.width = "0px"
    })
    
}

//forEach 사용법

// forEach works similar to a for of loop
// goes through each element in the array you call the forEach method on

// syntax
/*
    array.forEach(function(item,i){
        // operation to perform on each item in the array
    })
    item (required) represents each individual element in the array that forEach will go through at a time
    i (optional) represents the index
*/

// forEach is optional syntax for forloops and forofloops

// for(let i = 0; i < list1.length; i++){
//     list1[i].addEventListener()
// }

// for each element in the array
list1.forEach(function(doesntmatter){
    console.log(doesntmatter.innerText)
    // console.log(item.innerText)
})

