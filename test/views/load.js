import AbstractView from './AbstractView.js';
import '../components/load.js';
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Viewing Post');
  }

  async getHtml() {
    return `
            <load-indic></load-indic>
        `;
  }
}
