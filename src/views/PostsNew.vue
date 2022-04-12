<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newPostParams: {},
      errors: [],
    };
  },

  methods: {
    createPost: function () {
      axios
        .post("/posts", this.newPostParams)
        .then((response) => {
          console.log("posts create", response);
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
  <div class="posts-index">
    <h1>Create a new post:</h1>
    <form v-on:submit.prevent="createPost()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div>
        Title
        <input type="text" v-model="newPostParams.title" />
      </div>
      <div>
        Body
        <input type="text" v-model="newPostParams.body" />
      </div>
      <div>
        Image
        <input type="text" v-model="newPostParams.image" />
      </div>
      <input type="submit" value="Create Post" />
    </form>
  </div>
</template>
