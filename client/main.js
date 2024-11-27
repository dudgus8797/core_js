import { Button } from './components/button/button.js';

const app = document.getElementById('app');
function defineElements() {
  customElements.define('custom-button', Button);
}

defineElements();

const buttonElement = document.createElement('custom-button');
app.append(buttonElement);
