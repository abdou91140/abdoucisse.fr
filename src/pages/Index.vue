<template>
  <Layout>
    <div class="container">
      <div class="title">
        <div>
          <h1 class="display-2">Abdoulaye </h1><b></b>
          <h1 class="display-3">Cissé</h1>
          <h2>
            Développeur
            <div class="changing-text">
              <span class="font-weight-bolder">Web</span>
             <!--  <span>Front-end</span>
              <span>Back-end</span>
              <span>PHP</span>
              <span>Javascript</span>
              <span>Awesome</span> -->
            </div>
          </h2>
        </div>
      </div>

    </div>
  </Layout>
</template>


<style>
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


.row {
  text-align: center;
}

.row>div>h3:hover {
  transform: scale(1.1);
  color: #75b4dd;
  transition: transform 0.3s, filter 0.3s ease-in-out;
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
}</style>
