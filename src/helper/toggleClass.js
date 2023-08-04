import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export class ScrollTriggerManager {
  constructor(el, once = false) {
    this.once = once;
    this.el = el;
    this._toggleClass();
  }

  _toggleClass() {
    const targets = [...document.querySelectorAll(this.el)];
    for (const target of targets) {
      ScrollTrigger.create({
        trigger: target,
        start: 'top center',
        toggleClass: { targets: target, className: 'is-inView' },
        once: this.once,
      });
    }
  }
}
