function calcularFrete(peso) {
  if (peso <= 0) {
    return 'é necessário um peso'
  }

  if (peso <= 1) return 10
  if (peso <= 5) return 20
  return 50;
}

function calcularDesconto(valor){
    const faixas = [{ limite: 100, desconto: 0 }, { limite: 500, desconto: 5 }, {limite: Infinity, desconto: 10}]

    for (let i = 0; i < faixas.length; i++) {
    if (valor <= faixas[i].limite) {
      return faixas[i].desconto
    }
}}


function avaliarTemperatura(temperatura){
    if(temperatura <= 0){
        return 'Muito Frio'
    }

    else if(temperatura > 0 && temperatura <= 20){
        return 'Frio'
    }

    else if(temperatura > 20 && temperatura <= 30){
        return 'Agradável'
    }

    else if(temperatura > 30){
        return 'Quente'
    }
}

function definirCategoriaPorIdade(idade){
    if(idade <= 12){
        return 'Criança'
    }

    else if(idade > 12 && idade <= 17){
        return 'Adolescente'
    }

    else if(idade > 17 && idade <= 64){
        return 'Adulto'
    }

    else if(idade > 64){
        return 'Idoso'
    }
    
}

function classificarIMC(peso){
    if(peso <= 18.5){
        return 'Abaixo do peso'
    }

    else if(peso > 18.5 && peso <= 24.9){
        return 'Peso ideal'
    }

    else if(peso > 24.9 && peso <= 29.9){
        return 'Sobrepeso'
    }

    else if(peso > 29.9){
        return 'Obesidade'
    }
    
}

function calcularNoTaConceito(nota){
    
    if(nota <= 4.9){
        return 'D'
    }

    else if(nota > 4.9 && nota <= 6.9){
        return 'C'
    }

    else if(nota > 6.9 && nota <= 8.9){
        return 'B'
    }

    else if(nota > 8.9){
        return 'A'
    }
    
}





module.exports = {calcularFrete, calcularDesconto, avaliarTemperatura, definirCategoriaPorIdade, classificarIMC, calcularNoTaConceito}