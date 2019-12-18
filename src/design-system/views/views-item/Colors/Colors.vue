<template>
  <div class="article colors">
    <main>
      <div class="article-wrapper">
        <div class="test">
          <div class="box box1"></div>
          <div class="box box2"></div>
          <div class="box box3"></div>
        </div>
        <h2>{{ $route.name }}</h2>
        <h3>Primary colors</h3>
        <div class="color-swatches">
          <div class="color-swatche" v-for="primaryColor in primaryColors" :key="primaryColor.id">
            <div class="color-swatche__header" :style="{'background-color': primaryColor.hex, 'color': primaryColor.textcolor}">
              <div class="color-swatche__header__item">
                <div class="label"> Name </div>
                <div class="value"> {{ primaryColor.name }} </div>
              </div>
            </div>
            <div class="color-swatche__body">
              <div class="color-swatche__body__item">
                <div class="label"> HEX </div>
                <div class="value"> {{ primaryColor.hex }} </div>
              </div>
              <div class="color-swatche__body__item">
                <div class="label"> RGB </div>
                <div class="value"> {{ primaryColor.rgb }} </div>
              </div>
              <div class="color-swatche__body__item">
                <div class="label"> SCSS </div>
                <div class="value"> {{ primaryColor.scss }} </div>
              </div>
              <div class="color-swatche__body__item">
                <div class="label"> CSS </div>
                <div class="value"> {{ primaryColor.css }} </div>
              </div>
            </div>
          </div>
        </div>
        <h3>Secondary color</h3>
        <div class="color-swatches">
          <div class="color-swatche" v-for="secondaryColor in secondaryColors" :key="secondaryColor.id">
            <div class="color-swatche__header" :style="{'background-color': secondaryColor.hex, 'color': secondaryColor.textcolor}">
              <div class="color-swatche__header__item">
                <div class="label"> Name </div>
                <div class="value"> {{ secondaryColor.name }} </div>
              </div>
            </div>
            <div class="color-swatche__body">
              <div class="color-swatche__body__item">
                <div class="label"> HEX </div>
                <div class="value"> {{ secondaryColor.hex }} </div>
              </div>
              <div class="color-swatche__body__item">
                <div class="label"> RGB </div>
                <div class="value"> {{ secondaryColor.rgb }} </div>
              </div>
              <div class="color-swatche__body__item">
                <div class="label"> SCSS </div>
                <div class="value"> {{ secondaryColor.scss }} </div>
              </div>
              <div class="color-swatche__body__item">
                <div class="label"> CSS </div>
                <div class="value"> {{ secondaryColor.css }} </div>
              </div>
            </div>
          </div>
        </div>
        <h3>Alerts color</h3>
        <div class="color-swatches">
          <div class="color-swatche" v-for="alertsColor in alertsColors" :key="alertsColor.id">
            <div class="color-swatche__header" :style="{'background-color': alertsColor.hex, 'color': alertsColor.textcolor}">
              <div class="color-swatche__header__item">
                <div class="label"> Name </div>
                <div class="value"> {{ alertsColor.name }} </div>
              </div>
            </div>
            <div class="color-swatche__body">
              <div class="color-swatche__body__item">
                <div class="label"> HEX </div>
                <div class="value"> {{ alertsColor.hex }} </div>
              </div>
              <div class="color-swatche__body__item">
                <div class="label"> RGB </div>
                <div class="value"> {{ alertsColor.rgb }} </div>
              </div>
              <div class="color-swatche__body__item">
                <div class="label"> SCSS </div>
                <div class="value"> {{ alertsColor.scss }} </div>
              </div>
              <div class="color-swatche__body__item">
                <div class="label"> CSS </div>
                <div class="value"> {{ alertsColor.css }} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      primaryColors: [
        {
          name: 'Primary',
          hex: '#2f374a',
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
        }
      ],
      secondaryColors: [
        {
          name: 'White Dwarf',
          hex: '#ffffff',
          rgb: '255, 255, 255',
          scss: '$color-white',
          css: 'var(--color-white)',
          textcolor: '#2f374a'
        },
        {
          name: 'Background',
          hex: '#f8f8f8',
          rgb: '240, 240, 240',
          scss: '$color-background',
          css: 'var(--color-background)',
          textcolor: '#2f374a'
        }
        ,
        {
          name: 'Border',
          hex: '#d8d8d8',
          rgb: '216, 216, 216',
          scss: '$color-border',
          css: 'var(--color-border)',
          textcolor: '#2f374a'
        }
        ,
        {
          name: 'Text',
          hex: '#616060',
          rgb: '97, 96, 96',
          scss: '$color-text',
          css: 'var(--color-text)',
          textcolor: '#ffffff'
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
      alertsColors: [
        {
          name: 'High',
          hex: '#ff3d1e',
          rgb: '255, 61, 30',
          scss: '$color-red',
          css: 'var(--color-red)',
          textcolor: '#ffffff'
        },
        {
          name: 'Medium',
          hex: '#ff9100',
          rgb: '255, 145, 0',
          scss: '$color-orange',
          css: 'var(--color-orange)',
          textcolor: '#ffffff'
        },
        {
          name: 'Success',
          hex: '#00af50',
          rgb: '0, 175, 80',
          scss: '$color-green',
          css: 'var(--color-green)',
          textcolor: '#ffffff'
        }
        ,
        {
          name: 'Neutral',
          hex: '#205dbd',
          rgb: '32, 93, 189',
          scss: '$color-blue',
          css: 'var(--color-blue)',
          textcolor: '#ffffff'
        }
        ,
        {
          name: 'Grey',
          hex: '#7b7b7b',
          rgb: '123, 123, 123',
          scss: '$color-grey',
          css: 'var(--color-grey)',
          textcolor: '#ffffff'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "../../../../assets/scss/_BIMDataVariables.scss";

  @import "./_Colors.scss";
</style>