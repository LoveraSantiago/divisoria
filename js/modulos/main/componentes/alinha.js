angular.module('main.js')
    .factory('__alinha', function(){

        let linhaSelecionada = -1;
        let hotTables = [];

        var __linhaSelecionada = function(linha){
            if(linhaSelecionada >= 0){
                iterandoHotTables((ht) => ht.manipulador.descolorirLinha(linhaSelecionada));
            }

            linhaSelecionada = linha;            
            iterandoHotTables((ht) => ht.manipulador.colorirLinha(linhaSelecionada))           
        };

        var iterandoHotTables = function(acao){
            for(let i = 0; i < hotTables.length; i++){
                acao(hotTables[i]);
            };
        };

        var __registrarHotTable = function(hotTable){
            hotTables.push(hotTable);
        };

        return{
            linhaSelecionada : function(linha){
                return __linhaSelecionada(linha)
            },
            registrarHotTable : function(hotTable){
                return __registrarHotTable(hotTable);
            }
        };
    });