import AbstractView from './AbstractView.js';
import '../components/counter.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Item');
  }

  async getHtml() {
    return `
    <h1>Item</h1>
    <h2>${this.params.shopId} ${this.params.itemId}</h2>
    <h2> ${JSON.stringify(this.params)}</h2>
    <ul>
      <li>
        <a href='/'>Go to A </a>
      </li>
      <li>
        <a href='/b'>Go to B </a>
         </li>
      <li>
        <a href='/c'>Go to C </a>
      </li>
      <li>
        <a  href='/item/007/2345'>Go to Item/123' </a>
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
