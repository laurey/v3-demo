<template>
  <div class="posts">
    <nav v-if="childrenMenu.length">
      <router-link
        v-for="menu in childrenMenu"
        :key="menu.id"
        :to="menu.path"
      >
        {{menu.title}}
      </router-link>
    </nav>
    <h1 v-if="postId">This postId is: {{postId}}</h1>
    <Post msg="This is posts page" :post-list="postList" :post-id="postId" />
  </div>
</template>

<script>
// @ is an alias to /src
import Post from "@/components/Post";

export default {
  name: "post",
  data() {
    return {
      postId: this.$route.params.id
    };
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    if (this.postId !== id) {
      this.postId = id;
    }

    next();
  },
  computed: {
    postList() {
      const { postId } = this;
      const { posts } = this.$store.state;
      return (postId && posts.filter(post => post.id == postId)) || posts;
    },
    menuData() {
      return this.$store.state.menuData;
    },
    childrenMenu() {
      const {
        menuData,
        $route: { name }
      } = this;
      const menu = menuData.find(item => item.name === name);
      return menu ? menu.children : [];
    }
  },
  components: {
    Post
  }
};
</script>

<style lang="scss" scoped>
nav {
  a {
    color: firebrick;
    margin: 0 10px;
    font-weight: bold;
    font-style: italic;
  }
}
</style>
