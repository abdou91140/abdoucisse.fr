<template>
  <Layout>
      <div class="container" id="BlogPost">
    <h1>Blog Posts</h1>
    <ol class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center"  v-for="post in $page.allBlogPost.edges" :key="post.node.id">
        <div class="badge  rounded-pill">{{ post.node.date }}</div><g-link :to="post.node.path"><h4>{{ post.node.title }}</h4></g-link><span>{{ post.node.description }}</span>
     
       
      </li>
     
    </ol></div>
  </Layout>
</template>

</script>
<page-query>
  query {
    allBlogPost {
      edges {
        node {
          id
          title
          description
          path
          date(format: "DD MMMM YYYY")
        }
      }
    }
  }
</page-query>
<style>
.BlogPost {
    padding-top: 5em;
}
</style>