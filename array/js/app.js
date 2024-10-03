var items = localStorage.getItem('itemList')

items = items ? items.split(",") : [];

const adddItem = () => {
  let item = document.getElementById("nameItem").value;
  console.log("Item:", item);

  if(item){
    items.push(item);
    localStorage.setItem('itemsList', items)
  }

  console.log("Items: ", items);
  
}