<template>
  <div class="photos">
    <Photos msg="This is photos page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Photos from "@/components/Photos.vue";

export default {
  name: "photos",
  components: {
    Photos
  }
};
</script>
