import AbstractView from './AbstractView.js';
import './loadingIndicator.js';
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('');
  }

  async getHtml() {
    return `
            <load-indic></load-indic>
        `;
  }
}
