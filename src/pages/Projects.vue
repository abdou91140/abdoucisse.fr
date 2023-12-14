
<template>
    <Layout>
        <div class="container">
            <h1 class="titles display-5">Les projets sur GitHub</h1>

            <div class="loading-container d-flex justify-content-center" v-if="loading">
                <div class="loader"></div>
                <p>Loading...</p>
            </div>
            <div v-if="!loading">
                <div class="d-flex justify-content-center flex-wrap">
                    <div class="col-md-3 mb-3" v-for="(repo, index) in repositories" :key="repo.id">
                        <div class="card border-secondary mb-3">
                            <div class="card-header">{{ repo.name }}</div>
                            <div class="card-body">
                                <router-link :to="repo.html_url" class="text-light"><span>Description:</span>
                                    <p class="card-text"> {{ repo.description }}</p>
                                </router-link>
                            </div>
                            <div class="card-footer">
                                <small class="text-date">Dernier commit: {{ new
                                    Date(repo.lastCommit).toLocaleDateString('fr-FR')
                                }}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </Layout>
</template>


<script>
export default {
    data() {
        return {
            repositories: [],
            loading: true
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
                this.repositories = data.slice(0, 4);
                await this.fetchLastCommitDates();
                this.loading = false;
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
.card {
    border: none !important;
    border-radius: 2%;
}

.text-light>span {
    color: white;
}

.card-header {
    color: #ff409a;
    font-size: 25px;
}

.card-text {
    color: rgba(0, 0, 0, 0.685);
}

.card-body>a:hover {
    text-decoration: none;
}

.card,
.header>div>img {
    transition: transform 0.3s, 0.3s ease-in-out;
}

.card:hover,
.header>div>img:hover {
    transform: scale(1.1);
    transition: transform 0.3s;

}

/* Loading animation styles */
.loading-container {
    position: relative;
    min-height: 100px;
    /* Adjust height as needed */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.loader {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid #ff409a;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin-bottom: 20px;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}</style>
