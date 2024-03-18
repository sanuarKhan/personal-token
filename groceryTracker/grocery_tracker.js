let item_1;
let item_2;
let item_3;

function calculateItms() {
  item_1 = parseFloat(document.getElementById("item_1").value);
  item_2 = parseFloat(document.getElementById("item_2").value);
  item_3 = parseFloat(document.getElementById("item_3").value);

  let total = item_1 + item_2 + item_3;

  document.getElementById(
    "total"
  ).innerHTML = `the price of total items: ${total}`;
}
