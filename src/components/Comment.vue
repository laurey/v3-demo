<template>
  <div class="hello">
    <h1>{{ txt }} of {{ id || '+_+' }}</h1>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <div
          v-text="comment.contents"
        >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    msg: String,
    postId: String,
    postList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      txt: this.msg || "Welcome to Your Comment page",
      comments: [
        {
          id: 1,
          name: "AA.jpg",
          content: "comment../assets/File1.jpg"
        },
        {
          id: 2,
          name: "BB.jpg",
          content: "comment@/assets/File2.jpg"
        },
        {
          id: 3,
          name: "CC.jpg",
          content: "comment@/assets/File3.jpg"
        },
        {
          id: 4,
          name: "DD.jpg",
          content: "comment./../assets/File4.jpg"
        },
        {
          id: 5,
          name: "EE.jpg",
          content: "comment@/assets/File5.jpg"
        }
      ]
    };
  },
  computed: {
    id() {
      return this.postId;
    }
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
