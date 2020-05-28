let clickListener = null;

export default {
  bind(el, binding) {
    const div = document.createElement("button");
    div.textContent = "copy";
    div.style.width='45px';
    div.style.height='18px';
    div.classList.add("bimdata-btn", "bimdata-btn__fill--secondary");
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
