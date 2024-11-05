let header = document.getElementById("header");
const userName = prompt("Please enter your name:");
if (userName){
  header.textContent = `${userName}'s Meal Planner`
}

function setActive(button) {
  document.querySelectorAll('.active').forEach(element => element.classList.remove('active'));
  button.classList.add('active');
  const tabNumber = button.getAttribute('tab-number');  
  document.getElementById(tabNumber).classList.add('active');
}


document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => setActive(button));
});

//BREAKFAST
//list of ingredients for smoothie 

let smoothieIngredients = ["1 banana", "80g soft fruit (eg. strawberries, blueberries, mango)", "1 tbsp porridge oats", "1 tbsp ground flaxseeds", "150ml milk"];

//first be able to display the list

let listSmoothieIngredients = document.getElementById("smoothie-ingredients");


for (let i = 0; i < smoothieIngredients.length; i++) {
  let li = document.createElement('li');
  li.innerText = smoothieIngredients[i];
  listSmoothieIngredients.appendChild(li);
  //const button = document.createElement("button");
  //button.innerHTML = "+";
  //li.appendChild(button);
}

//list of ingredients for burrito 

let burritoIngredients = ["1 tsp chipotle paste", "1 egg", "1 tsp rapeseed oil", "50g kale", "7 cherry tomatoes", "1/2 small avocado", "1 wholemeal tortilla wrap"];

//first be able to display the list

let listBurritoIngredients = document.getElementById("burrito-ingredients");


for (let i = 0; i < burritoIngredients.length; i++) {
  let li = document.createElement('li');
  li.innerText = burritoIngredients[i];
  listBurritoIngredients.appendChild(li);
  //const button = document.createElement("button");
  //button.innerHTML = "+";
  //li.appendChild(button);
}
//RECIPE 3
//list of omeletingredients

let omeletIngredients = ["1 green tomato (cut into thick slices)", "1 beaten egg","1 cup breadcrumbs","2 tbsp garlic aioli","2 slices toasted bread","3 slices cooked bacon","2 leaves lettuce, oil as needed"];

let listomeletIngredients = document.getElementById("omeletIngredients");

for (let i = 0; i < omeletIngredients.length; i++) {
  let li = document.createElement('li');
  li.innerText = omeletIngredients[i];
  listomeletIngredients.appendChild(li);
  //const button = document.createElement("button");
  //button.innerHTML = "+";
  //li.appendChild(button);
}

//list of ingredients for oatmeal 

let oatmealIngredients = ["1 cup oats", "2 cups water or milk", "1 tbsp honey", "fresh fruits or nuts for topping"];

//first be able to display the list

let listOatmealIngredients = document.getElementById("oatmeal-ingredients");


for (let i = 0; i < oatmealIngredients.length; i++) {
  let li = document.createElement('li');
  li.innerText = oatmealIngredients[i];
  listOatmealIngredients.appendChild(li);
  //const button = document.createElement("button");
  //button.innerHTML = "+";
  //li.appendChild(button);
}

//LUNCH
//list of ingredients for soup 

let soupIngredients = ["2 tbsp rapeseed oil", "1l vegetable stock", "2 leeks", "3 garlic cloves", "300g baby potatoes", "250g asparagus", "160g broad beans", "400g can barlotti beans", "4 tomatoes", "30g basil"];

//first be able to display the list

let listSoupIngredients = document.getElementById("soup-ingredients");


for (let i = 0; i < soupIngredients.length; i++) {
  let li = document.createElement('li');
  li.innerText = soupIngredients[i];
  listSoupIngredients.appendChild(li);
  //const button = document.createElement("button");
  //button.innerHTML = "+";
  //li.appendChild(button);
}

//list of ingredients for couscous

let couscousIngredients = ["100g couscous", "200ml hot low salt vegetable stock", "2 spring onions", "1 red pepper", "1/2 cucumber", "50g feta cheese, cubed", "2 tbsp pesto", "2 tbsp pine nuts"];

//first be able to display the list

let listCouscousIngredients = document.getElementById("couscous-ingredients");


for (let i = 0; i < couscousIngredients.length; i++) {
  let li = document.createElement('li');
  li.innerText = couscousIngredients[i];
  listCouscousIngredients.appendChild(li);
  //const button = document.createElement("button");
  //button.innerHTML = "+";
  //li.appendChild(button);
}

//recipe 3
//list of carpaccioSalad
let carpaccioSalad = ["1 pound zucchini (about 2 medium), sliced into 1/16th-inch disks on a mandoline","3 tbsp extra-virgin olive oil","1 tbsp fresh juice from 1 lemon","Salt and freshly ground black pepper","1/4 cup shredded Parmigiano-Reggiano cheese","1/2 cup chopped walnuts (toasted if desired)","3 tbsp finely sliced fresh basil leaves" ]

let listcarpaccioSalad = document.getElementById("carpaccioSalad");

