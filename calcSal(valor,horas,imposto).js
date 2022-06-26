// fazer um código q quando possa adicionar 3 valores no inicio (valor, horas e imposto)
// imprimir o valor do salario final do mês
// 40hs semanais
// 60% na hora extra

// criar função para valor hora
// criar função para cálculo do imposto
// criar função para cálculo das horas extras
// imprimir resultado

const salario = 5000
const imposto = 0.25
const horas = 220

function calcJornadaMensal () {
    let jornadaHrsSemanal = 40
    return ((jornadaHrsSemanal/6)*30)
}
//console.log(calcJornadaMensal())

function valorHrSalarioBase (){
    let jornadaHrMes = calcJornadaMensal()
      return  salario/jornadaHrMes             
} 
//console.log(valorHrSalarioBase(salario))

function verificarQuantHrExtra () {
    let quantHrNormal = calcJornadaMensal()
    if (horas>quantHrNormal) {
        return horas - quantHrNormal 
    } return 0
}
//console.log(verificarQuantHrExtra(horas))

function calcularHoraExtra () {
    let hrsExtra = verificarQuantHrExtra(horas)
    let acrescimoHrExtra = 0.6
    let vrHrNormal = valorHrSalarioBase(salario)
            if (hrsExtra > 0) {
            return hrsExtra * (vrHrNormal*(1+acrescimoHrExtra))  
        } return 0 
    }

//console.log(calcularHoraExtra(quantHrExtra))

function calcularImposto () {
    let valorHrExtra = calcularHoraExtra()
    let vrTotalSalario = salario + valorHrExtra
    let valorImposto = vrTotalSalario*imposto
        if (imposto>0) {
    return  valorImposto
} return 0
}
//console.log(calcularImposto(salario))

function calcDescontos () {
    let vHNormal = valorHrSalarioBase(salario)
    let jornadaTrab = calcJornadaMensal(horas)
        if (jornadaTrab > horas) {
            descontos =  vHNormal*(jornadaTrab-horas)  
            return descontos
        } return 0
}

//console.log(calcDescontos())

function imprimirSalarioMes () {
    let valorHrExtra = calcularHoraExtra()
    let vrImposto = calcularImposto()
    let vrdescontos = calcDescontos()
    let totalDesc = vrdescontos + vrImposto
    let salarioBruto = salario + valorHrExtra
    let salarioLiquido = salarioBruto - totalDesc
    
   console.log(`O Valor a receber é de: Salário Bruto: R$ ${salarioBruto.toFixed(2).toString().replace(".",",")} {(+)Salário: R$ ${salario.toFixed(2).toString().replace(".",",")} (+) Hora Extra: ${valorHrExtra.toFixed(2).toString().replace(".",",")}} Descontos: R$ ${totalDesc.toFixed(2).toString().replace(".",",")} {(-) Faltas: ${vrdescontos.toFixed(2).toString().replace(".",",")} (-) Impostos: ${vrImposto.toFixed(2).toString().replace(".",",")}} = Salário Líquido a receber é de: R$ ${salarioLiquido.toFixed(2).toString().replace(".",",")}`)

}
imprimirSalarioMes(salario,imposto,horas)