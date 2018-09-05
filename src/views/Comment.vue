<template>
  <div class="comments">
    <h1 v-if="postId">The postId is: {{postId}}</h1>
    <Comment msg="This is comment page" :post-id="postId" />
  </div>
</template>

<script>
// @ is an alias to /src
import Comment from "@/components/Comment";

export default {
  name: "comment",
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
  components: {
    Comment
  }
};
</script>
