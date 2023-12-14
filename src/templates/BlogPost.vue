<template>
  <Layout>
    <main>
      <div class="container blog-post">
        <div class="titles display-5" v-if="$page.blogPost.title">
          {{ $page.blogPost.title }}
        </div>
        <article>

          <small>{{ $page.blogPost.timeToRead }}<span> min de lecture</span></small>
          <hr />
          <div v-if="$page.blogPost.content" v-html="$page.blogPost.content"></div>
        </article>
        <Disqus shortname="portfolio-bmherqxhzx" :identifier="$page.blogPost.title" />
      </div>
    </main>
  </Layout>
</template>
<script>
export default {};
</script>
<page-query>
  query ($id: ID!) {
    blogPost(id: $id) { 
       timeToRead(speed:230)
       title
       content
    }
  }
</page-query>
<style>
.blog-post {
  padding: 1em;
}

#disqus_thread {
  margin: auto;
}
</style>
