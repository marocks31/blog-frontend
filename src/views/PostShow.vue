<script>
import axios from "axios";
export default {
  data: function () {
    return {
      post: {},
    };
  },
  created: function () {
    axios.get(`/posts/${this.$route.params.id}`).then((response) => {
      this.post = response.data;
    });
  },
  methods: {
    destroyPost() {
      axios.delete(`/posts/${this.post.id}`).then((response) => {
        console.log(response);
        this.$router.push("/posts");
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <div>
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
      <p>{{ post.image }}</p>
      <button><router-link to="/posts">Back to all</router-link></button>
      <button><router-link v-bind:to="`/posts/${post.id}/edit`">Edit</router-link></button>
      <button v-on:click="destroyPost()">Delete</button>
    </div>
  </div>
</template>
