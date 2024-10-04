var items = localStorage.getItem('itemList')
items = items ? items.split(",") : [];

showItems();


const showItems = () => {
  document.getElementById("nameItem").value = "";

  let html = ""; 
  let positionItem = 0;


  items.forEach(item => {
    html += `<div class='col-6 m-2'> ${item} </div>`
    html += `<div class="col-2 m-2"> <input type="button" class="btn btn-danger" onclick="deleteItem(${positionItem})" value="X"> </div>`
    positionItem++;
  });

  document.getElementById("listItems").innerHTML = html 
  localStorage.setItem('itemsList', items);
}


const addItem = () => {
  let item = document.getElementById("nameItem").value;
 
  console.log("Item:", item);

  if (item) {
    items.push(item);
    showItems();
  }

  console.log("Items: ", items);

}

const deleteItem = (item) => {
  showItems();
}