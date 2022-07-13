    let fromCity = document.querySelector("#fromCity");
    let toCity = document.querySelector("#toCity");
    let dateTo = document.querySelectorAll(".dateTo");
    let dateFrom = document.querySelectorAll(".dateFrom");
    let prices = document.querySelectorAll(".price");
    console.log(prices);
    let sendEmailBtn = document.querySelector("#sendEmailBtn");
    let adminMsgText = document.querySelector("#adminMsg");
    let emailInput = document.querySelector(".emailInput");

  //taking data from local storage and injection in the dom
 function LocalFunction() {
    let data = JSON.parse(localStorage.getItem("flight"));
    fromCity.innerHTML = data[0].from;
    toCity.innerHTML = data[0].to;

    dateTo.forEach((date) => {
      date.innerHTML = data[0].returnDate;
    });

    dateFrom.forEach((date) => {
      date.innerHTML = data[0].releaseDate;
    });

    prices.forEach((price) => {
        price.innerHTML = data[0].price;
    });
  }

 function adminMsg() {
    if (emailInput.value == "") {
      adminMsgText.innerHTML = "file not filed.";
    } else {
      adminMsgText.innerHTML = "Thank you, keep in touch!";
    }
  }

  LocalFunction();
  sendEmailBtn.addEventListener('click' ,adminMsg);







































// let fromCity = document.querySelector('#fromCity');
// let toCity = document.querySelector('#toCity');
// let dateTo = document.querySelectorAll('.dateTo');
// let dateFrom = document.querySelectorAll('.dateFrom');
// let prices = document.querySelectorAll('.price');

// function dataTransfer(){
// let data=JSON.parse(localStorage.getItem('flight'));
// fromCity.innerHTML=data[0].from;
// toCity.innerHTML = data[0].to;

// dateTo.forEach((date) => {
//     date.innerHTML = data[0].returnDate;
// });

// dateFrom.forEach((date) => {
//     date.innerHTML = data[0].releaseDate;
// });

// // prices.forEach((price) => {
// //     prices.innerHTML = price[0].releaseDate;
// // });

// }
// dataTransfer()
