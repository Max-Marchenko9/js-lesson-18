// #1

let myLongStr = 'Lorem". ipsum, dolor! sit? amet: consectetur; adipisicing elit. Dolores quas alias animi inventore delectus quo non, fugit officiis a repellendus facere quae perferendis quos doloremque in, accusantium eum sint corrupti similique voluptatibus omnis mollitia id ex. Adipisci temporibus laborum fugit aperiam, minima recusandae nemo! Voluptas, fugiat sunt saepe dignissimos quam possimus vero voluptatibus quas commodi ipsa vitae, est error voluptate ex cum? Ab, numquam doloremque sunt id molestias explicabo tenetur? Corporis, quisquam voluptatem doloremque itaque est quod impedit, commodi illo eius dicta, enim reiciendis quidem minus tempora sapiente ratione. ';

function wordsList(str, subStr) {
  
  let reg = new RegExp('\\.|,|\\?|!|:|;|"', 'gui');
  let arr = str
    .replace(reg, '')
    .toLowerCase()
    .split(' ')
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

// console.log(myDate);

// console.log(getLocalDate(myDate)); // 16.07.2019, 00:15
// console.log(getLocalDate(myDate, true)); // 16.07.2019, 00:15:32
// console.log(getLocalDate(myDate, false, true)); // 2019-06-02, 00:15
// console.log(getLocalDate(myDate, true, true)); // 2019-06-02, 00:15:32
// console.log(getLocalDate(new Date(123456))); // 01.01.1970, 03:02
// console.log(getLocalDate(new Date(123456), true)); // 1970-01-01, 03:02:03
// console.log(getLocalDate(new Date(123456), false, true)); // 1970-01-01, 03:02:03
// console.log(getLocalDate(new Date(123456), true, true)); // 1970-01-01, 03:02:03

// #3

let getWeekDay = (n) => {
 const date = new Date(n);
 const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
 return (days[date.getDay()])
}
// console.log(getWeekDay('2021-06-21')); // среда
// console.log(getWeekDay('2019-07-16')); // вторник
// console.log(getWeekDay('2019-07-27')); // суббота

// #4

let getLocalDay = (n) => {
  const date = new Date(n);
  let days = date.getUTCDay();
  if (days === 0) days = 7;
  return days;
}

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
  return date.toLocaleString().replace(/(\d.*),\s+(\d.*)/gu, '$1');
}

// console.log(getDateAgo('2019-01-29', 1)); // 28.01.2019
// console.log(getDateAgo('2019-01-29', 2)); // 27.01.2019
// console.log(getDateAgo('2019-01-29', 365)); // 29.01.2018
