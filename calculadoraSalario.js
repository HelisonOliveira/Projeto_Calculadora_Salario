// fazer um código q quando possa adicionar 3 valores no inicio (valor, horas e imposto)
// imprimir o valor do salario final do mês
// 40hs semanais
// 60% na hora extra

// criar função para valor hora
// criar função para cálculo do imposto
// criar função para cálculo das horas extras
// imprimir resultado

let salario = 10000
let imposto = 0.27
let horas = 240

console.log(imprimirSalarioMes(salario, imposto, horas))


function calcJornadaMensal () {
    let jornadaHrsSemanal = 40
    return ((jornadaHrsSemanal/6)*30)
}
//console.log(calcJornadaMensal())
function valorHrSalarioBase (salario){
        let jornadaHrMes = calcJornadaMensal()
      return  salario/jornadaHrMes             
} 
//console.log(valorHrSalarioBase(salario))

function verificarQuantHrExtra (horas) {
    let quantHrExtra = 0
    let quantHrNormal = calcJornadaMensal()
    if (horas>quantHrNormal) {
        quantHrExtra = horas - quantHrNormal
        return quantHrExtra 
    } return quantHrExtra
}
//console.log(verificarQuantHrExtra(horas))

function calcularHoraExtra () {
    let hrsExtra = verificarQuantHrExtra(horas)
    let acrescimoHrExtra = 0.6
    let vrHrNormal = valorHrSalarioBase(salario)
    let vrHrExtra = 0
        if (hrsExtra > 0) {
            vrHrExtra =  hrsExtra * (vrHrNormal*(1+acrescimoHrExtra))  
            return vrHrExtra 
        } return vrHrExtra 
    }

//console.log(calcularHoraExtra(quantHrExtra))

function calcularImposto () {
        let valorHrExtra = calcularHoraExtra()
        let vrTotalSalario = salario + valorHrExtra
        let valorImposto = vrTotalSalario*imposto
    return  valorImposto
}
//console.log(calcularImposto(salario))

function imprimirSalarioMes () {
    let valorHrExtra = calcularHoraExtra()
    let vrImposto = calcularImposto()
    let salarioBruto = salario + valorHrExtra
    let salarioLiquido = salarioBruto - vrImposto
    
   return `O Valor a receber é de: Salário Bruto R$: ${salarioBruto.toFixed(2).toString().replace(".",",")} {(+)Salário: R$ ${salario.toFixed(2).toString().replace(".",",")} (+)Horas Extras: R$ ${valorHrExtra.toFixed(2).toString().replace(".",",")}} (-) {Imposto: R$ ${vrImposto.toFixed(2).toString().replace(".",",")}} = Salário Líquido a receber é de R$ : ${salarioLiquido.toFixed(2).toString().replace(".",",")} `
}
