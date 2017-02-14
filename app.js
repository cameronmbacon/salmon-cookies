'use strict';

/*
 * This is an application for a fake business called Salmon Cookies
 * Created By: Cameron Bacon on 02/13/2017
 * Last Modified: 02/13/2017
*/

// ALL LOCATIONS REPRESENTED AS OBJECT LITERALS

//First and Pike location
var firstAndPike = {
  name: 'First and Pike',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  hoursOpenPerDay: 15,
  simulatedSales: [],
  genSimulatedHourlySales: function() {
    var simSales;
    var total = 0;
    for (var i = 0; i < this.hoursOpenPerDay; i++) {
      var randNumCustomers = this.genRandNumCustomers();
      simSales = Math.ceil(this.avgCookiesPerCustomer * randNumCustomers);
      this.simulatedSales.push(simSales);
      total += simSales;
    }
    this.simulatedSales.push(total);
  },
  genRandNumCustomers: function() {
    return Math.floor((Math.random() * this.maxHourlyCustomers) + this.minHourlyCustomers);
  },
  renderToPage: function() {
    var headingEl = document.createElement('h1');
    headingEl.setAttribute('class', 'store-name'); // headingEl = <h1 class="store-name"></h1>
    var articleEl = document.createElement('article');
    articleEl.setAttribute('class', 'store'); // articleEl = <article class="store"></article>
    var unorderedEl = document.createElement('ul');
    unorderedEl.setAttribute('class', 'list'); // unorderedEl = <ul class="list"></ul>
    var sectionEl = document.getElementById('main-content'); //parent container

    headingEl.textContent = this.name; // populates heading with store name
    articleEl.appendChild(headingEl);

    for (var i = 0; i < this.simulatedSales.length; i++) {
      var listItemEl = document.createElement('li');
      listItemEl.setAttribute('class', 'list-item'); // listItemEl = <li class="list-item"></li>
      if (i < 6) {
        listItemEl.textContent = 6 + i + 'am: ' + this.simulatedSales[i] + ' cookies'; // listItemEl = <li class="list-item">(6+i)am: blank cookies</li>
        unorderedEl.appendChild(listItemEl); // adds list items to list
      } else if (6 < i < 15) {
        listItemEl.textContent = i - 6 + 'pm: ' + this.simulatedSales[i] + ' cookies'; // listItemEl = <li class="list-item">(6+i)pm: blank cookies</li>
        unorderedEl.appendChild(listItemEl); // adds list items to list
      } else {
        listItemEl.textContent = 'Total: ' + this.simulatedSales[i] + ' cookies'; // listItemEl = <li class="list-item">(6+i)am: blank cookies</li>
        unorderedEl.appendChild(listItemEl); // adds list items to list
      }
    }
    articleEl.appendChild(unorderedEl); // adds list to article
    sectionEl.appendChild(articleEl); // adds article to <section id="main-content"></section>
  }
};

//SeaTac Airport location
var seaTacAirport = {
  name: 'SeaTac Airport',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  hoursOpenPerDay: 15,
  simulatedSales: [],
  genSimulatedHourlySales: function() {
    var simSales;
    var total = 0;
    for (var i = 0; i < this.hoursOpenPerDay; i++) {
      var randNumCustomers = this.genRandNumCustomers();
      simSales = Math.ceil(this.avgCookiesPerCustomer * randNumCustomers);
      this.simulatedSales.push(simSales);
      total += simSales;
    }
    this.simulatedSales.push(total);
  },
  genRandNumCustomers: function() {
    return Math.floor((Math.random() * this.maxHourlyCustomers) + this.minHourlyCustomers);
  },
  renderToPage: function() {
    var headingEl = document.createElement('h1');
    headingEl.setAttribute('class', 'store-name'); // headingEl = <h1 class="store-name"></h1>
    var articleEl = document.createElement('article');
    articleEl.setAttribute('class', 'store'); // articleEl = <article class="store"></article>
    var unorderedEl = document.createElement('ul');
    unorderedEl.setAttribute('class', 'list'); // unorderedEl = <ul class="list"></ul>
    var sectionEl = document.getElementById('main-content'); //parent container

    headingEl.textContent = this.name; //
    articleEl.appendChild(headingEl);

    for (var i = 0; i < this.simulatedSales.length; i++) {
      var listItemEl = document.createElement('li');
      listItemEl.setAttribute('class', 'list-item'); // listItemEl = <li class="list-item"></li>
      if (i < 6) {
        listItemEl.textContent = 6 + i + 'am: ' + this.simulatedSales[i] + ' cookies'; // listItemEl = <li class="list-item">(6+i)am: blank cookies</li>
        unorderedEl.appendChild(listItemEl); // adds list items to list
      } else if (6 < i < 15) {
        listItemEl.textContent = i - 6 + 'pm: ' + this.simulatedSales[i] + ' cookies'; // listItemEl = <li class="list-item">(6+i)pm: blank cookies</li>
        unorderedEl.appendChild(listItemEl); // adds list items to list
      } else {
        listItemEl.textContent = 'Total: ' + this.simulatedSales[i] + ' cookies'; // listItemEl = <li class="list-item">(6+i)am: blank cookies</li>
        unorderedEl.appendChild(listItemEl); // adds list items to list
      }
    }
    articleEl.appendChild(unorderedEl); // adds list to article
    sectionEl.appendChild(articleEl); // adds article to <section id="main-content"></section>
  }
};

