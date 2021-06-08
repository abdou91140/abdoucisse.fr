<template>
  <Layout>
    <div class="container">
      <div class="header mx-auto">
        <div class="">
          <g-image class="profil" src="~/assets/images/profil.jpg" />
        </div>

        <div class="Intro">
          <h1 class="display-4">Abdoulaye Cissé</h1>
          <h2>
            Développeur
            <span class="font-weight-bolder">web</span>
          </h2>
          <div class="lead">
            <i>
              " Réaliser un projet web ? Où conduire un bus ?<br />
              Connaissez-vous le rapport entre ses 2 activités. <br />Aucun
              rapport, mais je sais faire les deux. "
            </i>
            <p>&#128521;</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container" id="presentation">
      <h2 class="Titre">Présentation</h2>
      <hr class="my-4" />
      <div class="jumbontron présentation">
        <span
          >Après des années derrière le volant, c'est derrière un
          clavier (azerty ou qwerty celons les goûts.) que j'évolue à
          présent. D'un tempérament curieux (dans le métier ce n'est pas un
          vilain défaut), j'aime explorer et tester. J'ai appris la technique
          nécessaire lors de ma formation chez Openclassrooms  pendant un an et
          demi sur le parcours
        </span>
        <span
          ><a
            href="https://openclassrooms.com/fr/paths/314-developpeur-front-end"
            target="_blank"
            >développeur front-end</a
          ></span
        ><span
          >, ma première expérience professionnelle, c'était à la RATP durant le
          premier confinement en télétravail. Ça m'a beaucoup appris sur
          l'autonomie et la gestion du stress et mon projet à présent est de
          trouver un poste en contrat de professionnalisation, car je suis
          convaincu d'avoir fait le bon choix pour m'épanouir.</span
        >
      </div>
    </div>
    <div class="container" id="projet">
      <h2 class="Titre">Les projets sur github</h2>
      <hr class="my-4" />

      <div class="card-deck">
        <div
          class="card "
          v-for="projet in $page.allProjet.edges"
          :key="projet.node.id"
        >
          <div class="card-body">
            <div class="card-img-top">
              <g-image
                v-if="projet.node.fields.image != null"
                :src="projet.node.fields.image"
              />
            </div>
            <g-link class="title" :to="projet.node.path">
              <h3 class="card-title">{{ projet.node.fields.title }}</h3>
              <p class="card-text">{{ projet.node.fields.description }}</p>
            </g-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container ">
      <h2 class="Titre">Les Languages & Frameworks</h2>
      <hr class="my-4" />
      <div class="row">
        <div class="col-sm-6 p-5">
          <h3>PHP</h3>
          <h3>Javascript</h3>
          <h3>HTML5</h3>
          <h3>CSS3</h3>
          <h3>Mysql</h3>
          <h3>Graphql</h3>
          <h3>Anglais</h3>
          <h3>Français</h3>
        </div>
        <div class="col-sm-6 p-5">
          <h3>React.js</h3>
          <h3>Vue.js</h3>
          <h3>Symfony</h3>
          <h3>Jquery</h3>
          <h3>Gridsome</h3>
          <h3>Next.js</h3>
          <h3>Bootstrap</h3>
          <h3>Tailwind</h3>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  allProjet {
    edges {
      node {
        id
        path
        fields{title description image}
      }
    }
  }
}
</page-query>
<style>
.Intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
}

.présentation {
  padding: 1em 1em;
}
.profil {
  border-radius: 5px;
  max-width: 215px;
  padding-bottom: 5vmin;
}
.header {
  display: flex;
  justify-content: space-around;
}

.lead {
  margin-top: 20px;
  font-size: 20px;
  line-height: 2em;
}

#projet {
  padding-bottom: 20px;
  font-size: smaller;
}
.Projet-card {
  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}
.Projet-card :hover {
  text-decoration: none;
}

.card {
  transition: transform 0.5s, filter 1.3s ease-in-out;
  filter: grayscale(100%);
}
.card:hover {
  filter: grayscale(0);
  transform: scale(1.1);
}
.row {
  text-align: center;
}
.row > div > h3:hover {
  transform: scale(1.1);
  color: rgba(255, 57, 57, 0.733);
  transition: transform 0.3s, filter 1s ease-in-out;
}
img {
  max-width: -webkit-fill-available;
}
@media screen and (max-width: 768px) {
  .Titre {
    padding: 5vmin;
  }
  .profil {
    max-width: 150px;
  }
  .header {
    display: flex;
    flex-direction: column;
  }
  .navbar {
    justify-content: space-around !important;
  }
  .container {
    margin: auto;
    max-width: 300px;
    text-align: center;
    padding: initial;
  }

  .Intro {
    text-align: center;
    font-size: smaller;
  }

  #job {
    text-align: end;
    font-size: 26px;
  }
  .présentation {
    font-size: initial;
  }
}
</style>
