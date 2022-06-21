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
//console.log(calcularHoraExtra(horas))

function calcHoraNormal (salario){
        let horasSemanais = 40
      return  salario/horasSemanais
               
} 

 vrHrNormal = calcHoraNormal (salario)
console.log(calcHoraNormal(salario))

function verificarQuantHrExtra (horas) {
    let horaExtra = 0
    let horaNormal = 40
    if (horas>40) {
        horaExtra = horas - horaNormal
        return horaExtra 
    } return horaExtra
}


console.log(verificarQuantHrExtra(horas))
let quantHrExtra = verificarQuantHrExtra(horas)


function calcularHoraExtra (quantHrExtra) {
    
    let acrescimoHoraExtra = 0.6
    let horaNormal = calcHoraNormal(salario)
    console.log(horaNormal*(1+acrescimoHoraExtra))
    let vrHrExtra = 0
        if (quantHrExtra > 0) {
              vrHrExtra =  quantHrExtra * (horaNormal*(1+acrescimoHoraExtra))
              
        return vrHrExtra 
        } return vrHrExtra 
    }
console.log(calcularHoraExtra(quantHrExtra))

// 

// function calcularImposto () {
//     valorImposto = 
// }