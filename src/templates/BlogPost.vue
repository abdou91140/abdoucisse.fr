<template>
  <Layout>
    <div class="container blog-post">
      <article>
        <h1 v-if="$page.blogPost">{{ $page.blogPost.title }}</h1>
        <div v-if="$page.blogPost" v-html="$page.blogPost.content"></div>
        <div id="disqus_thread"></div>
      </article>
    </div>
  </Layout>
</template>
<script>
export default {};
</script>
//
<script>
// /**
//  *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
//  *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */

// /* var disqus_config = function() {
//   this.page.url = $page.blogPost.path; // Replace PAGE_URL with your page's canonical URL variable
//   this.page.identifier = $page.blogPost.slug; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
// }; */

// (function() {
//   // DON'T EDIT BELOW THIS LINE
//   var d = document,
//     s = d.createElement("script");
//   s.src = "https://portefolio-1.disqus.com/embed.js";
//   s.setAttribute("data-timestamp", +new Date());
//   (d.head || d.body).appendChild(s);
// })();
// <noscript>
//   Please enable JavaScript to view the{" "}
//   <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
// </noscript>;
</script>
<page-query>
  query ($id: ID!) {
    blogPost(id: $id) {
      title
      content
    }
  }
</page-query>
<style>
.blog-post {
  padding: 3em;
}
</style>
