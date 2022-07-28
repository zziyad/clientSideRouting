import AbstractView from './AbstractView.js';
import '../components/counter.js';


export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.params = params;
    this.setTitle('Shope');
  }

  async getHtml() {
    return `
            <h1>Shope</h1>
            <h2>{shopId: ${this.params.shopId}}</h2>
            <ul>
              <li>
                <a href='/'>Go to A </a>
              </li>
              <li>
                <a href='/b'>Go to B </a>
    ]         </li>
              <li>
                <a href='/c'>Go to C </a>
              </li>
              <li>
                <a  href='/shop/123'>Go to shop/123' </a>
              </li>
              <li>
                <a href="/item/007/007">James Bond</a>
              </li>
            </ul>
            <div>
            <click-counter></click-counter>
            </div>
        `;
  }
}
