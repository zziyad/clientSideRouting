import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('C');
  }

  async getHtml() {
    return `
            <h1>C</h1>
            <a href='/'>Go to A </a>
            <a  href='/b'>Go to B </a>
            <a  href='/shop/123'>Go to shop/123' </a>
        `;
  }
}
