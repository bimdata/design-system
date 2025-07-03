<template>
  <div>
    <BIMDataText component="h3" color="color-primary" margin="15px 0 10px">
      Or custom tabs in segmented buttons dark mode :
    </BIMDataText>

    <div class="m-b-12">Result:</div>
    <div class="m-b-12">
      <BIMDataTabs
        :tabs="tabsData"
        width="auto"
        height="40px"
        tabSize="220px"
        :selected="0"
      >
        <template #tab="{ tab, active }">
          <div
            :style="{
              width: '100%',
              height: '100%',
              backgroundColor: 'var(--color-quaternary-dark)',
            }"
          >
            <div
              :style="{
                backgroundColor: active ? 'var(--color-quaternary)' : '',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-quaternary-lighter)',
                fontWeight: active ? 'bold' : 'normal',
              }"
            >
              <span>{{ tab.text }}</span>
              <div
                :style="{
                  margin: '0 6px',
                  backgroundColor: 'var(--color-tertiary)',
                  width: '23px',
                  height: '23px',
                  fontSize: '9px',
                  color: 'white',
                  borderRadius: '50%',
                  lineHeight: '23px',
                }"
              >
                {{ tab.items.length }}
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
                { id: 0, text: 'Dossiers', items: [{ id: 'folder-1', name: 'Architecture', createdAt: '2024-12-10' }, { id: 'folder-2', name: 'Structure', createdAt: '2024-12-12' }] },
                { id: 1, text: 'Modèles', items: [{ id: 'folder-1', name: 'Architecture', createdAt: '2024-12-10' }, { id: 'folder-2', name: 'Structure', createdAt: '2024-12-12' }] },
              ]"
              width="auto"
              height="40px"
              tabSize="220px"
              :selected="0"
            &gt;
              &lt;template #tab="{ tab, active }" &gt;
                &lt;div
                  :style="{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'var(--color-quaternary-dark)',
                  }"
                &gt;
                &lt;span&gt;{{ "{{ tab.text }" + "}" }}&lt;/span&gt;
                  &lt;div :style="{
                      backgroundColor: active ? 'var(--color-quaternary)' : '',
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-quaternary-lighter)',
                      fontWeight: active ? 'bold' : 'normal',
                    }"
                  &gt;
                    &lt;div :style="{
                        margin: '0 6px',
                        backgroundColor: 'var(--color-tertiary)',
                        width: '23px',
                        height: '23px',
                        fontSize: '9px',
                        color: 'white',
                        borderRadius: '50%',
                        lineHeight: '23px',
                      }"
                    &gt;
                      {{ "{{ tab.items.length }" + "}" }}
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
        {
          id: 0,
          text: "Dossiers",
          items: [
            { id: "folder-1", name: "Architecture", createdAt: "2024-12-10" },
            { id: "folder-2", name: "Structure", createdAt: "2024-12-12" },
          ],
        },
        {
          id: 1,
          text: "Modèles",
          items: [
            { id: "folder-1", name: "Architecture", createdAt: "2024-12-10" },
            { id: "folder-2", name: "Structure", createdAt: "2024-12-12" },
          ],
        },
      ],
    };
  },
};
</script>
