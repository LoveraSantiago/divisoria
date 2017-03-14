angular.module('main.js')
    .factory('_coloridorCells', function(){

        let celulasColoridas = [];    
        
        let corSelecionado = '#920CE8';   
        let corDeselecionado = '#FFF';

        var criarEstilo = function(linP, colP, corP){
            let _color = corP;

            let estilo = {
                row : linP,
                col : colP,
                renderer : function(instance, td, row, col, prop, value, cellProperties){
                    Handsontable.renderers.TextRenderer.apply(this, arguments);
                    td.style.backgroundColor = _color;
                },
                color : function(c){
                    _color = c;
                }
            };
            return estilo;
        }; 

        var colorirLinha = function(qtdCols, linha, cor){
            for(let col = 0; col < qtdCols; col++){

                if(celulasColoridas.length == 0){
                    celulasColoridas.push(criarEstilo(linha, col, cor));
                }
                else{
                    let existente = celulasColoridas.some(
                        function(celula){
                            if(celula.row ==linha && celula.col == col){
                                celula.color(cor);
                            };
                        });
                    if(!existente){
                        celulasColoridas.push(criarEstilo(linha, col, cor));
                    };
                };
            };
        };

        var colorir = function(qtdCols, linha){
            colorirLinha(qtdCols, linha, corSelecionado);
        };

        var descolorir = function(qtdCols, linha){
            colorirLinha(qtdCols, linha, corDeselecionado);
        };

        var __getCelulasColoridas = function(){
            return celulasColoridas;
        };
        
        return{
            getCelulasColoridas : function(){
                return __getCelulasColoridas();
            },
            linhaSelecionada : function(qtdCols, linhaP, linhaA){//Atual //Passada
                if(linhaP > -1){
                    descolorir(qtdCols, linhaP, this.corDeselecionado);
                }
                colorir(qtdCols, linhaA);
            }
        };

    });