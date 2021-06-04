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
    <div class="row">
      <div class="container ">
        <h2 class="Titre">Les Languages</h2>
        <hr class="my-4" />
        <div class="row p-5">
          <h3 class="mx-auto ">PHP</h3>
          <h3 class="mx-auto ">JavaScript</h3>
          <h3 class="mx-auto ">HTML</h3>
          <h3 class="mx-auto ">CSS</h3>
          <h3 class="mx-auto ">Mysql</h3>
        </div>
      </div>
      <div class="container">
        <h2 class="Titre">Les frameworks</h2>
        <hr class="my-4" />
        <div class="row p-5">
          <h3 class="mx-auto ">React.js</h3>
          <h3 class="mx-auto ">Vue.js</h3>
          <h3 class="mx-auto ">Symfony</h3>
          <h3 class="mx-auto ">Jquery</h3>
          <h3 class="mx-auto ">Gridsome</h3>
          <h3 class="mx-auto ">Next.js</h3>
          <h3 class="mx-auto ">Bootstrap</h3>
          <h3 class="mx-auto ">Tailwind</h3>
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
.card:hover,
h3:hover {
  filter: grayscale(0);
  transform: scale(1.1);
}
.technos > div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  transform: scale(0.8);
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
  .technos > div {
    flex-direction: row;
    flex-wrap: wrap;
  }
  svg {
    transform: scale(0.4);
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
