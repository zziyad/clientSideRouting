import AbstractView from '../../lib/AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.par = params;
    this.setTitle('Viewing Post');
  }

  async getHtml() {
    console.log(this.par);
    return `

            <h1>A</h1>
            <a  href='/b'>Go to B </a>
            <a  href='/c'>Go to C </a>
        `;
  }
}
