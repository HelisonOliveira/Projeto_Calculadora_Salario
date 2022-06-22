// fazer um código q quando possa adicionar 3 valores no inicio (valor, horas e imposto)
// imprimir o valor do salario final do mês
// 40hs semanais
// 60% na hora extra

// criar função para valor hora
// criar função para cálculo do imposto
// criar função para cálculo das horas extras
// imprimir resultado

let salario = 2000
let imposto = 0.27
let horas = 44

console.log(imprimirSalarioMes(salario, imposto, horas))

function calcHoraNormal (salario){
        let horasSemanais = 40
      return  salario/horasSemanais              
} 
//console.log(calcHoraNormal(salario))

function verificarQuantHrExtra (horas) {
    let horaExtra = 0
    let horaNormal = 40
    if (horas>40) {
        horaExtra = horas - horaNormal
        return horaExtra 
    } return horaExtra
}
//console.log(verificarQuantHrExtra(horas))

function calcularHoraExtra (horas) {
    let quantHrExtra = verificarQuantHrExtra(horas)
    let acrescimoHoraExtra = 0.6
    let horaNormal = calcHoraNormal(salario)
    let vrHrExtra = 0
        if (quantHrExtra > 0) {
            vrHrExtra =  quantHrExtra * (horaNormal*(1+acrescimoHoraExtra))  
            return vrHrExtra 
        } return vrHrExtra 
    }

//console.log(calcularHoraExtra(quantHrExtra))

function calcularImposto (salario) {
        let valorHrExtra = calcularHoraExtra(horas)
        let vrTotalSalario = salario + valorHrExtra
        let valorImposto = vrTotalSalario*imposto
    return  valorImposto
}
//console.log(calcularImposto(salario))

function imprimirSalarioMes (salario, imposto, horas) {
    let valorHrExtra = calcularHoraExtra(horas)
    let vrImposto = calcularImposto(salario)
    let salarioBruto = salario + valorHrExtra
    let salarioLiquido = salarioBruto - vrImposto
    
   return `O Valor a receber é de: Salário Bruto R$: ${salarioBruto.toFixed(2).toString().replace(".",",")} {(+)Salário: R$ ${salario.toFixed(2).toString().replace(".",",")} (+)Horas Extras: R$ ${valorHrExtra.toFixed(2).toString().replace(".",",")}} (-) {Imposto: R$ ${vrImposto.toFixed(2).toString().replace(".",",")}} = Salário Líquido a receber é de R$ : ${salarioLiquido.toFixed(2).toString().replace(".",",")} `
}
