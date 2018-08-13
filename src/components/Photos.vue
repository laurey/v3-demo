<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <img src="@/assets/File5.jpg" />
    <ul>
      <li v-for="photo in photos" :key="photo.id">
        <div>
          <img :src="getImageSrc(photo.src)" :title="photo.name"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Photos",
  props: {
    msg: String,
    photoList: Array,
    baseUrl: {
      type: String,
      default: process.env.BASE_URL
    }
  },
  data() {
    return {
      photos: [
        {
          id: 1,
          name: "File01.jpg",
          src: "../assets/File1.jpg"
        },
        {
          id: 2,
          name: "File02.jpg",
          src: "@/assets/File2.jpg"
        },
        {
          id: 3,
          name: "File03.jpg",
          src: "./assets/File3.jpg"
        },
        {
          id: 4,
          name: "File04.jpg",
          src: "assets/File4.jpg"
        },
        {
          id: 5,
          name: "File05.jpg",
          src: "../assets/File5.jpg"
        }
      ]
    };
  },
  methods: {
    getBgImage(src) {
      return {
        background: "url(" + src + ")"
      };
    },
    getImageSrc(src) {
      return src;
    }
  },
  filters: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 10px;
  color: #4209aa;
  width: 200px;
  height: 300px;
  border: 1px salmon solid;
}
a {
  color: #42b983;
}
</style>
