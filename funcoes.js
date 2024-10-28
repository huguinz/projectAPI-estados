/* *********************************************************************
* Objetivo: Obter uma lista de estados
* Data: 18/10/2024
* Autor: Hugo Lopes
* Versão: 1.0
* **********************************************************************/

var projeto = require('./estados_cidades')

const getListaDeEstados = function(){
    let cidades = []
    let siglas = {}
    let status = false
    
    projeto.listaDeEstados.estados.forEach(function(item){ 
        cidades.push(item.sigla)
        status = true
    })

    siglas.uf = cidades
    siglas.quantidade = cidades.length

    if(status == true){
        return siglas
    }else{
        return false
    }
}

const getDadosEstado = function(sigla){
   let siglaEstado = String(sigla).toUpperCase()
   let dadosEstado = {}
    let status = false

    projeto.listaDeEstados.estados.forEach(function(item){
        
        if(siglaEstado == String(item.sigla).toUpperCase()){   
           dadosEstado.uf = item.sigla
           dadosEstado.descricao = item.nome
           dadosEstado.capital = item.capital
           dadosEstado.regiao = item.regiao
           status = true
        }
    })
    if(status == true){
        return dadosEstado
    }else{
        return false
    }
}

const getEstadosRegiao = function(regiao){
    let regiaoEstado = String(regiao).toUpperCase()
    let status = false
    let json = {regiao: regiaoEstado, 
                estados: []
                }

    projeto.listaDeEstados.estados.forEach(function(item){
        if(regiaoEstado == String(item.regiao).toUpperCase()){
            json.estados.push(
                                {
                                    uf: item.sigla,
                                    descricao: item.nome    
                                }
                             )
            status = true
        }
    })
    if(status == true){
        return json
    }else{
        return false
    }
}

const getCapitalPais = function(){
    let status = false
    let capital = {}
    let array = []
    

    projeto.listaDeEstados.estados.forEach(function(item){
        if(item.capital_pais != undefined){
            array.push(
                {
                    capital_atual: item.capital_pais.capital,
                    uf: item.sigla,
                    descricao: item.nome,
                    capital: item.capital,
                    regiao: item.regiao,
                    capital_pais_ano_inicio: item.capital_pais.ano_inicio,
                    capital_pais_ano_termino: item.capital_pais.ano_fim,
                }
            )
            capital.capitais = array
            status = true
        }
    })
    if(status == true){
        return capital
    }else{
        return false
    }
}

const getCidades = function(estado){
    let siglaEstado = String(estado).toUpperCase()
    let status = false
    let cidade = {}
    let array = []

    projeto.listaDeEstados.estados.forEach(function(item){
        if(siglaEstado == String(item.sigla).toUpperCase()){
            cidade.uf = siglaEstado
            cidade.descricao = item.nome
            cidade.quantidade_cidades = item.cidades.length
            
            item.cidades.forEach(function(city){
                array.push(city.nome)
                cidade.cidades = array
            })
            status = true
        } 
    })
    if(status == true){
        return cidade
    }else{
        return false
    }
}




//console.log(getListaDeEstados())
//console.log(getDadosEstado('Sp'))
//console.log(getEstadosRegiao('nordeste'))
console.log(getCapitalPais())
//console.log(getCidades('ac'))