<script>
import axios from "axios";
export default {
  data: function () {
    return {
      posts: [],
      currentPost: {},
    };
  },
  created: function () {
    this.indexPosts();
  },
  methods: {
    indexPosts: function () {
      axios.get("/posts").then((response) => {
        console.log("posts index", response);
        this.posts = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="home row">
    <h1 class="m-3">All Posts</h1>
    <!-- <div v-for="post in posts" v-bind:key="post.id"> -->
    <div
      class="card"
      style="width: 18rem"
      v-bind:class="{ selected: post === currentPost }"
      v-for="post in posts"
      v-bind:key="post.id"
      v-on:click="currentPost = post"
    >
      <img v-bind:src="post.image" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          {{ post.body }}
        </p>
        <router-link class="btn btn-primary" v-bind:to="`/posts/${post.id}`">Show more Info</router-link>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<style>
h1 {
  color: rgb(0, 0, 0);
  font-size: 40px;
  font-family: "Rubik Moonrocks", cursive;
}

.selected .card-body {
  background-color: rgb(242, 208, 214);
}
</style>
