import Vue from "vue";
import Prism from 'prismjs';
import Normalizer from 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js'

const normalizer = new Normalizer

export default {
  bind(el, binding, vnode) {
    highlight(el, binding, vnode);
  },
  componentUpdated(el, binding, vnode) {
    highlight(el, binding, vnode);
  }
}

function highlight (el, binding, vnode) {
  const choosedLanguage = binding.arg;
  if(!["xml", "scss", "javascript", "bash"].includes(choosedLanguage)){
    throw new Error("Supported languages are xml, javascript, scss and xml");
  }
  const textToHighlight = vnode.children[0].text;

  el.innerHTML = normalizer.normalize(Prism.highlight(textToHighlight, Prism.languages[choosedLanguage], choosedLanguage), {
    'remove-trailing': true,
    'remove-indent': true,
  });
  Vue.nextTick( () => Prism.highlightAll());
}