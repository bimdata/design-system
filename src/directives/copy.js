let clickListener = null;

export default {
  bind(el, binding) {
    const div = document.createElement("i");
    div.classList.add("clipboard");
    clickListener = () => {
      const elToCopy = [...el.children].find( child =>
        child.tagName === "CODE"
      );
      if(!elToCopy){
        throw "Copy directives cannot works without tag element."
      }
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNode(elToCopy);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand('copy');
      selection.removeAllRanges();

      if(typeof binding.value === 'function'){
        binding.value();
      } else{
        throw "Copy directives only support function as value."
      }
    }
    div.addEventListener("click", clickListener);
    el.prepend(div);
  },
  unbind(el) {
    const div = [...el.children].find( child =>
      child.classList.contains("bimdata-ds__demo")
    );
    if (div) {
      div.removeEventListener("click", clickListener);
    }
  }
}
