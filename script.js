const main= document.getElementById('mainMain');
const addUserButton = document.getElementById('addUser');
const doubleMoneyButton = document.getElementById('doubleMoney');
const showMillionairesButton = document.getElementById('showMillionaires');
const sortButton = document.getElementById('sort');
const calculateWealthButton = document.getElementById('calculateWealth');
let data = [];
randomuser();
randomuser();
randomuser();
async function randomuser(){
const ranues = await fetch('https://randomuser.me/api');
const data = await ranues.json();
const user = data.results[0];
const newUser = {
  name: `${user.name.first} ${user.name.last}`,
  money: Math.floor(Math.random() * 1000000)
}
  addData(newUser);
};
function doubleMoney() {
    data = data.map(user => {
      return { ...user, money: user.money * 2 };
    });
    updateDOM();
  }
function sortByRichest() {
    console.log(123);
    data.sort((a, b) => b.money - a.money);
  
    updateDOM();
}
function showMillionaires() {
    data = data.filter(user => user.money > 1000000);
    updateDOM();
  }
  function calculateWealth() {
    const wealth = data.reduce((acc, user) => (acc += user.money), 0);
  
    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
      wealth
    )}</strong></h3>`;
    main.appendChild(wealthEl);
  }
function addData(obj) {
  data.push(obj);
  updateDOM();
}
function updateDOM(providedData = data) {
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';
  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}
function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
addUserButton.addEventListener('click', randomuser);
doubleMoneyButton.addEventListener('click', doubleMoney);
sortButton.addEventListener('click', sortByRichest);
showMillionairesButton.addEventListener('click', showMillionaires);
calculateWealthButton.addEventListener('click', calculateWealth);