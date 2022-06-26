
const nomeFuncionario = "Francisco"
const salario = 10000
const horas = 160

function valorHrSalarioBase (){
    let jornadaHrMes = 160
      return  salario/jornadaHrMes             
} 
//console.log(valorHrSalarioBase(salario))

function calcularSalario () {
    let vrHrNormal = valorHrSalarioBase()
            if (horas <= 160)
            return vrHrNormal*horas   
    }
//console.log(calcularSalario())

function imprimirSalarioMes () {
    let valorSalario = calcularSalario()
    let funcionario = nomeFuncionario
    if(horas>160) {
        console.log(`Insira valores igual ou abaixo de 160 hrs mensais`)
    } else {
        console.log(`${funcionario} receberá R$ ${valorSalario.toFixed(2).toString().replace(".",",")} reais no final do mês.`)
   }
   
}
imprimirSalarioMes(nomeFuncionario,salario,horas)