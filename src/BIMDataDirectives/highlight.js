import Vue from "vue";
import Prism from "prismjs";
import Normalizer from "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";

const normalizer = new Normalizer();

export default {
  beforeMount(el, binding, vnode) {
    highlight(el, binding, vnode);
  },
  updated(el, binding, vnode) {
    highlight(el, binding, vnode);
  },
};

function highlight(el, binding, vnode) {
  const choosedLanguage = binding.arg;
  if (
    !["xml", "scss", "javascript", "bash", "css", "html"].includes(
      choosedLanguage
    )
  ) {
    throw new Error(
      "Supported languages are xml, javascript, css, scss, html and bash"
    );
  }
  let textToHighlight = null;
  if (
    vnode.children[1] &&
    vnode.children[1].children &&
    vnode.children[1].children[0]
  ) {
    textToHighlight = vnode.children[1].children[0].text;
  } else {
    textToHighlight = vnode.children[0].text;
  }

  el.innerHTML = normalizer.normalize(
    Prism.highlight(
      textToHighlight,
      Prism.languages[choosedLanguage],
      choosedLanguage
    ),
    {
      "remove-trailing": true,
      "remove-indent": true,
    }
  );
  Vue.nextTick(() => Prism.highlightAll());
}
