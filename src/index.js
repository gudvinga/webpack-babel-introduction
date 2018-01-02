import { text } from './mytext';

const renderDiv = document.querySelector('#render');
let greating = 'Hello webpack and babel';

let render = () => { renderDiv.innerHTML = `
    <h1>${greating}</h1>
    ${text}
    `;
};

render();
