console.log("Test")

// extra kaas
var changeImage = document.querySelector("button")
function verander() {
    pizza.src = "images/Extra_kaas_pizza .jpeg"
}
changeImage.addEventListener("click", verander);

// Pepperoni
var peperoniChange = document.querySelector("button:nth-child(2)");
function verander2e() {
    pizza.src = "images/Pepperoni_pizza.jpeg"
}
peperoniChange.addEventListener("click", verander2e);


// Dunne korst
var dunneKorst = document.querySelector("button:nth-child(3)");
function verander3e() {
    pizza.src = "images/Dunne_crust_pizza.jpeg"
}
dunneKorst.addEventListener("click", verander3e)

// Dikke korst
var dikkeKorst = document.querySelector("button:nth-child(4)");
function verander4() {
    pizza.src = "Images/dikke_crust_pizza.jpeg";
}
dikkeKorst.addEventListener("click", verander4)



var klaarKnop = document.querySelector("#finishBtn:nth-child(1)")
var resetKnop = document.querySelector("#finishBtn2:nth-child(2)")


function verander5() {
    pizza.src = "Images/happy_person_pizza.png"
}
function verander6() {
    pizza.src = "Images/Pizza_start.jpeg"
}

klaarKnop.addEventListener("click", verander5);
resetKnop.addEventListener("click", verander6);




// document.querySelector("#finishBtn:nth-child(1)") ik heb geleerd om verschillende bijv. buttons te selecteren 
// met behulp van chat gpt door te vragen: kan ik met .querySelector alleen het eerste element wat in mijn DOM staat 
// selecteren, of kan ik ook hetzelfde element maar bijv eentje erna selecteren. en toen kreeg ik de info om nth-child te gebruiken. 



// Bronnen voor img:
// cartoon meisje met pizza: https://www.istockphoto.com/nl/vector/meisje-eten-pizza-schattig-kid-fast-food-gm1170509344-323928528
// alle andere Images: https://www.shutterstock.com/search/cartoon-pizza-crust en https://www.vecteezy.com


