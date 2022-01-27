import { currentInstance } from './controllers/NegociacaoController';
import {} from './polyfill/fetch';

let negociacaoController = currentInstance();

document.querySelector;

document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
document.querySelector('#apaga').onclick = negociacaoController.apaga.bind(negociacaoController);
document.querySelector('#importa').onclick =
   negociacaoController.importaNegociacoes.bind(negociacaoController);
