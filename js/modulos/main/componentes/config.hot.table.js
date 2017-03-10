angular.module('main.js')
    .factory('__confight', function(__matriz, __manipuladorht, __alinha){

        __configurar = function(hotTable, nome){
            hotTable.nome = nome;

            __manipuladorht.addManipulador(hotTable);
            __alinha.registrarHotTable(hotTable);

            hotTable.configuracao = {
                 linhaHeader : true,
                 colunaHeader : true,
                 dados : {
                     items : __matriz.getMatriz()
                 },
                 settings : {
                     contextMenu: ['row_above', 'row_below', 'remove_row'],

                     afterSelection : function(r, c, r2, c2){
                        __alinha.linhaSelecionada(r);
                        console.log('afterselection chamado')
                     },

                     onAfterInit: function() {
                        console.log('onAfterInit call');
                     }
                 }
            };
        };

        return{
            configurar : function(hotTable, nome){
                return __configurar(hotTable, nome);
            }
        }
    });