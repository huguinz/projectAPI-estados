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
    
    projeto.listaDeEstados.estados.forEach(function(item){ 
        
        cidades.push(item.sigla)
    })
    
    siglas.uf = cidades
    siglas.quantidade = cidades.length
            

    return siglas
}

const getDadosEstado = function(sigla){
    let siglaEstado = String(sigla).toUpperCase()
   let dadosEstado = {}
    

    projeto.listaDeEstados.estados.forEach(function(item){
        
        if(siglaEstado == String(item.sigla).toUpperCase()){   
           dadosEstado.uf = item.sigla
           dadosEstado.descricao = item.nome
           dadosEstado.capital = item.capital
           dadosEstado.regiao = item.regiao
        }
    })
return dadosEstado
}

const getEstadosRegiao = function(regiao){
    let regiaoEstado = String(regiao).toUpperCase()
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
        }
    })
return json
}

const getCapitalPais = function(){
    let capital = {
                        capitais: [
                                    {
                                        capital_atual: projeto.listaDeEstados.estados[2].capital_pais.capital,
                                        uf: projeto.listaDeEstados.estados[2].sigla,
                                        descricao: projeto.listaDeEstados.estados[2].nome,
                                        capital: projeto.listaDeEstados.estados[2].capital,
                                        regiao: projeto.listaDeEstados.estados[2].regiao,
                                        capital_pais_ano_inicio: projeto.listaDeEstados.estados[2].capital_pais.ano_inicio,
                                        capital_pais_ano_termino: projeto.listaDeEstados.estados[2].capital_pais.ano_fim
                                    },
                                    {
                                       capital_atual: projeto.listaDeEstados.estados[3].capital_pais.capital,
                                       uf: projeto.listaDeEstados.estados[3].sigla,
                                       descricao: projeto.listaDeEstados.estados[3].nome,
                                       capital: projeto.listaDeEstados.estados[3].capital,
                                       regiao: projeto.listaDeEstados.estados[3].regiao,
                                       capital_pais_ano_inicio: projeto.listaDeEstados.estados[3].capital_pais.ano_inicio,
                                       capital_pais_ano_termino: projeto.listaDeEstados.estados[3].capital_pais.ano_fim
                                    },
                                    {
                                       capital_atual: projeto.listaDeEstados.estados[23].capital_pais.capital,
                                       uf: projeto.listaDeEstados.estados[23].sigla,
                                       descricao: projeto.listaDeEstados.estados[23].nome,
                                       capital: projeto.listaDeEstados.estados[23].capital,
                                       regiao: projeto.listaDeEstados.estados[23].regiao,
                                       capital_pais_ano_inicio: projeto.listaDeEstados.estados[23].capital_pais.ano_inicio,
                                       capital_pais_ano_termino: projeto.listaDeEstados.estados[23].capital_pais.ano_fim
                                    }
                                  ]
                  }
return capital
}

const getCidades = function(estado){
    let siglaEstado = String(estado).toUpperCase()
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
        } 
    })
    return cidade
}




//console.log(getListaDeEstados())
//console.log(getDadosEstado('SP'))
//console.log(getDadosEstado('sp'))
//console.log(getEstadosRegiao('nordeste'))
//console.log(getCapitalPais())
console.log(getCidades('SP'))