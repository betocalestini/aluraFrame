'use strict';

System.register(['./controllers/NegociacaoController', './polyfill/fetch'], function (_export, _context) {
   "use strict";

   var currentInstance, negociacaoController;
   return {
      setters: [function (_controllersNegociacaoController) {
         currentInstance = _controllersNegociacaoController.currentInstance;
      }, function (_polyfillFetch) {}],
      execute: function () {
         negociacaoController = currentInstance();


         document.querySelector;

         document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
         document.querySelector('#apaga').onclick = negociacaoController.apaga.bind(negociacaoController);
         document.querySelector('#importa').onclick = negociacaoController.importaNegociacoes.bind(negociacaoController);
      }
   };
});
//# sourceMappingURL=boot.js.map