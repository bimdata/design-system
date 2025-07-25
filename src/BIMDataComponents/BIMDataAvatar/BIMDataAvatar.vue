<template>
  <div
    class="bimdata-avatar"
    :class="`bimdata-avatar--${user.profile_picture ? 'silver-light' : color}`"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      fontSize: `${initialsSize ?? +size * 0.382}px`,
    }"
  >
    <template v-if="user.profile_picture">
      <img :src="user.profile_picture" />
    </template>
    <template v-else-if="initials">
      {{ initials }}
    </template>
    <template v-else>
      <BIMDataIconUser size="xs" />
    </template>
  </div>
</template>

<script>
import { computed } from "vue";
import BIMDataIconUser from "../BIMDataIcon/BIMDataIconStandalone/BIMDataIconUser.vue";

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    size: {
      type: [Number, String],
      default: 32,
      validate: (value) => value >= 32,
    },
    initialsSize: {
      type: [Number, String],
    },
    color: {
      type: String,
      default: "primary",
      validate: (value) => ["primary", "secondary", "silver-light"].includes(value),
    },
  },
  setup(props) {
    const initials = computed(() =>
      (
        `${props.user.firstname?.[0] ?? ""}` +
        `${props.user.lastname?.[0] ?? ""}`
      ).toUpperCase()
    );

    return {
      initials,
    };
  },
};
</script>

<style scoped>
.bimdata-avatar {
  min-width: 32px;
  min-height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
}

.bimdata-avatar--primary {
  background-color: var(--color-primary);
  color: var(--color-silver-light);
}

.bimdata-avatar--secondary {
  background-color: var(--color-secondary);
  color: var(--color-primary);
}

.bimdata-avatar--silver-light {
  background-color: var(--color-silver-light);
  color: var(--color-primary);
}
</style>
