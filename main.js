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

function invalid() {
    spanAlertD.classList.remove('hide');
    spanAlertM.classList.remove('hide');
    spanAlertY.classList.remove('hide');

    Day.style.border ='1px solid red';
    Month.style.border ='1px solid red';
    Year.style.border ='1px solid red';
}

function valid() {
    spanAlertD.classList.add('hide');
    spanAlertM.classList.add('hide');
    spanAlertY.classList.add('hide');
}

function calc() {
    // Obter os valores de entrada
    const day = parseInt(Day.value);
    const month = parseInt(Month.value);
    const year = parseInt(Year.value);

    // Validar a entrada
    if (isNaN(day) || day < 1 || day > 30 || isNaN(month) || month < 1 || month > 12 || isNaN(year) || year > new Date().getFullYear()) {
        invalid();
        return;
    } else {
        valid();
    }

    // Data de nascimento
    const dataNascimento = new Date(`${year}-${month}-${day}`);

    // Data atual
    const dataAtual = new Date();

    // Cálculos
    let diffAnos = dataAtual.getFullYear() - dataNascimento.getFullYear();
    let diffMeses = dataAtual.getMonth() - dataNascimento.getMonth();
    let diffDias = dataAtual.getDate() - dataNascimento.getDate();

    // Ajuste para dias negativos ou zero
    if (diffDias <= 0) {
        const ultimoDiaMesAnterior = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate();
        const diasRestantes = ultimoDiaMesAnterior + diffDias - 1 ;

        // Atualiza os valores de meses e dias
        diffMeses -= 1;
        diffDias = diasRestantes;
    }

    // Atualiza os valores de meses e dias para dezembro
    if (diffMeses < 0) {
        diffMeses += 12;
        diffAnos -= 1;
    }

   if (month >= 1 && month <= 9){
       diffDias += 1
    }

    // Atualiza o resultado no HTML
    textYear.textContent = diffAnos;
    textMonth.textContent = diffMeses;
    textDay.textContent = diffDias;
}

btn.addEventListener('click', function () {
    calc();
});
