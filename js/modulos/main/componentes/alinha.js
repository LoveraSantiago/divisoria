angular.module('main.js')
    .factory('__alinha', function(_coloridorCells){

        let linhaSelecionada   = -1;
        let linhaDeselecionada = -1;

        let hotTables = [];

        var iterandoHotTables = function(acao){
            for(let i = 0; i < hotTables.length; i++){
                acao(hotTables[i]);
            };
        };

        var __registrarHotTable = function(hotTable){
            hotTables.push(hotTable);
        };

        var __setarLinhaSelecionada = function(linha){
            if(linha == linhaSelecionada) return;

            linhaDeselecionada = linhaSelecionada;
            _coloridorCells.linhaSelecionada(hotTables[0].countCols(), linhaDeselecionada, linha);
            linhaSelecionada = linha;

            iterandoHotTables((ht) => {
                console.log('iterando hot tables');
                
                ht.updateSettings({ cell : _coloridorCells.getCelulasColoridas() });
                ht.render();
            });
        };

        var __getLinhaSelecionada = function(){
            return linhaSelecionada;
        };

        var __getLinhaDeselecionada = function(){
            return linhaDeselecionada;
        };

        return{
            acaoNasHotTables : function(acao){
                iterandoHotTables(acao);
            },
            registrarHotTable : function(hotTable){
                return __registrarHotTable(hotTable);
            },
            setarLinhaSelecionada : function(linha){
                return __setarLinhaSelecionada(linha);
            },
            getLinhaSelecionada : function(){
                return __getLinhaSelecionada();
            },
            getLinhaDeselecionada : function(){
                return __getLinhaDeselecionada();
            }
        };
    });