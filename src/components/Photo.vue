<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="photo in photos" :key="photo.id">
        <div :style="{border: '1px solid red', backgroundPosition: 'center center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundImage: 'url(' + `${photo.src}` + ')'}" v-text="photo.name">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Photo",
  props: {
    photoList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      msg: "Welcome to Your Photo page",
      photos: [
        {
          id: 1,
          name: "A.jpg",
          src: require("../assets/File1.jpg")
        },
        {
          id: 2,
          name: "B.jpg",
          src: require("@/assets/File2.jpg")
        },
        {
          id: 3,
          name: "C.jpg",
          src: require("@/assets/File3.jpg")
        },
        {
          id: 4,
          name: "D.jpg",
          src: require("./../assets/File4.jpg")
        },
        {
          id: 5,
          name: "E.jpg",
          src: require("@/assets/File5.jpg")
        }
      ]
    };
  }
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
  width: 100px;
  height: 200px;
  div {
    height: 100%;
  }
}
a {
  color: #42b983;
}
</style>
