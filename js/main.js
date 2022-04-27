let selectTag = document.querySelector("#site-hero__select");
let text1 = document.querySelector("#text_bread");
let sizeWrapper = document.querySelector("#sizeWrapper");
let elSizePizza = document.querySelector("#sizePizza")
let sizePizzaLabel = document.querySelector("#pizzaSize");
let ingList = document.querySelector("#js-ing-list");


let itemFirst = document.querySelector("#vagetable__item_1")
let itemSecond = document.querySelector("#vagetable__item_2")
let itemThird = document.querySelector("#vagetable__item_3")
let itemFourth = document.querySelector("#vagetable__item_4")
let itemFive = document.querySelector("#vagetable__item_5")
let itemSix = document.querySelector("#vagetable__item_6")

let typeArr = [["Yupqa", "small"], ["O'rta", "middle"], ["Qalin", "large"]];
let sizeArr = ["25 sm", "30 sm", "35 sm"];

function wrapper(){
  for (let i = 0; i < typeArr.length; i++) {
    let newOption = document.createElement("option");

    newOption.textContent = typeArr[i][0];
    newOption.value = typeArr[i][1];
    
    selectTag.appendChild(newOption);
    text1.textContent = typeArr[0][0]
    
  }


}
wrapper()

selectTag.addEventListener("change", function(e){
  for (let i = 0; i < typeArr.length; i++) {
    if (e.target.value === typeArr[i][1]){
      text1.textContent = typeArr[i][0]
    }    
  }
})

for (let i = 0; i <sizeArr.length; i++){
  let newInputRadio  = document.createElement("input");
  let newLabelRadio = document.createElement("label");
  newInputRadio.type = "radio";
  newInputRadio.name = "radioInp";
  newInputRadio.value = sizeArr[i];
  newInputRadio.id = sizeArr[i];
  newLabelRadio.for = sizeArr[i];
  newLabelRadio.textContent = sizeArr[i];
  newLabelRadio.className = "label-size";
  sizeWrapper.append(newLabelRadio);
  sizeWrapper.append(newInputRadio);
  clickTarget()


}
let result =[];
function clickTarget(){
sizeWrapper.addEventListener("click", (evt)=>{
  let valueClick= evt.target;
  result.push ()
  console.log(result);
})
}
