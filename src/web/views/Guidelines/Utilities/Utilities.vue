<template>
  <main class="article variables">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary" margin="0 0 20px">{{
        $route.name
      }}</BIMDataText>
      <AnchorLink :navElements="navElements" />
      <div id="colors">
        <BIMDataText component="h3" color="color-primary" margin="40px 0 20px"
          >Colors</BIMDataText
        >
        <BIMDataTable
          :rowHeight="36"
          :columns="colorsUtilities[0]"
          :rows="colorsUtilities.slice(1)"
        />
        <BIMDataText margin="15px 0"
          >To learn more about colors,
          <router-link class="bimdata-link" to="../guidelines-utilities/colors"
            >go here</router-link
          ></BIMDataText
        >
      </div>
      <div id="flexbox">
        <BIMDataText component="h3" color="color-primary" margin="40px 0 15px"
          >Flexbox</BIMDataText
        >
        <BIMDataTable
          :rowHeight="36"
          :columns="flexboxUtilities[0]"
          :rows="flexboxUtilities.slice(1)"
        />
      </div>
      <div id="grid">
        <BIMDataText component="h3" color="color-primary" margin="40px 0 15px"
          >Grid</BIMDataText
        >
        <BIMDataTable
          :rowHeight="36"
          :columns="gridUtilities[0]"
          :rows="gridUtilities.slice(1)"
        />
      </div>
      <div id="spacing">
        <BIMDataText component="h3" color="color-primary" margin="40px 0 15px"
          >Spacing</BIMDataText
        >
        <BIMDataText display="block" margin="15px 0"
          >To learn more about spacing,
          <router-link class="bimdata-link" to="../guidelines-utilities/spacing"
            >go here</router-link
          ></BIMDataText
        >
      </div>
      <div id="text">
        <BIMDataText component="h3" color="color-primary" margin="40px 0 15px"
          >Text</BIMDataText
        >
        <BIMDataTable
          :rowHeight="36"
          :columns="textUtilities[0]"
          :rows="textUtilities.slice(1)"
        />
      </div>
      <div id="import">
        <BIMDataText component="h3" color="color-primary" margin="40px 0 15px"
          >Import</BIMDataText
        >
        <BIMDataText
          component="h5"
          display="block"
          color="color-primary"
          margin="20px 0 0"
          >CSS</BIMDataText
        >
        <Code language="css">
          <pre>
          /* To be able to use these utility classes, import them into your css stylesheet:
          N.B. This import is a global import of all the style of BIMData. If you have already imported it elsewhere, you already have access to these classes. */
          @import "~@bimdata/design-system/dist/css/design-system.css";
        </pre
          >
        </Code>
        <BIMDataText component="h5" color="color-primary" margin="20px 0 0"
          >SCSS</BIMDataText
        >
        <Code language="scss">
          <pre>
          /* To be able to use these utility classes, import them into your scss stylesheet: */
          @import "~@bimdata/design-system/dist/scss/BIMDataUtilities.scss";
        </pre
          >
        </Code>
      </div>
    </div>
  </main>
</template>

<script>
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";
import AnchorLink from "../../Elements/AnchorLink/AnchorLink.vue";
import Code from "../../Elements/Code/Code.vue";

export default {
  components: {
    BIMDataTable,
    BIMDataText,
    AnchorLink,
    Code,
  },
  data() {
    return {
      navElements: ["colors", "flexbox", "grid", "spacing", "text", "import"],
      colorsUtilities: [
        ["Class name", "Output value"],
        ["bg-primary", "background-color: #2f374a;"],
        ["bg-secondary", "background-color: #f9c72c;"],
        ["bg-silver", "background-color: #d8d8d8;"],
        ["bg-silver-light", "background-color: #f7f7f7;"],
        ["bg-silver-dark", "background-color: #bdbdbd;"],
        ["bg-granite", "background-color: #606060;"],
        ["bg-granite-light", "background-color: #7a7a7a;"],
        ["bg-white", "background-color: #ffffff;"],
        ["bg-black", "background-color: #000000;"],
        ["bg-success", "background-color: #00af50;"],
        ["bg-warning", "background-color: #ff9100;"],
        ["bg-high", "background-color: #ff3d1e;"],
        ["color-primary", "color: #2f374a;"],
        ["color-secondary", "color: #f9c72c;"],
        ["color-silver", "color: #d8d8d8;"],
        ["color-silver-light", "color: #f7f7f7;"],
        ["color-silver-dark", "color: #bdbdbd;"],
        ["color-granite-light", "color: #7a7a7a;"],
        ["color-granite", "color: #606060;"],
        ["color-white", "color: #ffffff;"],
        ["color-black", "color: #000000;"],
        ["color-success", "color: #00af50;"],
        ["color-warning", "color: #ff9100;"],
        ["color-high", "color: #ff3d1e;"],
      ],
      flexboxUtilities: [
        ["Class name", "Output value"],
        ["flex", "display: flex;"],
        ["flex-row", "flex-direction: row;"],
        ["flex-col", "flex-direction: column;"],
        ["items-start", "align-items: flex-start;"],
        ["items-center", "align-items: center;"],
        ["items-end", "align-items: flex-end;"],
        ["content-start", "align-content: flex-start;"],
        ["content-center", "align-content: flex-center;"],
        ["content-end", "align-content: flex-end;"],
        ["content-between", "align-content: flex-between;"],
        ["content-around", "align-content: flex-around;"],
        ["justify-start", "justify-content: flex-start;"],
        ["justify-center", "justify-content: flex-center;"],
        ["justify-end", "justify-content: flex-end;"],
        ["justify-between", "justify-content: flex-between;"],
        ["justify-around", "justify-content: flex-around;"],
      ],
      gridUtilities: [
        ["Class name", "Output value"],
        ["grid", "display: grid;"],
      ],
      textUtilities: [
        ["Class name", "Output value"],
        ["text-left", "text-align: left;"],
        ["text-center", "text-align: center;"],
        ["text-right", "text-align: right;"],
        ["primary-font", "font-family: 'roboto', sans-serif;"],
        [
          "bimdata-link",
          "color: #2f374a; border-bottom: 1px solid #2f374a; font-weight: bold;",
        ],
      ],
    };
  },
};
</script>
