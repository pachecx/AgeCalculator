const Day = document.querySelector('#day');
const Month = document.querySelector('#month');
const Year = document.querySelector('#year');
const btn = document.querySelector('.divSvg');

const textDay = document.querySelector('.dayText');
const textMonth = document.querySelector('.monthText');
const textYear = document.querySelector('.yearText');



const spanAlert = document.querySelector('.alertSpan');



function calc(){
    let data = new Date();
    let day = Number(Day.value) 
    let month = Number(Month.value)
    let year =  Number(Year.value);

    daySis = data.getDate();
    monthSis = data.getMonth() + 1;
    yearSis = data.getFullYear();
    negative = day - daySis;

    let alertSpan = spanAlert;

    if(!day || !month || !year){
        alertSpan.classList.remove('hide')
        return
    }

    if(year > yearSis || month > 12 || day > 30){
        console.log("teste validação")
        return
    }

    if(month > monthSis){
        textYear.textContent = yearSis - year -1;
        textMonth.textContent = monthSis;
        textDay.textContent = Math.abs(negative);
        return
    }

    textYear.textContent = yearSis - year;
    textMonth.textContent = month - monthSis;
    textDay.textContent = Math.abs(negative);
   
} 

btn.addEventListener('click', function(){
   calc()
});

//Falta colocar borda vermelha nos input quando as datas forem invalidas