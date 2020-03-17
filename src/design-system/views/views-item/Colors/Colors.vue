<template>
  <main class="article colors">
    <div class="article-wrapper">
      <div class="test">
        <div class="box box1"></div>
        <div class="box box2"></div>
        <div class="box box3"></div>
      </div>
      <h2>{{ $route.name }}</h2>
      <h3>Brand colors</h3>
      <div class="color-swatches">
        <div class="color-swatche" v-for="brandColor in brandColors" :key="brandColor.id">
          <div class="color-swatche__header" :style="{'background-color': brandColor.hex, 'color': brandColor.textcolor}">
            <div class="color-swatche__header__item">
              <div class="label"> Name </div>
              <div class="value"> {{ brandColor.name }}</div>
            </div>
          </div>
          <div class="color-swatche__body">
            <div class="color-swatche__body__item">
              <div class="label"> HEX </div>
              <div class="value" v-clipboard:copy="`${brandColor.hex}`" v-clipboard:success="onCopy"
                v-clipboard:error="onError">
                <span> {{ brandColor.hex }} </span>
                <i class="clipboard"></i>
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label"> RGB </div>
              <div class="value" v-clipboard:copy="`${brandColor.rgb}`" v-clipboard:success="onCopy"
                v-clipboard:error="onError">
                <span>{{ brandColor.rgb }}</span>
                <i class="clipboard"></i>
                </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label"> SCSS </div>
              <div class="value" v-clipboard:copy="`${brandColor.scss}`" v-clipboard:success="onCopy"
                v-clipboard:error="onError">
                <span>{{ brandColor.scss }}</span>
                <i class="clipboard"></i>
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label"> CSS </div>
              <div class="value" v-clipboard:copy="`${brandColor.css}`" v-clipboard:success="onCopy"
                v-clipboard:error="onError">
                <span>{{ brandColor.css }}</span>
                <i class="clipboard"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3>Variant colors</h3>
      <div class="color-swatches">
        <div class="color-swatche" v-for="variantColor in variantColors" :key="variantColor.id">
          <div class="color-swatche__header" :style="{'background-color': variantColor.hex, 'color': variantColor.textcolor}">
            <div class="color-swatche__header__item">
              <div class="label"> Name </div>
              <div class="value"> {{ variantColor.name }} </div>
            </div>
          </div>
          <div class="color-swatche__body">
            <div class="color-swatche__body__item">
              <div class="label"> HEX </div>
              <div class="value" v-clipboard:copy="`${variantColor.hex}`" v-clipboard:success="onCopy" v-clipboard:error="onError">
                <span>{{ variantColor.hex }}</span>
                <i class="clipboard"></i>
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label"> RGB </div>
              <div class="value" v-clipboard:copy="`${variantColor.rgb}`" v-clipboard:success="onCopy" v-clipboard:error="onError"> {{ variantColor.rgb }}
                <i class="clipboard"></i>
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label"> SCSS </div>
              <div class="value" v-clipboard:copy="`${variantColor.scss}`" v-clipboard:success="onCopy" v-clipboard:error="onError"> {{ variantColor.scss }}
                <i class="clipboard"></i>
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label"> CSS </div>
              <div class="value" v-clipboard:copy="`${variantColor.css}`" v-clipboard:success="onCopy" v-clipboard:error="onError"> {{ variantColor.css }}
                <i class="clipboard"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3>Common colors</h3>
      <div class="color-swatches">
        <div class="color-swatche" v-for="commonColor in commonColors" :key="commonColor.id">
          <div class="color-swatche__header" :style="{'background-color': commonColor.hex, 'color': commonColor.textcolor}">
            <div class="color-swatche__header__item">
              <div class="label"> Name </div>
              <div class="value"> {{ commonColor.name }} </div>
            </div>
          </div>
          <div class="color-swatche__body">
            <div class="color-swatche__body__item">
              <div class="label"> HEX </div>
              <div class="value" v-clipboard:copy="`${commonColor.hex}`" v-clipboard:success="onCopy" v-clipboard:error="onError">
                <span>{{ commonColor.hex }}</span>
                <i class="clipboard"></i>
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label"> RGB </div>
              <div class="value" v-clipboard:copy="`${commonColor.rgb}`" v-clipboard:success="onCopy" v-clipboard:error="onError">
                <span>{{ commonColor.rgb }}</span>
                <i class="clipboard"></i>
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label"> SCSS </div>
              <div class="value" v-clipboard:copy="`${commonColor.scss}`" v-clipboard:success="onCopy" v-clipboard:error="onError">
                <span>{{ commonColor.scss }}</span>
                <i class="clipboard"></i>
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label"> CSS </div>
              <div class="value" v-clipboard:copy="`${commonColor.css}`" v-clipboard:success="onCopy" v-clipboard:error="onError">
                <span>{{ commonColor.css }}</span>
                <i class="clipboard"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3>State colors</h3>
      <div class="color-swatches">
        <div class="color-swatche" v-for="alertsColor in stateColors" :key="alertsColor.id">
          <div class="color-swatche__header" :style="{'background-color': alertsColor.hex, 'color': alertsColor.textcolor}">
            <div class="color-swatche__header__item">
              <div class="label"> Name </div>
              <div class="value"> {{ alertsColor.name }} </div>
            </div>
          </div>
          <div class="color-swatche__body">
            <div class="color-swatche__body__item">
              <div class="label"> HEX </div>
              <div class="value" v-clipboard:copy="`${alertsColor.hex}`" v-clipboard:success="onCopy" v-clipboard:error="onError">
                <span>{{ alertsColor.hex }}</span>
                <i class="clipboard"></i>
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label"> RGB </div>
              <div class="value" v-clipboard:copy="`${alertsColor.rgb}`" v-clipboard:success="onCopy" v-clipboard:error="onError">
                <span>{{ alertsColor.rgb }}</span>
                <i class="clipboard"></i>
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label"> SCSS </div>
              <div class="value" v-clipboard:copy="`${alertsColor.scss}`" v-clipboard:success="onCopy" v-clipboard:error="onError">
                <span>{{ alertsColor.scss }}</span>
                <i class="clipboard"></i>
              </div>
            </div>
            <div class="color-swatche__body__item">
              <div class="label"> CSS </div>
              <div class="value" v-clipboard:copy="`${alertsColor.css}`" v-clipboard:success="onCopy" v-clipboard:error="onError">
                <span>{{ alertsColor.css }}</span>
                <i class="clipboard"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <transition name="fade">
        <div class="alerts" :class="{success: alertType==='success', error: alertType==='error'}" v-if="alerts">
          {{ message }}
        </div>
      </transition>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      alerts: false,
      alertType :null,
      message: "",
      brandColors: [
        {
          name: 'Primary',
          hex: `#2f374a`,
          rgb: '47, 55, 74',
          scss: '$color-primary',
          css: 'var(--color-primary)',
          textcolor: '#ffffff'
        },
        {
          name: 'Secondary',
          hex: '#f9c72c',
          rgb: '249, 199, 44',
          scss: '$color-secondary',
          css: 'var(--color-secondary)',
          textcolor: '#2f374a'
        },
        {
          name: 'Tertiary',
          hex: '#d8d8d8',
          rgb: '216, 216, 216',
          scss: '$color-tertiary',
          css: 'var(--color-border)',
          textcolor: '#2f374a'
        }
      ],
      variantColors: [
        {
          name: 'Tertiary Lightest',
          hex: '#f7f7f7',
          rgb: '247, 247, 247',
          scss: '$color-tertiary-lightest',
          css: 'var(--color-tertiary-lightest)',
          textcolor: '#2f374a'
        },
        {
          name: 'Tertiary Dark',
          hex: '#7a7a7a',
          rgb: '123, 123, 123',
          scss: '$color-tertiary-darkest',
          css: 'var(--color-tertiary-dark)',
          textcolor: '#ffffff'
        },
        {
          name: 'Tertiary Darkest',
          hex: '#606060',
          rgb: '96, 96, 96',
          scss: '$color-tertiary-darkestest',
          css: 'var(--color-tertiary-darkest)',
          textcolor: '#ffffff'
        }
      ],
      commonColors: [
        {
          name: 'White Dwarf',
          hex: '#ffffff',
          rgb: '255, 255, 255',
          scss: '$color-white',
          css: 'var(--color-white)',
          textcolor: '#2f374a'
        },
        {
          name: 'Black',
          hex: '#000000',
          rgb: '0, 0, 0',
          scss: '$color-black',
          css: 'var(--color-black)',
          textcolor: '#ffffff'
        }
      ],
      stateColors: [
        {
          name: 'High',
          hex: '#ff3d1e',
          rgb: '255, 61, 30',
          scss: '$color-high',
          css: 'var(--color-high)',
          textcolor: '#ffffff'
        },
        {
          name: 'Medium',
          hex: '#ff9100',
          rgb: '255, 145, 0',
          scss: '$color-warning',
          css: 'var(--color-warning)',
          textcolor: '#ffffff'
        },
        {
          name: 'Success',
          hex: '#00af50',
          rgb: '0, 175, 80',
          scss: '$color-success',
          css: 'var(--color-success)',
          textcolor: '#ffffff'
        }
        ,
        {
          name: 'Neutral',
          hex: '#205dbd',
          rgb: '32, 93, 189',
          scss: '$color-neutral',
          css: 'var(--color-neutral)',
          textcolor: '#ffffff'
        }
        ,
        {
          name: 'Disabled',
          hex: '#BDBDBD',
          rgb: '123, 123, 123',
          scss: '$color-disabled',
          css: 'var(--color-disabled)',
          textcolor: '#ffffff'
        }
      ]
    }
  },
  methods: {
    onCopy(e) {
      this.alerts = true;
      this.message = e.text + ' ' + 'copied !' ;
      this.alertType = "success";
      setTimeout(() => {
        this.alerts = false;
      }, 3000);
    },
    onError(e) {
      this.alerts = true;
      this.message = 'Failed to copy texts';
      this.alertType = "error";
      setTimeout(() => {
        this.alerts = false;
      }, 3000);
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/_BIMDataVariables.scss";

  @import "./_Colors.scss";
</style>