//Seattle Center location
var seattleCenter = {
  name: 'Seattle Center',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  hoursOpenPerDay: 15,
  simulatedSales: [],
  genSimulatedHourlySales: function() {
    var simSales;
    var total = 0;
    for (var i = 0; i < this.hoursOpenPerDay; i++) {
      var randNumCustomers = this.genRandNumCustomers();
      simSales = Math.ceil(this.avgCookiesPerCustomer * randNumCustomers);
      this.simulatedSales.push(simSales);
      total += simSales;
    }
    this.simulatedSales.push(total);
  },
  genRandNumCustomers: function() {
    return Math.floor((Math.random() * this.maxHourlyCustomers) + this.minHourlyCustomers);
  },
  renderToPage: function() {
    var headingEl = document.createElement('h1');
    headingEl.setAttribute('class', 'store-name'); // headingEl = <h1 class="store-name"></h1>
    var articleEl = document.createElement('article');
    articleEl.setAttribute('class', 'store'); // articleEl = <article class="store"></article>
    var unorderedEl = document.createElement('ul');
    unorderedEl.setAttribute('class', 'list'); // unorderedEl = <ul class="list"></ul>
    var sectionEl = document.getElementById('main-content'); //parent container

    headingEl.textContent = this.name; //
    articleEl.appendChild(headingEl);

    for (var i = 0; i < this.simulatedSales.length; i++) {
      var listItemEl = document.createElement('li');
      listItemEl.setAttribute('class', 'list-item'); // listItemEl = <li class="list-item"></li>
      if (i < 6) {
        listItemEl.textContent = 6 + i + 'am: ' + this.simulatedSales[i] + ' cookies'; // listItemEl = <li class="list-item">(6+i)am: blank cookies</li>
        unorderedEl.appendChild(listItemEl); // adds list items to list
      } else if (6 < i < 15) {
        listItemEl.textContent = i - 6 + 'pm: ' + this.simulatedSales[i] + ' cookies'; // listItemEl = <li class="list-item">(6+i)pm: blank cookies</li>
        unorderedEl.appendChild(listItemEl); // adds list items to list
      } else {
        listItemEl.textContent = 'Total: ' + this.simulatedSales[i] + ' cookies'; // listItemEl = <li class="list-item">(6+i)am: blank cookies</li>
        unorderedEl.appendChild(listItemEl); // adds list items to list
      }
    }
    articleEl.appendChild(unorderedEl); // adds list to article
    sectionEl.appendChild(articleEl); // adds article to <section id="main-content"></section>
  }
};