for (let i = 0; i < carpaccioSalad.length; i++) {
  let li = document.createElement('li');
  li.innerText = carpaccioSalad[i];
  listcarpaccioSalad.appendChild(li);
  //const button = document.createElement("button");
  //button.innerHTML = "+";
  //li.appendChild(button);
}

//list of ingredients for turkey 

let turkeyIngredients = ["turkey breast", "olive oil", "garlic cloves, minced", "rosemary", "thyme", "salt & pepper"];

//first be able to display the list

let listTurkeyIngredients = document.getElementById("turkey-ingredients");


for (let i = 0; i < turkeyIngredients.length; i++) {
  let li = document.createElement('li');
  li.innerText = turkeyIngredients[i];
  listTurkeyIngredients.appendChild(li);
  //const button = document.createElement("button");
  //button.innerHTML = "+";
  //li.appendChild(button);
}

//DINNER
//list of ingredients for pasta bake 

let pastaIngredients = ["1 bell pepper", "150g mushrooms", "180g penne pasta", "1 courgette", "2 garlic cloves", "1 onion", "400g chopped tomatoes", "vegetable stock paste", "1 tbsp tomato puree", "1 tsp italian herbs", "30g mature cheddar", "1 mozzarella ball"];

//first be able to display the list

let listPastaIngredients = document.getElementById("pasta-ingredients");


for (let i = 0; i < pastaIngredients.length; i++) {
  let li = document.createElement('li');
  li.innerText = pastaIngredients[i];
  listPastaIngredients.appendChild(li);
  //const button = document.createElement("button");
  //button.innerHTML = "+";
  //li.appendChild(button);
}

//list of ingredients for crispy tofu

let tofuIngredients = ["300g extra firm tofu", "1 tbsp soy sauce", "30g cornstarch", "1/2 tsp salt", "1/2 tsp black pepper", "2 tbsp vegetable oil"];

//first be able to display the list

let listTofuIngredients = document.getElementById("tofu-ingredients");


for (let i = 0; i < tofuIngredients.length; i++) {
  let li = document.createElement('li');
  li.innerText = tofuIngredients[i];
  listTofuIngredients.appendChild(li);
  //const button = document.createElement("button");
  //button.innerHTML = "+";
  //li.appendChild(button);
}

//list of ingredients for lemon sauce 

let lemonsauceIngredients = ["1 tbsp vegetable oil", "4 cloves garlic", "1inch/3cm piece ginger", "60ml water", "1/4 tsp bouillon", "60ml lemon juice", "1 tsp lemon zest", "1 tbsp soy sauce", "50g sugar", "2 tsp cornstarch mixed with 2 tsp water"];

//first be able to display the list

let listLemonsauceIngredients = document.getElementById("lemonsauce-ingredients");


for (let i = 0; i < lemonsauceIngredients.length; i++) {
  let li = document.createElement('li');
  li.innerText = lemonsauceIngredients[i];
  listLemonsauceIngredients.appendChild(li);
  //const button = document.createElement("button");
  //button.innerHTML = "+";
  //li.appendChild(button);
}
//Angel Chicken Alfredo
// list of ingredients for chickenAlfredo

let chickenAlfredo = ["150g uncooked spaghetti","1 ¼ cup low-fat milk","100g skinless chicken breast","1 tsp cornstarch","¼ cup packed grated Parmesan cheese","1 tbsp unsalted butter","Salt to taste","Black pepper","1 tsp garlic powder"]

let listchickenAlfredo = document.getElementById("chickenAlfredo")

for (let i = 0; i < chickenAlfredo.length; i++) {
  let li = document.createElement('li');
  li.innerText = chickenAlfredo[i];
  listchickenAlfredo.appendChild(li);
  //const button = document.createElement("button");
  //button.innerHTML = "+";
  //li.appendChild(button);
}

//list of ingredients for sausages 

let sausageIngredients = ["4 sausages", "1 tbsp olive oil", "bell peppers", "onions", "herbs - optional"];

//first be able to display the list

let listSausageIngredients = document.getElementById("sausage-ingredients");



for (let i = 0; i < sausageIngredients.length; i++) {
  let li = document.createElement('li');
  li.innerText = sausageIngredients[i];
  listSausageIngredients.appendChild(li);
  //const button = document.createElement("button");
  //button.innerHTML = "+";
  //li.appendChild(button);
}

//SHOPPING LIST

let el;
let newItem = document.getElementById("new-item");
let shoppingList = document.getElementById("shopping-list");
let id = 0;
let groceries = [];

function addNewItem() {
  id++;
  el = document.createElement("li");
  el.style.listStyle = "none";
  el.id = `groceries-${id}`;
  shoppingList.appendChild(el);
  el.innerHTML = `<input type="checkbox"> ${newItem.value}`;
  groceries.push(id);
  console.log(groceries);
  console.log(el);
  newItem.value = "";
}

function clearList() {
  
  groceries = [];
  
  document.getElementById("shopping-list").textContent = '';
}