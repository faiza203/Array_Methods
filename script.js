const main= document.getElementById('mainMain');
const addUserButton = document.getElementById('addUser');
const doubleMoneyButton = document.getElementById('doubleMoney');
const showMillionairesButton = document.getElementById('showMillionaires');
const sortButton = document.getElementById('sort');
const calculateWealthButton = document.getElementById('calculateWealth');
const data = [];
randomUser();
randomUser();
randomUser();
function randomuser(){
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
  