//Capitol Hill location
var capitolHill = {
  name: 'Capitol Hill',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  hoursOpenPerDay: 15,
  simulatedSales: [],
  genSimulatedHourlySales: function() {
    var simSales;
    var total = 0;
    for (var i = 0; i < this.hoursOpenPerDay; i++) {
      var randNumCustomers = this.genRandNumCustomers();
      simSales = Math.ceil(this.avgCookiesPerCustomer * randNumCustomers);
      this.simulatedSales.push(simSales);
      total += simSales;
    }
    this.simulatedSales.push(total);
  },
  genRandNumCustomers: function() {
    return Math.floor((Math.random() * this.maxHourlyCustomers) + this.minHourlyCustomers);
  },
  renderToPage: function() {
    var headingEl = document.createElement('h1');
    headingEl.setAttribute('class', 'store-name'); // headingEl = <h1 class="store-name"></h1>
    var articleEl = document.createElement('article');
    articleEl.setAttribute('class', 'store'); // articleEl = <article class="store"></article>
    var unorderedEl = document.createElement('ul');
    unorderedEl.setAttribute('class', 'list'); // unorderedEl = <ul class="list"></ul>
    var sectionEl = document.getElementById('main-content'); //parent container

    headingEl.textContent = this.name; //
    articleEl.appendChild(headingEl);

    for (var i = 0; i < this.simulatedSales.length; i++) {
      var listItemEl = document.createElement('li');
      listItemEl.setAttribute('class', 'list-item'); // listItemEl = <li class="list-item"></li>
      if (i < 6) {
        listItemEl.textContent = 6 + i + 'am: ' + this.simulatedSales[i] + ' cookies'; // listItemEl = <li class="list-item">(6+i)am: blank cookies</li>
        unorderedEl.appendChild(listItemEl); // adds list items to list
      } else if (6 < i < 15) {
        listItemEl.textContent = i - 6 + 'pm: ' + this.simulatedSales[i] + ' cookies'; // listItemEl = <li class="list-item">(6+i)pm: blank cookies</li>
        unorderedEl.appendChild(listItemEl); // adds list items to list
      } else {
        listItemEl.textContent = 'Total: ' + this.simulatedSales[i] + ' cookies'; // listItemEl = <li class="list-item">(6+i)am: blank cookies</li>
        unorderedEl.appendChild(listItemEl); // adds list items to list
      }
    }
    articleEl.appendChild(unorderedEl); // adds list to article
    sectionEl.appendChild(articleEl); // adds article to <section id="main-content"></section>
  }
};

//Alki location
var alki = {
  name: 'Alki',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  hoursOpenPerDay: 15,
  simulatedSales: [],
  genSimulatedHourlySales: function() {
    var simSales;
    var total = 0;
    for (var i = 0; i < this.hoursOpenPerDay; i++) {
      var randNumCustomers = this.genRandNumCustomers();
      simSales = Math.ceil(this.avgCookiesPerCustomer * randNumCustomers);
      this.simulatedSales.push(simSales);
      total += simSales;
    }
    this.simulatedSales.push(total);
  },
  genRandNumCustomers: function() {
    return Math.floor((Math.random() * this.maxHourlyCustomers) + this.minHourlyCustomers);
  },
  renderToPage: function() {
    var headingEl = document.createElement('h1');
    headingEl.setAttribute('class', 'store-name'); // headingEl = <h1 class="store-name"></h1>
    var articleEl = document.createElement('article');
    articleEl.setAttribute('class', 'store'); // articleEl = <article class="store"></article>
    var unorderedEl = document.createElement('ul');
    unorderedEl.setAttribute('class', 'list'); // unorderedEl = <ul class="list"></ul>
    var sectionEl = document.getElementById('main-content'); //parent container

    headingEl.textContent = this.name; //
    articleEl.appendChild(headingEl);

    for (var i = 0; i < this.simulatedSales.length; i++) {
      var listItemEl = document.createElement('li');
      listItemEl.setAttribute('class', 'list-item'); // listItemEl = <li class="list-item"></li>
      if (i < 6) {
        listItemEl.textContent = 6 + i + 'am: ' + this.simulatedSales[i] + ' cookies'; // listItemEl = <li class="list-item">(6+i)am: blank cookies</li>
        unorderedEl.appendChild(listItemEl); // adds list items to list
      } else if (6 < i < 15) {
        listItemEl.textContent = i - 6 + 'pm: ' + this.simulatedSales[i] + ' cookies'; // listItemEl = <li class="list-item">(6+i)pm: blank cookies</li>
        unorderedEl.appendChild(listItemEl); // adds list items to list
      } else {
        listItemEl.textContent = 'Total: ' + this.simulatedSales[i] + ' cookies'; // listItemEl = <li class="list-item">(6+i)am: blank cookies</li>
        unorderedEl.appendChild(listItemEl); // adds list items to list
      }
    }
    articleEl.appendChild(unorderedEl); // adds list to article
    sectionEl.appendChild(articleEl); // adds article to <section id="main-content"></section>
  }
};

// this array contains my objects
var locations = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

// Function declarations
function getSimulatedData() {
  for (var i = 0; i < locations.length; i++) {
    locations[i].genSimulatedHourlySales();
  }
};

function renderAllResults() {
  for (var i = 0; i < locations.length; i++) {
    locations[i].renderToPage();
  }
};

//START OF APPLICATION

getSimulatedData();
renderAllResults();

// END OF APPLICATION
