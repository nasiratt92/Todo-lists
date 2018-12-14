const newOne = []
const eatMoreVeg = () => {
  // let todoList = document.getElementById('todoList');
  // let item = document.createElement('li');
  newOne.push('Eat more veg');
  document.getElementById('todoList').children[0].innerHTML += '<li>'+newOne[newOne.length-1]+'</li>';
};
