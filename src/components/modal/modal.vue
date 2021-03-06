<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot name="header">
            <div class="title-container">
              <span class="title">
                {{customizeBulk ? 'Customize selection' : 'Customize illustration'}}
              </span>
              <span v-if="customizeBulk" class="subtitle">
              (<strong>{{vectors}} illustrations </strong>selected for bulk edit)
              </span>
            </div>
            <button
              type="button"
              class="btn-close"
              @click="close"
            >
              x
            </button>
          </slot>
        </header>
        <section class="modal-body">
          <slot name="body">
            <div class="preview-container">
              <span class="preview-title" v-if="customizeBulk">Example illustation for reference</span>
              <div id="preview" ref="preview" :class="`preview ${isHorizontal ? 'horizontal' : 'vertical'}`" v-html="vector">
              </div>
            </div>
            <div class="colors">
              <div class="stroke">
                <label class="title" for="strokeHex"> Color </label>
                <div class="color-options">
                  <div class="rounds">
                    <span :class="`round ${strokeHexValue === color ? 'selected' : ''}`" v-for="(color, index) in strokeColor" :key="index" @click="selectStroke(color)" :style="{backgroundColor: `${color}`}"></span>
                  </div>
                  <input name="strokeHex" v-model="strokeHexValue" type="text" placeholder="HEX" class="hex" @keyup="selectStroke(strokeHexValue)"/>
                </div>
              </div>
              <div class="fill">
                <label class="title" for="fillHex"> Background </label>
                <div class="color-options">
                  <div class="rounds">
                    <span :class="`round ${color === 'none' ? 'transparent' : ''} ${backgroundHexValue === color ? 'selected' : ''}`" v-for="(color, index) in fillColor" :key="index" @click="selectFill(color)" :style="{backgroundColor: `${color}`}"></span>
                  </div>
                  <input name="fillHex" v-model="backgroundHexValue" type="text" placeholder="HEX" class="hex" @keyup="selectFill(backgroundHexValue)"/>
                </div>
              </div>
              <div class="download">
                <div class="title-container">
                  <span class="title">Download PNG</span>
                  <span v-if="customizeBulk" class="subtitle">( {{vectors}} illustrations)</span>
                </div>
                <div class="buttons">
                  <div class="btn-container">
                    <a class="btn-download" :href="downloadPng('128')">S</a>
                    <span class="size">128px</span>
                  </div>
                  <div class="btn-container">
                    <a class="btn-download" :href="downloadPng('256')">M</a>
                    <span class="size">256px</span>
                  </div>
                  <div class="btn-container">
                    <a class="btn-download" :href="downloadPng('512')">L</a>
                    <span class="size">512px</span>
                  </div>
                </div>
              </div>
            </div>
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    vector: null,
    vectorId: null,
    customizeBulk: null,
    vectors: null,
    tags: null,
    isHorizontal: null
  },
  data () {
    return {
      fillColor: ['#FFFFFF', '#FF4E4E', '#FF9E48', '#FFD144', '#3CD77D', '#378CFF', '#D974FF', 'none'],
      strokeColor: ['#1C2541', '#FF4E4E', '#FF9E48', '#FFD144', '#3CD77D', '#378CFF', '#D974FF', '#FFFFFF'],
      svgCode: null,
      strokeHexValue: '#1C2541',
      backgroundHexValue: '#FFFFFF'
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    selectStroke (color) {
      if (color.length === 7) {
        document.querySelectorAll('#preview path')[1].style.fill = color
        this.strokeHexValue = color
      } else {
        document.querySelectorAll('#preview path')[1].style.fill = '#1C2541'
      }
    },
    selectFill (color) {
      if (color.length === 7 || color === 'none') {
        document.querySelectorAll('#preview path')[0].style.fill = color
        this.backgroundHexValue = color
      } else {
        document.querySelectorAll('#preview path')[0].style.fill = 'none'
      }
    },
    downloadPng (size) {
      const bgColor = (this.backgroundHexValue === 'none' || !this.backgroundHexValue)
        ? 'none'
        : this.backgroundHexValue.replace('#', '')

      if (this.customizeBulk) {
        const tags = this.tags.length
          ? this.tags.join()
          : 'all'
        return `https://cocomaterial.com/api/download/?tags=${tags}&img_format=png&stroke=${this.strokeHexValue ? this.strokeHexValue.replace('#', '') : '1C2541'}&fill=${bgColor}&size=${size}`
      } else {
        return `https://cocomaterial.com/api/download/?id=${this.vectorId}&img_format=png&stroke=${this.strokeHexValue ? this.strokeHexValue.replace('#', '') : '1C2541'}&fill=${bgColor}&size=${size}`
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .modal-backdrop {
    align-items: center;
    background-color: rgba(94, 100, 114, 0.61);
    display: flex;
    bottom: 0;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }

  .modal {
    background: #FFFFFF;
    border-radius: 6px;
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.07);
    display: flex;
    flex-direction: column;
    overflow-x: auto;
  }

  .modal-header,
  .modal-footer {
    display: flex;
    padding: 25px;

    @media (max-width: 768px) {
      padding: 10px;
    }
  }

  .modal-header {
    justify-content: space-between;

    @media (max-width: 768px) {
      padding: 20px 10px 5px;
    }

    & .title-container {
      margin: auto;
    }

    & .title {
      color: #1C2541;
      display: block;
      font-size: 18px;
      font-weight: 500;
      height: 26px;
      margin-bottom: 15px;
      text-align: center;

      @media (max-width: 768px) {
        margin-bottom: 5px;
      }
    }

    & .subtitle {
      color: #5E6472;
      font-size: 14px;
      font-weight: 400;

      &strong {
        font-weight: 700;
      }
    }
  }

  .modal-body {
    display: flex;
    padding: 20px 60px 30px 30px;
    position: relative;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 20px 30px;
    }
  }

  .btn-close {
    background: transparent;
    border: none;
    color: #1C2541;
    cursor: pointer;
    font-family: 'Red Hat Display', sans-serif;
    font-size: 20px;
    font-weight: 500;
    margin-top: -10px;
    padding: 0 10px;

    @media (max-width: 768px) {
      margin-top: -45px;
    }
  }

  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }

  .preview {
    align-items: center;
    background-image: url('../../assets/square.svg');
    background-color: #E5E5E5;
    display: flex;
    justify-content: center;
    height: 335px;
    margin-right: 50px;
    width: 335px;

    @media (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 30px;
      height: 207px;
      width: 326px;
    }
  }

  .preview-title {
    color: #5E6472;
    display: block;
    font-size: 12px;
    font-style: italic;
    font-weight: 500;
    margin-bottom: 10px;
    text-align: center;
  }

  .round {
    border-radius: 12px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.18);
    display: inline-block;
    margin-right: 8px;
    height: 18px;
    width: 18px;

    &.transparent {
      position: relative;

      &:before {
        border: 2px solid #FF0404;
        border-radius: 2px;
        content: '';
        left: -6px;
        position: absolute;
        transform: rotate(-45deg);
        top: 6px;
        width: 25px;
      }
    }

    &.selected {
      border: 2px solid #7BDFF2;
    }
  }

  .colors {
    & .title {
      display: block;
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 15px;

      @media (max-width: 768px) {
        margin-bottom: 0;
      }
    }

    & .hex {
      border: 1px solid #C4C4C4;
      border-radius: 2px;
      margin-left: 15px;
      padding: 5px;
      width: 70px;

      @media (max-width: 768px) {
        border: 1px solid #1C2541;
        margin-left: 0;
        align-self: flex-end;
      }
    }

    & .color-options {
      display: flex;
      align-items: center;

      @media (max-width: 768px) {
        flex-direction: column-reverse;
        align-items: flex-start;
      }
    }

    & .rounds {
      display: flex;
      align-items: center;

      @media (max-width: 768px) {
        justify-content: space-between;
        width: 100%;
        margin-top: 20px;
      }
    }
  }

  .stroke {
    margin-bottom: 30px;

    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }

  .download {
    margin-top: 60px;

    @media (max-width: 768px) {
      margin-top: 20px;

      & .title {
        margin-bottom: 15px;
      }
    }

    & .title-container {
      & .title,
      & .subtitle {
        display: inline-block;
      }

      & .subtitle {
        display: inline-block;
        color: #5E6472;
        font-size: 14px;
        font-weight: 400;
        margin: -3px 0 0 5px;
      }
    }

    & .buttons {
      display: flex;

      @media (max-width: 768px) {
        justify-content: space-between;
      }
    }

    & .btn-container {
      display: flex;
      flex-direction: column;
      margin-right: 20px;

      @media (max-width: 768px) {
        margin-right: 0;
      }
    }

    & .btn-download {
      background-color: transparent;
      border: 2px solid #3CD7C9;
      border-radius: 4px;
      color: #5E6472;
      font-family: 'Red Hat Display', sans-serif;
      font-size: 14px;
      font-weight: 500;
      padding: 5px 30px;
      text-decoration: none;

      &:hover {
        background-color: #3CD7C9;
        color:#ffffff;
        transition: all ease .3s;
      }

      @media (max-width: 768px) {
        padding: 5px 40px;
      }
    }

    & .size {
      color: #BDBDBD;
      font-size: 12px;
      font-weight: 500;
      margin-top: 5px;
      text-align: center;
    }
  }
</style>
