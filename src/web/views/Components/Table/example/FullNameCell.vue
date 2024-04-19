<template>
  {{ `${creator.firstName} ${creator.lastName}` }}
</template>

<script>
export default {
  props: {
    creator: {
      type: Object,
      required: true,
    },
  },
};
</script>
