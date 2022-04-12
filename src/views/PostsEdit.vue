<script>
import axios from "axios";
export default {
  data: function () {
    return {
      post: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/posts/${this.$route.params.id}`).then((response) => {
      this.post = response.data;
    });
  },
  methods: {
    editPost: function () {
      axios
        .patch(`/posts/${this.post.id}`, this.post)
        .then((response) => {
          console.log(response);
          this.$router.push("/posts");
        })
        .catch((error) => {
          console.log("posts create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>edit post:</h1>
    <form v-on:submit.prevent="editPost()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div>
        Title
        <input type="text" v-model="post.title" />
      </div>
      <div>
        Body
        <input type="text" v-model="post.body" />
      </div>
      <div>
        Image
        <input type="text" v-model="post.image" />
      </div>
      <input type="submit" value="Edit" />
    </form>
  </div>
</template>
