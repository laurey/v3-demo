<template>
  <div class="photo">
    <Photo msg="This is photo page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Photo from "@/components/Photo";

export default {
  name: "photo",
  components: {
    Photo
  }
};
</script>
