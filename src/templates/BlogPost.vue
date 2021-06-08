<template>
  <Layout>
    <main>
      <div class="container blog-post">
        <article>
          <h1 v-if="$page.blogPost.fields">
            {{ $page.blogPost.fields.title }}
          </h1>
          <small
            >{{ $page.blogPost.timeToRead }}<span> min de lecture</span></small
          >
          <hr />
          <div
            v-if="$page.blogPost.fields"
            v-html="$page.blogPost.content"
          ></div>
        </article>
        <Disqus
          shortname="portfolio-bmherqxhzx"
          :identifier="$page.blogPost.fields.title"
        />
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
      fields{
       title
      }   
       content
         
    }
  }
</page-query>
<style>
.blog-post {
  padding: 3em;
}
#disqus_thread {
  margin: auto;
}
</style>
