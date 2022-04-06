<template>
  <main class="article article-input">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataFileIcon :fileName="fileName" :size="+size" />
        </template>

        <template #parameters>
          <div>
            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
            >
              File name
            </BIMDataText>
            <BIMDataInput v-model="fileName" placeholder="Change fileName" />
          </div>
          <div>
            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
            >
              Size
            </BIMDataText>
            <BIMDataInput v-model="size" placeholder="Change size" />
          </div>
        </template>

        <template #import>
          import BIMDataInput from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataInput.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataFileIcon
              :fileName="{{ fileName }}"
              :size="{{ size }}"
            /&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
          Props:
        </BIMDataText>
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import propsData from "./props-data.js";

import BIMDataTable from "../../../../BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataInput from "../../../../BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataFileIcon from "../../../../BIMDataComponents/BIMDataFileIcon/BIMDataFileIcon.vue";
import BIMDataText from "../../../../BIMDataComponents/BIMDataText/BIMDataText.vue";
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    ComponentCode,
    BIMDataTable,
    BIMDataInput,
    BIMDataFileIcon,
    BIMDataText,
  },
  data() {
    return {
      fileName: "test.jpg",
      size: 35,
      propsData,
    };
  },
};
</script>
