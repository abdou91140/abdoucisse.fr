<template>
  <Layout>
    <div class="container ">
      <div class="titles display-5">
     Blog Posts
      </div>
      <table class="table-light table-hover table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Titre</th>
            <th scope="col">Sujet</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in $page.allBlogPost.edges" :key="post.node.id" >
          
         <td>  {{ post.node.date }}
            </td><td>
    <g-link :to="post.node.path" class="link-blog">
      <h4>{{ post.node.title }}</h4>
    </g-link></td>
   <td> {{ post.node.description }}
  </td> 
    </tr>
    </tbody>
    </table>
    </div>
  </Layout>
</template>

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
.container .table{
  border-radius:10px !important;;
}
.link-blog h4{
  color: #fc346f;
}
</style>