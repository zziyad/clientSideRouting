import AbstractView from '../../lib/AbstractView.js';
import '../components/counter.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Item');
  }

  async getHtml() {
    return `
    <h1>Item</h1>
    <h2>{shopId: ${this.params.shopId}}</h2>
    <h2>{itemId: ${this.params.itemId}}</h2>
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
        <a  href='/item/dffgh/2345'>Go to Haha' </a>
      </li>
      <li>
        <a href="/item/007/007">James Bond</a>
      </li>
    </ul>
`;
  }
}
