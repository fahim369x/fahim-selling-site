let i = 0;
function cardCount(name, value) {
  const productName = name;
  const productTk = value;
  const preProductTk = parseFloat(productTk);

  // total
  const totalPrice = document.getElementById("totalPrice");
  const totalValue = parseFloat(totalPrice.innerText);
  totalPrice.innerText = totalValue + preProductTk;

  // discount
  const discount = document.getElementById("discount");

  // final total
  const total = document.getElementById("total");

  let totalAmount = totalValue + preProductTk;
  total.innerText = totalAmount;
  const cuponApply = document.getElementById("cuponApply");

  cuponApply.addEventListener("click", function () {
    const cuponElementValue = document.getElementById("cuponInputValue").value;
    if (cuponElementValue === "SELL200") {
      let discounts = totalAmount * (20 / 100);
      const total = document.getElementById("total");
      let finalAmount = totalAmount - discounts;
      discount.innerText = discounts.toFixed(2);
      total.innerText = finalAmount;
    }
  });

  //create list item

  const creatList = document.getElementById("creatList");
  const p = document.createElement("p");
  p.style.fontSize = "18px";
  p.style.fontWeight = "600";
  i++;
  p.innerText = `${i}. ${productName}`;
  creatList.appendChild(p);

  // clear all data by go back
  const backHome = document.getElementById("goBack");
  backHome.addEventListener("click", function () {
    totalPrice.innerText = "00";
    discount.innerText = "00";
    creatList.innerHTML = "";
    discount.innerText = "00";
    total.innerText = "00";
  });

  // cupon btn disable and enable
  if (totalAmount >= 200) {
    cuponApply.disabled = false;
  }
  // make purched disable and enable
  let makePurched = document.getElementById("makePurched");
  if (totalAmount > 0) {
    makePurched.disabled = false;
  }
}
