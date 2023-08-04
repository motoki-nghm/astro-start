import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export class SplitAnimation {
  constructor(el) {
    const targets = document.querySelectorAll(el);
    for (const target of targets) {
      this._spanWrapText(target);

      target.spans = target.querySelectorAll('span');
      ScrollTrigger.create({
        trigger: target,
        start: 'top center',
        toggleClass: { targets: target, className: 'is-inView' },
        once: true,
      });
    }
  }

  _spanWrapText(target) {
    const nodes = [...target.childNodes];
    let returnText = '';

    for (const node of nodes) {
      if (node.nodeType == 3) {
        const text = node.textContent.replace(/\r?\n/g, '');
        const splitText = text.split('');
        for (const char of splitText) {
          returnText += `<span>${this._escapeHtml(char)}</span>`;
        }
      } else {
        returnText += node.outerHTML;
      }
    }
    target.innerHTML = returnText;
  }

  _escapeHtml(str) {
    return str.replace(/[&<>"']/g, (match) => {
      const escapeChars = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      };
      return escapeChars[match];
    });
  }
}
