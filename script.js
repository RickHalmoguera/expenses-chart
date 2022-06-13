const sheetDisplay= document.getElementById("sheet")
const totalExpenseDisplay= document.getElementById("totalExpense")

let html=""
let valueArray=[]

const displayBars= (data)=>{
/* Get the higher amount in the data file, the higher value will set the height of the taller bar.  */

 valueArray= data.map(data => data.amount)
 valueArray.sort((a,b)=> b-a)

 /*Display the total amount of this week expenses*/
 totalExpenseDisplay.innerText=`$${valueArray.reduce((total,num)=> total + num).toFixed(2)}`


/* Get every element of the Data File and renders the bar with the style */ 

   

    data.forEach(element=> {
        sheetDisplay.innerHTML+= 
        `<div class"${element.day}bar-container">
            <div class=" amount-tag hover hidden ${element.day}-tag" id="${element.day}Tag"> $${element.amount}</div>
            <div class=" ${element.day}bar bar ${element.amount == valueArray[0] ? "taller-bar" :""}" id="${element.day}Bar"></div>
        </div>
        `
        document.querySelector(`.${element.day}bar`).style.height=`${(element.amount *100)/valueArray[0]}px`
    });
    
    data.forEach(element => {
        sheetDisplay.innerHTML+=`<div class="day">${element.day}</div>`
    });
    
}

const onClick= (e)=>{
    
    if( e.target.id !=monBar || e.target.id !=tueBar || e.target.id !=wedBar || e.target.id !=thuBar || e.target.id !=friBar || e.target.id !=satBar || e.target.id !=sunBar){
        document.querySelectorAll(".hover").forEach((el) => el.classList.add('hidden'))
    }
    
    if( e.target.id == "monBar"){
        document.getElementById("monTag").classList.remove("hidden")
    }else if(e.target.id =="tueBar"){
        document.getElementById("tueTag").classList.remove("hidden")
    }else if(e.target.id =="wedBar"){
        document.getElementById("wedTag").classList.remove("hidden")
    }else if(e.target.id =="thuBar"){
        document.getElementById("thuTag").classList.remove("hidden")
    }else if(e.target.id =="friBar"){
        document.getElementById("friTag").classList.remove("hidden")
    }else if(e.target.id =="satBar"){
        document.getElementById("satTag").classList.remove("hidden")
    }else if(e.target.id =="sunBar"){
        document.getElementById("sunTag").classList.remove("hidden")
    }
    
}
window.addEventListener("mouseover", onClick)
window.addEventListener("mouseover", onClick)

/* Getting Data form Local file*/

fetch("./data/data.json")
.then (res=> res.json())
.then(data =>displayBars(data) )



