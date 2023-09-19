<template>
  <div class="age-custom-cell">
    <BIMDataInput
      type="number"
      v-model="inputAge"
      @keyup.esc="inputAge = age"
      @keyup.enter="$emit('update', inputAge)"
    />
  </div>
</template>

<script>
import BIMDataInput from "../../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";

export default {
  components: {
    BIMDataInput,
  },
  props: {
    age: {
      type: Number,
      required: true,
    },
  },
  emits: ["update"],
  data() {
    return {
      inputAge: 0,
    };
  },
  created() {
    this.inputAge = this.$props.age;
  },
  methods: {
    updateAge() {
      this.$emit("update", this.inputAge);
    },
  },
};
</script>

<style scoped lang="scss">
.age-custom-cell {
  .bimdata-input {
    margin: 0;
  }
}
</style>
