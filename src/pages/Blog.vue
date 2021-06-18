<template>
  <Layout>
      <div class="container" id="BlogPost">
    <h1>Blog Posts</h1>
    <ol class="list-group">
      <div   v-for="post in $page.allBlogPost.edges" :key="post.node.id">
      <li class="list-group-item "  >
        <div class="badge  rounded-pill">{{ post.node.date }}</div><g-link :to="post.node.path"><h4 class="d-flex align-item">{{ post.node.title }}</h4></g-link><span>{{ post.node.description }}</span>
      </li>
      </div>
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
          path
          title
          description
          date(format: "DD MMMM YYYY",locale:"fr")
        }
      }
    }
  }
</page-query>
<style>
#BlogPost {
    padding: 3em;
}

</style>