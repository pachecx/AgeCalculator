const Day = document.querySelector('#day');
const Month = document.querySelector('#month');
const Year = document.querySelector('#year');
const btn = document.querySelector('.divSvg');

const textDay = document.querySelector('.dayText');
const textMonth = document.querySelector('.monthText');
const textYear = document.querySelector('.yearText');

const spanAlertD = document.querySelector('.alertSpanD');
const spanAlertM = document.querySelector('.alertSpanM');
const spanAlertY = document.querySelector('.alertSpanY');
const inputAlert = document.querySelector('#month');

    // let alertSpand = spanAlertD;
    // let alertSpanm = spanAlertM;
    // let alertSpany = spanAlertY;


function invalid(){
    spanAlertD.classList.remove('hide')
    spanAlertM.classList.remove('hide')
    spanAlertY.classList.remove('hide')
   
}

function valid(){
    spanAlertD.classList.add('hide')
    spanAlertM.classList.add('hide')
    spanAlertY.classList.add('hide')
}


function calc(){
    let data = new Date();
    let day = Number(Day.value);
    let month = Number(Month.value);
    let year =  Number(Year.value);

    daySis = data.getDate();
    monthSis = data.getMonth() + 1;
    yearSis = data.getFullYear();
    negative = day - daySis;

    if(!day || !month || !year){
        invalid()
        return
    }

    if(year > yearSis || month > 12 || day > 30){
        invalid()
        return
    }

    //Testar essa logica
    if(day > daySis){
        textYear.textContent = yearSis - year -1;
        textMonth.textContent = monthSis - 1;
        textDay.textContent = Math.abs(negative);
        valid()
        return
    }

    if(month > monthSis){
        textYear.textContent = yearSis - year -1;
        textMonth.textContent = monthSis;
        textDay.textContent = Math.abs(negative);
        valid()
        return
    }

    textYear.textContent = yearSis - year;
    textMonth.textContent = month - monthSis;
    textDay.textContent = Math.abs(negative);
    valid()
} 

btn.addEventListener('click', function(){
   calc()
});

//Falta colocar borda vermelha nos input quando as datas forem invalidas
//Permitir apenas numeros
//verficar logica