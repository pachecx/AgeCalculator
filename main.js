const Day = document.querySelector('#day');
const Month = document.querySelector('#month');
const Year = document.querySelector('#year');
const btn = document.querySelector('.divSvg');

const textDay = document.querySelector('.dayText');
const textMonth = document.querySelector('.monthText');
const textYear = document.querySelector('.yearText');


function calc(){
    let data = new Date();
    let day = Day.value;
    let month = Month.value;
    let year = Year.value;

    let daySis = data.getDay();
    let monthSis = data.getMonth();
    let yearSis = data.getFullYear();
    
    let resultYear = yearSis - year;
    let resultMonth = monthSis - month;
    let resultDay = daySis - day;

    textDay.textContent = resultDay;
    textMonth.textContent = resultMonth;
    textYear.textContent = resultYear;

} 

btn.addEventListener('click', function(){
   calc()
    console.log('teste')
});
