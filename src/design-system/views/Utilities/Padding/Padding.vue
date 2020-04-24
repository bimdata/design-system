<template>
  <main class="article utilities-padding">
    <div class="article-wrapper">
      <h2> {{ $route.name }} </h2>
      <p>All spacing is defined by a base value of 12 pixels. This value of 12 px is the basic unit of measurement for spacing.</p>
      <Code language="xml">
        &lt;div class="p-t-6"&gt;&lt;/div&gt;
      </Code>
      <h3>Examples</h3>
      <div class="flex">
        <div class="m-r-12">
          <h6>Margin - top</h6>
          <div class="bimdata-ds__example">
            <div class="ds-spacing">
              <div class="m-t-6">
                <span>margin top 6px</span>
              </div>
            </div>
          </div>
        </div>
        <div class="m-r-12">
          <h6>Margin - bottom</h6>
          <div class="bimdata-ds__example">
            <div class="ds-spacing">
              <div class="m-b-6">
                <span>margin bottom 6px</span>
              </div>
            </div>
          </div>
        </div>
        <div class="m-r-12">
          <h6>Margin - left</h6>
          <div class="bimdata-ds__example">
            <div class="ds-spacing">
              <div class="m-l-6">
                <span>margin left 6px</span>
              </div>
            </div>
          </div>
        </div>
        <div class="m-r-12">
          <h6>Margin - right</h6>
          <div class="bimdata-ds__example">
            <div class="ds-spacing">
              <div class="m-r-6">
                <span>margin right 6px</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="m-r-12">
          <h6>Margin - top</h6>
          <div class="bimdata-ds__example">
            <div class="ds-spacing">
              <div class="m-t-12">
                <span>margin top 12px</span>
              </div>
            </div>
          </div>
        </div>
        <div class="m-r-12">
          <h6>Margin - bottom</h6>
          <div class="bimdata-ds__example">
            <div class="ds-spacing">
              <div class="m-b-12">
                <span>margin bottom 12px</span>
              </div>
            </div>
          </div>
        </div>
        <div class="m-r-12">
          <h6>Margin - left</h6>
          <div class="bimdata-ds__example">
            <div class="ds-spacing">
              <div class="m-l-12">
                <span>margin left 12px</span>
              </div>
            </div>
          </div>
        </div>
        <div class="m-r-12">
          <h6>Margin - right</h6>
          <div class="bimdata-ds__example">
            <div class="ds-spacing">
              <div class="m-r-12">
                <span>margin right 12px</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Code from "../../Elements/Code/Code.vue";
export default {
  components: {
    Code
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/_BIMDataVariables.scss";

  @import "./_Padding.scss";
</style>