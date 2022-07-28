import AbstractView from './AbstractView.js';
import '../components/counter.js';
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('B');
  }

  async getHtml() {
    return `
            <h1>B</h1>
            <a href='/'>Go to A </a>
            <a  href='/c'>Go to C </a>
            <a  href='/b'>Go to B </a>
            <div>
            <click-counter></click-counter>
            </div>
        `;
  }
}
