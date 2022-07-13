import myJson from "./JS/data.json" assert { type: "json" };

let fromInput = document.querySelector("#fromInput");
let toInput = document.querySelector("#toInput");
let searchFlightsBtn = document.querySelector("#search-btn");
let flightOption = document.querySelector("#flights-Option");
let sendEmailBtn = document.querySelector("#sendEmailBtn");
let adminMsgText = document.querySelector("#adminMsg");
let emailInput = document.querySelector(".emailInput");

//display the flights with the details
function displayFlights() {
  let flights = myJson.data;
  for (let i = 0; i < 3; i++) {
    let flight = flights[Math.floor(Math.random() * flights.length)];
    //condition for defaults
    if (
      flight.construction_number == null ||
      flight.production_line == null ||
      flight.plane_owner == null ||
      flight.plane_age == "0"
    ) {
      flight.construction_number = "23653";
      flight.production_line = "Bombardier DHC-8-100";
      flight.plane_owner = "Airwork Flight Operations Ltd";
      flight.plane_age = "16";
    }
    //create the dom with the data
    let HTML = `
    <div id="option-design" class="justify-content-center col-12 bg-light align-items-center d-flex justify-content-md-between my-5 d-flex flex-column rounded-1 px-4 fw-bolder">
    <div id="option-box" class="d-flex flex-md-row flex-column rounded-2 py-2">
    <div class="left-side col-9">
    <div class="d-flex flex-column">
    <div class="d-flex flex-column justify-content-center align-items-center">
    <p>Flight Number: ${flight.construction_number}</p>
    <img class="mb-md-3 mb-2 d-flex" src="SCSS/image/logo no slogen.png" alt="" style="width: 120px" />
    </div>
    <div class="d-flex justify-content-between">
    <div class="left-side d-flex flex-column text-center">
    <p>03:45</p>
    <p class='fs-4'>${fromInput.value}</p>
    </div>
    <div class="center-side">
    <img class="d-none d-md-flex" src="SCSS/image/timeline.png" alt="" style="width:150px;">
    </div>
    <div class="right-side d-flex flex-column ms-2">
    <p>11:00</p>
    <p class='fs-4'>${toInput.value}</p>
    </div>
    <div></div>
    </div>
    </div>
    </div>
    <div class="right-side col-4 d-flex flex-column">
    <div class="d-flex ms-md-3 mt-md-5">
    <button class="priceBtn border-0 bg-success rounded-1 px-3 py-1 ms-5 ms-md-0">ORDER <span id="priceBtn">
    ${flight.plane_age * 3
    }$<span> </button>
    </div>
    </div>
    </div>  
    <div class="flight-details d-flex flex-md-row flex-column justify-content-between col-12">
    <p>${flight.production_line}</p>
    <p>Powered by</p>
    <p>${flight.plane_owner}</p>
    </div>
    </div>              
</div>
`;
    flightOption.innerHTML += HTML;
  }

  flightOption.innerHTML += `
  <div class="d-flex justify-content-center align-items-center">
  <a class="text-decoration-none text-dark me-1" href="">More Results</a>
  <i class="fa-solid fa-angles-right"></i>
  </div>  `;

  //transfer the relevant data to local storage
  let releaseDate = document.querySelector("#ReleaseDate");
  let returnDate = document.querySelector("#ReturnDate");
  let priceBtn = document.querySelectorAll("#priceBtn");
  let obj = {
    from: fromInput.value,
    to: toInput.value,
    releaseDate: releaseDate.value,
    returnDate: returnDate.value,
    price:0
  };
  priceBtn.forEach((e) =>
    e.addEventListener("click", (element) => {
      obj.price=element.target.innerText;
      let details = [obj];
      localStorage.setItem("flight", JSON.stringify(details));
      window.location.href = "./loading.html";
    })
  );


}
searchFlightsBtn.addEventListener("click", displayFlights);

//sign to newsletr
function adminMsg() {
  console.log(emailInput.value);
  if (emailInput.value == "") {
    adminMsgText.innerHTML = "file not filed.";
  } else {
    adminMsgText.innerHTML = "Thank you, keep in touch!";
  }
}

sendEmailBtn.addEventListener("click", adminMsg);



// look for your next destination
let countryInput = document.querySelector(".country-input");
let boxArea = document.querySelector(".box-aria");
let filterArray;
let dataArray;

let API_URL = "https://restcountries.com/v3.1/all";
fetch(API_URL)
.then(function (response) {
  return response.json();
})
    .then(function (data) {
      dataArray = [...data];
      filterArray=dataArray.sort((a,b)=>a.name.common<b.name.common?-1: 1);
      filterArray.forEach((element) => {
        crateElements(element);
      })
    });
//create the dom with the data from API
function crateElements(element) {
  boxArea.innerHTML += `
  <div class = "box rounded-2 p-3 justify-content-between bg-dark col-md-2 me-2 d-flex flex-column align-items-center mb-3 border border-dark">
  <img class="img-fluid col-6" src=${element.flags.svg}>
  <p class="text-white">${element.name.common}</p>
  <p class="text-white">${element.capital}</p>
</div> `  
}
//filtering the countries by first letter
countryInput.addEventListener("keyup",filterArrayFunc);
function filterArrayFunc() {
  console.log(dataArray.length);
  filterArray = dataArray.filter((value) => {
    return value.name.common.toLocaleLowerCase().startsWith(countryInput.value.toLocaleLowerCase());
  });
  boxArea.innerHTML = "";
  filterArray.sort((a,b)=>a.name.common<b.name.common?-1: 1)
  filterArray.forEach((element) => {
    crateElements(element);
    console.log(filterArray.length);
  });
}

