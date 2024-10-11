var items = localStorage.getItem("itemsList");
items = items ? JSON.parse(items) : [];

const showItems = () => {
  document.getElementById("nameItem").value = "";
  document.getElementById("descriptionItem").value = "";
  document.getElementById("valueItem").value = "";

  let html = "";

  items.forEach((item, position) => {
    console.log(item);

    html += `<div class='col-3 m-2'> ${item.name} </div>`;
    html += `<div class='col-3 m-2'> ${item.description} </div>`;
    html += `<div class='col-3 m-2'> ${item.value} </div>`;
    html += `<div class="col-2 m-2"> <input type="button" class="btn btn-danger" onclick="deleteItem(${position})" value="X"> </div>`;
  });

  document.getElementById("listItems").innerHTML = html;
};

showItems();

const addItem = () => {
  let nameItem = document.getElementById("nameItem").value;
  let descriptionItem = document.getElementById("descriptionItem").value;
  let valueItem = document.getElementById("valueItem").value;

  if (nameItem && descriptionItem && valueItem) {
    items.push({
      name: nameItem,
      description: descriptionItem,
      value: valueItem,
    });
    localStorage.setItem("itemsList", JSON.stringify(items));
    showItems();
  }
};

const deleteItem = (item) => {
  items.splice(item, 1)
  showItems();
};
