<template>
  <div>
    <BIMDataText component="h3" color="color-primary" margin="15px 0 10px">
      Or custom tabs with add colors :
    </BIMDataText>

    <div class="m-b-12">Result:</div>
    <div class="m-b-12">
      <BIMDataTabs
        :tabs="tabsData"
        width="100%"
        height="40px"
        tabSize="220px"
        :selected="0"
      >
        <template #tab="{ tab, active }">
          <div
            :style="{
              width: '100%',
              height: '100%',
              backgroundColor: 'white',
            }"
          >
            <div
              :style="{
                backgroundColor: active ? tab.color + '1A' : '',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }"
            >
              <BIMDataIcon :name="tab.icon" size="xs" margin="0 6px 0 0" />
              <span>{{ tab.text }}</span>
              <div
                :style="{
                  margin: '0 6px',
                  backgroundColor: active ? tab.color : '#F0F5FF',
                  width: '15px',
                  height: '15px',
                  fontSize: '9px',
                  fontWeight: 'bold',
                  color: active ? 'white' : 'var(--color-granite)',
                  borderRadius: '2px',
                  lineHeight: '15px',
                }"
              >
                1
              </div>
            </div>
          </div>
        </template>
      </BIMDataTabs>
    </div>
    <div class="m-b-12">
      <Code language="xml">
        <pre>
            &lt;BIMDataTabs
              :tabs="[
                { id: 0, text: 'IFC', icon: 'ifc', color: '#205DBD' },
                { id: 1, text: 'BCF', icon: 'bcf', color: '#f9c72c' },
                { id: 2, text: 'My Account', icon: 'user', color: '#44BCFF' },
                { id: 3, text: 'Settings', icon: 'settings', color: '#FF1E1E' },
              ]"
              width="100%"
              height="40px"
              tabSize="220px"
              :selected="0"
            &gt;
              &lt;template #tab="{ tab, active }" &gt;
                &lt;div
                  :style="{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                  }"
                &gt;
                  &lt;div
                    :style="{
                      backgroundColor: active ? tab.color + '1A' : '',
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }"
                  &gt;
                    &lt;BIMDataIcon :name="tab.icon" size="xs" margin="0 6px 0 0" /&gt;
                    &lt;span&gt;{{ "{{ tab.text }" + "}" }}&lt;/span&gt;
                    &lt;div
                      :style="{
                        margin: '0 6px',
                        backgroundColor: active ? tab.color : '#F0F5FF',
                        width: '15px',
                        height: '15px',
                        fontSize: '9px',
                        fontWeight: 'bold',
                        color: active ? 'white' : 'var(--color-granite)',
                        borderRadius: '2px',
                        lineHeight: '15px',
                      }"
                    &gt;
                      1
                    &lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/template&gt;
            &lt;/BIMDataTabs&gt;
          </pre
        >
      </Code>
    </div>
  </div>
</template>

<script>
import Code from "../../Elements/Code/Code.vue";

export default {
  components: {
    Code,
  },
  data() {
    return {
      tabsData: [
        { id: 0, text: "IFC", icon: "ifc", color: "#205DBD" },
        { id: 1, text: "BCF", icon: "bcf", color: "#f9c72c" },
        { id: 2, text: "My Account", icon: "user", color: "#44BCFF" },
        { id: 3, text: "Settings", icon: "settings", color: "#FF1E1E" },
      ],
    };
  },
};
</script>
