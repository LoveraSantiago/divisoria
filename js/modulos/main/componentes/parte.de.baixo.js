angular.module('main.js')
    .factory('__parteBaixo', function($window){

        let divBaixo;
        let callBacksDivisoriaMovimentada = [];

        var __inicializar = function(){
            divBaixo = $('#parteBaixo');
        };

        var __registrarCallBackDivisoriaMovimentada = function(callbak){
            callBacksDivisoriaMovimentada.push(callbak);
        };

        var __listenerDivisoriaMovimentada = function(pBaixoDivisoria){
            divBaixo.height($window.innerHeight - pBaixoDivisoria);
            for(let i = 0; i < callBacksDivisoriaMovimentada.length; i++){
                let margemTop = parseInt(divBaixo.css('margin-top'));
                callBacksDivisoriaMovimentada[i](divBaixo.height() - margemTop);
            };
        };

        return{
            inicializar : function(){
                return __inicializar();
            },
            listenerDivisoriaMovimentada : function(pBaixoDivisoria){
                return __listenerDivisoriaMovimentada(pBaixoDivisoria);
            },
            registrarCallBackDivisoriaMovimentada : function(callback){
                return __registrarCallBackDivisoriaMovimentada(callback);
            },
        };
    });
















//       var data = [
//       ['', 'Kia', 'Nissan', 'Toyota', 'Honda'],
//       ['2014', -5, '', 12, 13],
//       ['2015', '', -11, 14, 13],
//       ['2016', '', 15, -12, 'readOnly']
//     ],
//     container,
//     hot1;

//   function firstRowRenderer(instance, td, row, col, prop, value, cellProperties) {
//     Handsontable.renderers.TextRenderer.apply(this, arguments);
//     td.style.fontWeight = 'bold';
//     td.style.color = 'green';
//     td.style.background = '#CEC';
//   }

//   function negativeValueRenderer(instance, td, row, col, prop, value, cellProperties) {
//     Handsontable.renderers.TextRenderer.apply(this, arguments);

//     // if row contains negative number
//     if (parseInt(value, 10) < 0) {
//       // add class "negative"
//       td.className = 'make-me-red';
//     }

//     if (!value || value === '') {
//       td.style.background = '#EEE';
//     }
//     else {
//       if (value === 'Nissan') {
//         td.style.fontStyle = 'italic';
//       }
//       td.style.background = '';
//     }
//   }
//   // maps function to lookup string
//   Handsontable.renderers.registerRenderer('negativeValueRenderer', negativeValueRenderer);

//   container = document.getElementById('example1');
//   hot1 = new Handsontable(container, {
//     data: data,
//     afterSelection: function (row, col, row2, col2) {
//       var meta = this.getCellMeta(row2, col2);

//       if (meta.readOnly) {
//         this.updateSettings({fillHandle: false});
//       }
//       else {
//         this.updateSettings({fillHandle: true});
//       }
//     },
//     cells: function (row, col, prop) {
//       var cellProperties = {};

//       if (row === 0 || this.instance.getData()[row][col] === 'readOnly') {
//         cellProperties.readOnly = true; // make cell read-only if it is first row or the text reads 'readOnly'
//       }
//       if (row === 0) {
//         cellProperties.renderer = firstRowRenderer; // uses function directly
//       }
//       else {
//         cellProperties.renderer = "negativeValueRenderer"; // uses lookup map
//       }

//       return cellProperties;
//     }
//   });