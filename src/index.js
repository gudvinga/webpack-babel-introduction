import { text } from './mytext';
import scss from './style.scss';

const renderDiv = document.querySelector('#render');
let greating = 'Hello webpack and babel';

let render = () => { renderDiv.innerHTML = `
    <h1>${greating}</h1>
    ${text}
    `;
};

render();
