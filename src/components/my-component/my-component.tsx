import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  private inputEl: HTMLInputElement;

  componentDidLoad() {
    if (this.inputEl) {
      this.inputEl.addEventListener('compositionstart', () => {
        console.log('compositionstart from addEventListener');
      });
      this.inputEl.addEventListener('compositionend', () => {
        console.log('compositionend from addEventListener');
      });
    }
  }

  private onCompositionStart = () => {
    console.log('onCompositionStart');
  };

  private onCompositionEnd = () => {
    console.log('onCompositionEnd');
  };

  render() {
    return <input ref={el => (this.inputEl = el)} type="text" onCompositionStart={this.onCompositionStart} onCompositionEnd={this.onCompositionEnd} />;
  }
}
