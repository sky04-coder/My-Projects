const BASE_URL =
  "GET https://api.exchangerate.host/convert?from=EUR&to=USD"
const dropdowns = document.querySelectorAll(".dropdown select");
const button = document.querySelector("button")
const fromCurr = document.querySelector(".From select")
const toCurr = document.querySelector(".To select")
const msg = document.querySelector(".msg")

for (let select of dropdowns){
    for (currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText =currCode
        newOption.value= currCode
        if (select.name === "from" && currCode=== "USD"){
            newOption.selected = "selected"
        } 
        else if (select.name === "to" && currCode=== "INR"){
            newOption.selected = "selected"
        }
        select.append(newOption)}

    select.addEventListener("change" , (evt)=>{
        changeFlag(evt.target);
        })

        }
        



const changeFlag =(element) =>{
    let currCode  = element.value ;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img")
    img.src = newSrc;
}


button.addEventListener("click" , async(evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input")
    let amtVal = amount.value ;
    if (amtVal === "" || amtVal<"1"){
        amtVal =1;
        amount.value = "1";
    }


    // const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    
    let response = await fetch(BASE_URL);
    let data = await response.json()
    // let rate = data[toCurr.value.toLowerCase()]
    console.log(data)
    
    // let finalAmount = amtVal * rate ;
    // msg.innerText = `${amtVal}${fromCurr.value}${finalAmount}${toCurr.value}`


})




















