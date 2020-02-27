<template>
  <div class="bimdata-ds__properties">
    <h3>Properties</h3>
    <table>
      <thead>
        <tr>
          <td>Property</td>
          <td>Type</td>
          <td>Default Value</td>
          <td>Description</td>
          <td v-if="examples">Examples</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(values, index) in Object.values(properties)" :key="index">
          <td v-for="(value, index) in values" :key="value + index">
            {{ value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    examples: {
      type: Boolean,
      default: false
    },
    properties: {
      type: Array,
      required: true,
      validator: properties => properties.every(
        property => [
          "property", "type", "defaultValue", "description"
        ].every( key => property.hasOwnProperty(key) )
      )
    }
  }
}
</script>