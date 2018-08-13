<template>
  <div class="photo">
    <Photo msg="This is photo page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Photo from "@/components/Photo.vue";

export default {
  name: "home",
  components: {
    Photo
  }
};
</script>
