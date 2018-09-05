<template>
  <div class="hello">
    <h1>{{ txt }} of {{ id || '+_+' }}</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <div
          :class="[bordered, {italic: italic}]"
          v-text="post.content"
        >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Post",
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
      italic: false,
      bordered: "bordered",
      // posts: this.postList,
      txt: this.msg || "Welcome to Your Post page",
      postsExample: [
        {
          id: 1,
          name: "A.jpg",
          content: "../assets/File1.jpg"
        },
        {
          id: 2,
          name: "B.jpg",
          content: "@/assets/File2.jpg"
        },
        {
          id: 3,
          name: "C.jpg",
          content: "@/assets/File3.jpg"
        },
        {
          id: 4,
          name: "D.jpg",
          content: "./../assets/File4.jpg"
        },
        {
          id: 5,
          name: "E.jpg",
          content: "@/assets/File5.jpg"
        }
      ]
    };
  },
  computed: {
    id() {
      return this.postId;
    },
    posts() {
      const { postList } = this;
      return postList;
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

.hello {
  .bordered {
    border: 1px solid red;
    font-size: 16px;
    text-decoration: darkblue;
  }
}
</style>
