const sp = document.getElementById("sp");
const rj = document.getElementById("rj");
const mg = document.getElementById("mg");
const es = document.getElementById("es");
const outros = document.getElementById("outros");

//reverse
const str = document.getElementById("str");
const btnStr = document.getElementById("btnStr");
const txtStr = document.getElementById("txtStr");

//Fibonacci

const number = document.getElementById("number");
const btn = document.getElementById("btn");
const txt = document.getElementById("txt");

function veriFibonacci(props) {
  let fibo1 = 0;
  let fibo2 = 1;
  let fiboAtual = fibo1 + fibo2;

  fiboAtual = 0;

  while (fiboAtual <= props) {
    if (fiboAtual === props) {
      return `O número ${props} pertence à sequência de Fibonacci.`;
    }
    fibo1 = fibo2;
    fibo2 = fiboAtual;
    fiboAtual = fibo1 + fibo2;
  }

  return `O número ${props} não pertence à sequência de Fibonacci.`;
}

btn.addEventListener("click", function () {
  const numberValue = Number(number.value);
  var result = veriFibonacci(numberValue);

  txt.value = result;

  txt.innerHTML = txt.value;
});

//Faturamento

fetch("dados.json")
  .then((response) => response.json())
  .then((data) => {
    const faturamentoDiario = data;

    let maiorFaturamento = 0;

    faturamentoDiario.forEach((dia) => {
      if (dia.valor > maiorFaturamento) {
        maiorFaturamento = dia.valor;
      }
    });

    console.log(`Maior faturamento: ${maiorFaturamento}`);

    let menorFaturamento = Infinity;

    faturamentoDiario.forEach((dia) => {
      if (dia.valor < menorFaturamento && dia.valor !== 0) {
        menorFaturamento = dia.valor;
      }
    });

    console.log(`Menor faturamento: ${menorFaturamento}`);

    let totFaturamento = 0;
    let diasAcimaMedia = 0;
    let diasFaturamento = 0;

    faturamentoDiario.forEach((dia) => {
      if (dia.valor > 0) {
        totFaturamento += dia.valor;
        diasFaturamento++;
      }
    });

    let mediaFaturamento = totFaturamento / diasFaturamento;

    diasAcimaMedia = faturamentoDiario.filter(
      (dia) => dia.valor > mediaFaturamento && dia.valor > 0
    ).length;

    console.log(totFaturamento);
    console.log(diasFaturamento);
    console.log(mediaFaturamento);
    console.log(diasAcimaMedia);
  })
  .catch((error) => console.error(error));

// faturamento por estado

const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const totalFaturamento = Object.values(faturamentoPorEstado).reduce(
  (acc, cur) => acc + cur
);

const percentualPorEstado = {};

for (let estado in faturamentoPorEstado) {
  const percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100;
  percentualPorEstado[estado] = percentual.toFixed(2);
}

console.log("Percentual de representação por estado:");
console.log(percentualPorEstado);

sp.innerHTML = `SP - ${percentualPorEstado.SP}`;
rj.innerHTML = `RJ - ${percentualPorEstado.RJ}`;
mg.innerHTML = `MG - ${percentualPorEstado.MG}`;
es.innerHTML = `ES - ${percentualPorEstado.ES}`;
outros.innerHTML = `Outros - ${percentualPorEstado.Outros}`;

// reverse

function reverseStr(str) {
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

str.addEventListener("keypress", function (event) {
  var tecla = event.which || event.keyCode; // obter o código da tecla pressionada
  var teclaPermitida = /^[A-Za-z]+$/; // expressão regular para permitir apenas letras

  if (!teclaPermitida.test(String.fromCharCode(tecla))) {
    event.preventDefault(); // impedir que a tecla pressionada seja exibida no campo de input
  }
});

btnStr.addEventListener("click", function () {
  let strValue = str.value;
  let resultStr = reverseStr(strValue);

  txt.value = resultStr;

  txtStr.innerHTML = txt.value;

  console.log(txt.value);
});
