<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/photo">Photo</router-link> |
      <router-link to="/post">Post</router-link> |
      <router-link to="/post/1">Post/1</router-link> |
      <router-link to="/post/2">Post/2</router-link> -->
      <router-link
        v-for="menu in menuData"
        :key="menu.id"
        :to="menu.path"
      >
        {{menu.title}}
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  computed: {
    menuData() {
      return this.$store.state.menuData;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
