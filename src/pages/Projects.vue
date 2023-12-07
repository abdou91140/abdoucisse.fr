
<template><Layout>
  <div class="container" id="projet">
    <h1 class="title ">Les projets sur GitHub</h1>
    <hr class="my-4" />

    <div class="row">
      <div
        class="col-md-3 mb-3"
        v-for="(repo, index) in repositories"
        :key="repo.id"
      >
        <div class="card text-white bg-dark border-light">
          <div class="card-header">{{ repo.name }}</div>
          <div class="card-body">
  <!--           <img
              v-if="$page.allProjet.edges[index] != null"
              :src="$page.allProjet.edges[index].node.image"
              class="card-img-top"
              alt="Project Image"
            /> -->
            <router-link :to="repo.html_url" class="text-light">
              <p class="card-text">{{ repo.description }}</p>
            </router-link>
          </div>
          <div class="card-footer bg-transparent border-primary">
            <small class="text-date">Last commit: {{new Date(repo.lastCommit).toLocaleDateString('fr') }}</small>
          </div>
        </div>
      </div>
    </div>
  </div></Layout>
</template>


<script>
export default {
  data() {
    return {
      repositories: []
    };
  },
  mounted() {
    this.fetchRepositories();
  },
  methods: {
    async fetchRepositories() {
      try {
        const apiUrl = 'https://api.github.com/users/abdou91140/repos';
        const response = await fetch(apiUrl);
        const data = await response.json();
        this.repositories =  data.slice(0, 4);
        await this.fetchLastCommitDates();
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    },
    async fetchLastCommitDates() {
      try {
        for (let i = 0; i < this.repositories.length; i++) {
          const repo = this.repositories[i];
          const commitsUrl = `https://api.github.com/repos/abdou91140/${repo.name}/commits`;
          const commitResponse = await fetch(commitsUrl);
          const commitData = await commitResponse.json();
          if (commitData.length > 0) {
            const lastCommitDate = commitData[0].commit.committer.date;
            this.repositories[i].lastCommit = lastCommitDate;
          }
        }
      } catch (error) {
        console.error('Error fetching last commit date:', error);
      }
    }
  }
};
</script>

<style>
.card{
    background-image: url('/Home.png');
}
.card-body > a:hover {
   text-decoration: none;

}

.card ,.header>div>img{
  transition: transform 0.3s,  0.3s ease-in-out;
}
.card:hover,.header>div>img:hover {
  filter: #75b4dd;
  transform: scale(1.1);
  transition: transform 0.3s ; 
}
.row {
  text-align: center;
}

img {
  max-width: -webkit-fill-available;
}</style>
