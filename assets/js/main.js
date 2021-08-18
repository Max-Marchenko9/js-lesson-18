// #1

let myLongStr =
  'Lorem". ipsum, dolor! sit? amet: consectetur; adipisicing elit. Dolores quas alias animi inventore delectus quo non, fugit officiis a repellendus facere quae perferendis quos doloremque in, accusantium eum sint corrupti similique voluptatibus omnis mollitia id ex. Adipisci temporibus laborum fugit aperiam, minima recusandae nemo! Voluptas, fugiat sunt saepe dignissimos quam possimus vero voluptatibus quas commodi ipsa vitae, est error voluptate ex cum? Ab, numquam doloremque sunt id molestias explicabo tenetur? Corporis, quisquam voluptatem doloremque itaque est quod impedit, commodi illo eius dicta, enim reiciendis quidem minus tempora sapiente ratione. ';

function wordsList(str, subStr) {
  let reg = new RegExp('\\.|,|\\?|!|:|;|"', "gui");
  let arr = str
    .replace(reg, "")
    .toLowerCase()
    .split(" ")
    .filter((el) => el.indexOf(subStr) > -1);
  let res = new Set();

  arr.forEach((el) => {
    res.add(el);
  });

  return res;
}

// console.log(wordsList(myLongStr, 'lore'));

// #2

const myDate = new Date();

let getLocalDate = function(date, isSeconds = false, isISO = false) {
  const reg = new RegExp(':\\d{2}$', 'gui');
  let res;

  if(!isISO) res = isSeconds ? date.toLocaleString() : date.toLocaleString().replace(reg, '');
  else{
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 9 ? `0${date.getDate()}` : date.getDate();
    const hour = date.getHours() < 9 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds = date.getSeconds() < 9 ? `0${date.getSeconds()}` : date.getSeconds();

    res = isSeconds ? `${year}-${month}-${day}, ${hour}:${minutes}:${seconds}` : `${year}-${month}-${day}, ${hour}:${minutes}`;
    
  }
  return res;
};


// console.log(myDate);



// #3

let getWeekDay = (n) => {
  const date = new Date(n);
  const days = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];
  return days[date.getDay()];
};
// console.log(getWeekDay('2021-06-21')); // среда
// console.log(getWeekDay('2019-07-16')); // вторник
// console.log(getWeekDay('2019-07-27')); // суббота

// #4

let getLocalDay = (n) => {
  const date = new Date(n);
  let days = date.getUTCDay();
  if (days === 0) days = 7;
  return days;
};

// console.log(getLocalDay('2021-06-20'));
// console.log(getLocalDay('2021-06-21'));
// console.log(getLocalDay('2021-06-22'));
// console.log(getLocalDay('2021-06-23'));
// console.log(getLocalDay('2021-06-24'));
// console.log(getLocalDay('2021-06-25'));

// #5

let getDateAgo = (n, days) => {
  const date = new Date(n);
  date.setDate(date.getDate() - days);
  return date.toLocaleString().replace(/(\d.*),\s+(\d.*)/gu, "$1");
};

// console.log(getDateAgo('2019-01-29', 1)); // 28.01.2019
// console.log(getDateAgo('2019-01-29', 2)); // 27.01.2019
// console.log(getDateAgo('2019-01-29', 365)); // 29.01.2018

// #6

let Car = function (engine, model, name, year) {
  this.engine = engine;
  this.model = model;
  this.name = name;
  this.year = year;
};

Object.defineProperties(Car.prototype, {
  used: {
    get() {
      const yearNow = new Date().getFullYear();

      return yearNow - this.year > 1 ? 'used' : 'new';
    },
    set(value) {
      const yearNow = new Date().getFullYear();

      if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
  }
});

Car.prototype.info = function () {
    return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
  };
  
  let car = new Car(4900, 'Camaro', 'Chevrolet',  2019);
  let car2 = new Car(6000, 'Mustang', 'Ford', 2021);
  let car = new Car(2000, 'Lacetti', 'Chevrolet', 2010);
  let car2 = new Car(5000, 'FX50 AWD', 'Infinite', 2019);

// console.dir(Car);


// console.log(car.info()); 
// car.used = 'new';
// console.log(car.info()); 
// car.used = 'used';
// console.log(car.info()); 
// console.log(car2.info()); 
// car.used = 'used';
// console.log(car2.info());

// #7 
let testPerformance = (iterations, func) => {
  let time = Date.now();
  if (typeof func === 'function') for (let i = iterations; i--;) func();
  return Date.now() - time;
}

function test1() {
  let str = myLongStr;
  while (str.indexOf('o') !== -1) str = str.replace('o', '')
  while (str.indexOf('a') !== -1) str = str.replace('a', '')
  while (str.indexOf('e') !== -1) str = str.replace('e', '')
  while (str.indexOf('u') !== -1) str = str.replace('u', '')
  while (str.indexOf('i') !== -1) str = str.replace('i', '')
}

function test2() {
    const reg = new RegExp('oaeui', 'gui');
    myLongStr.replace(reg, '');
  }

// console.log(testPerformance(1000, test1));
// console.log(testPerformance(1000, test2));
// console.log(testPerformance(1000, 12345));