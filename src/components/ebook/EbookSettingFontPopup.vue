<template>
  <div class="ebook-popup-list" v-show="fontFamilyVisible">
    <div class="ebook-popup-title">
      <div class="ebook-popup-title-icon" @click="hide">
        <span class="icon-down2"></span>
      </div>
      <span class="ebook-popup-title-text">选择字体</span>
    </div>
    <div class="ebook-popup-list-wrapper"></div>
  </div>
</template>

<script>
import { ebookMinxin } from "../../utils/mixin";
export default {
  mixins: [ebookMinxin],
  methods: {
    hide() {
      this.setFontFamilyVisible(true);
    },
  },
};
</script>

<style>
</style>