import Prism from 'prismjs';

export default {
  mounted() {
    if (this.$refs.code) {
      Prism.highlightElement(this.$refs.code);
    }
  }
}