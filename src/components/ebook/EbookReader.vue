<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
import Epub from "epubjs";
import { ebookMinxin } from "../../utils/mixin";
global.ePub = Epub;
export default {
  mixins: [ebookMinxin],
  mounted() {
    // 传入动态URL
    const baseUrl = "http://192.168.10.157:8888/epub/";
    const fileName = this.$route.params.fileName.split("|").join("/");
    this.setFileName(fileName).then(() => {
      this.initEpub(baseUrl);
    });
  },
  methods: {
    // 上一页
    prevPage() {
      if (this.rendition) {
        this.rendition.prev();
        this.hideTitleAndMenu();
      }
    },
    // 下一页
    nextPage() {
      if (this.rendition) {
        this.rendition.next();
        this.hideTitleAndMenu();
      }
    },
    toggleTitleAndMenu() {
      this.setMenuVisible(!this.menuVisible);
    },
    hideTitleAndMenu() {
      this.setMenuVisible(false);
    },
    // 初始化电子书
    initEpub(baseUrl) {
      console.log("baseUrl =>", baseUrl);
      const url = `${baseUrl}${this.fileName}.epub`;
      this.book = new Epub(url);
      this.rendition = this.book.renderTo("read", {
        width: innerWidth,
        height: innerHeight,
        method: "default",
      });
      this.rendition.display();
      this.rendition.on("touchstart", (event) => {
        this.touchStartX = event.changedTouches[0].clientX;
        this.touchStartTime = event.timeStamp;
      });
      this.rendition.on("touchend", (event) => {
        const offsetX = event.changedTouches[0].clientX - this.touchStartX;
        const time = event.timeStamp - this.touchStartTime;
        if (time < 500 && offsetX > 40) {
          this.prevPage();
        } else if (time < 500 && offsetX < -40) {
          this.nextPage();
        } else {
          this.toggleTitleAndMenu();
        }
        event.preventDefault();
        event.stopPropagation();
      });
    },
  },
};
</script>

<style>
</style>