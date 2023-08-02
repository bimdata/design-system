import { nextTick } from "vue";
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

/**
 * @param { { children: Array | string } } vnode
 * @returns { string }
 */
function getTextFromVNode(vnode) {
  if (typeof vnode.children === "string") {
    return vnode.children;
  } else {
    return vnode.children.map(getTextFromVNode).join("");
  }
}

function removeWhiteSpaces(string) {
  return string
    .split("\n")
    .filter(line => !line.match(/^ +$/))
    .join("\n")
    .replace(/(?<![\n {2,}]) {2,}/, " ");
}

window.removeWhiteSpaces = removeWhiteSpaces;

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
  const textToHighlight = removeWhiteSpaces(getTextFromVNode(vnode));

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
  nextTick(() => Prism.highlightAll());
}
