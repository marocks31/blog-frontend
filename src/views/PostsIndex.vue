<script>
import axios from "axios";
export default {
  data: function () {
    return {
      posts: [],
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
  <div class="posts-index">
    <h1>All Posts</h1>
    <div v-for="post in posts" v-bind:key="post.id">
      <div class="card" style="width: 18rem">
        <img v-bind:src="post.image" class="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <h2>{{ post.name }}</h2>
      <img v-bind:src="post.image" v-bind:alt="post.name" />
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
      <p>{{ post.image }}</p>
      <router-link v-bind:to="`/posts/${post.id}`">Show more Info</router-link>
    </div>
  </div>
</template>
