<template>
  <Layout>
    <div class="container ">
      <div class="titles display-5">
        Blog Posts
      </div>
      <div id="table-border">
        <table class="table table-hover table-secondary">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Titre</th>
              <th scope="col">Sujet</th>
            </tr>
          </thead>
          <tbody>

            <tr v-for="post in $page.allBlogPost.edges" :key="post.node.id">
              <th scope="rowgroup"> {{ post.node.date }}
              </th>
              <td>
                <g-link :to="post.node.path" class="link-blog">
                  {{ post.node.title }}
                </g-link>
              </td>
              <td> {{ post.node.description }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
.container,
.table {
  background-color: transparent !important;
  margin-bottom: inherit;
}

#table-border {
  border-radius: 10px;
  overflow: hidden;
}
:root {
  --bs-table-color: #000000!important; /* Black color */
}


@media screen and (max-width: 768px) {

  h4 {
    font-size: small;
  }
}
</style> 
<!-- <template>
  <Layout>
    <div class="container">
      <div class="titles display-5">
        Blog Posts
      </div>
      <div v-if="loading">
       Loader component or loading message 
        <p>Loading...</p>
      </div>
      <div id="table-border" v-if="!loading">
        <table class="table table-hover table-secondary">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Titre</th>
              <th scope="col">Sujet</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in blogPosts" :key="post.id">
              <th scope="rowgroup">{{ post.date }}</th>
              <td>
                <g-link :to="`/blog/${post.slug}`" class="link-blog">
                  {{ post.title }}
                </g-link>
              </td>
              <td>{{ post.summary }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      blogPosts: [],
      loading: true // Initially set loading to true
    };
  },
  async created() {
    await this.fetchBlogPosts();
  },
  methods: {
    async fetchBlogPosts() {
      try {
        const { data } = await this.$graphql(`
          {
            allBlogPost {
              edges {
                node {
                  id
                  title
                  date(format: "DD MMMM YYYY", locale: "fr")
                  summary
                  slug
                }
              }
            }
          }
        `);
        this.blogPosts = data.allBlogPost.edges.map(edge => edge.node);
        this.loading = false; // Set loading to false after fetching data
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        this.loading = false; // Set loading to false in case of error
      }
    }
  }
};
</script>

<style>
.container {
  background-color: transparent !important;
  margin-bottom: inherit;
}

#table-border {
  border-radius: 10px;
  overflow: hidden;
}

/* Add any additional styling here */
</style>
 -->