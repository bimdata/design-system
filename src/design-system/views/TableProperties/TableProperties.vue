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
  data(){
    return{
      properties: [
      {
        property:"width",
        type: "Number, String",
        defaultValue: "150px",
        description: "Use this property to change the width of the button"
      },
      {
          property: "height",
          type: "Number, String",
          defaultValue: "32px",
          description: "Use this property to change the height of the button"
      }
    ]
  }
  }
  // props: {
  //   property: {
  //     type: String
  //   },
  //   type: {
  //     type: String
  //   },
  //   defaultValue: {
  //     type: String
  //   },
  //   description: {
  //     type: String
  //   }
  // }
}
</script>