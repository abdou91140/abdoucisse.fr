<template>
  <Layout>
    <div class="container">
      <div class="title-home">
        <div>
          <div class="display-3">Abdoulaye Cissé</div>
          <hr />
          <div class="display-5">
            Développeur Web
          </div>
        </div>
      </div>
      <div class="lead">Je suis un développeur avec quelques années d'expérience, après avoir changé de carrière. Je me suis tournée vers
        le dev
        fullstack, en particulier avec <span><strong>Php</strong></span> (Symfony) et <strong>Javascript</strong> (React.js,Vue.js). J'utilise aussi d'autres techno, alors
        n'hésitez pas à m'envoyer un message ou un mail sur les pages dédiées. A bientôt !</div>
    </div>
    <div>
    </div>
  </Layout>
</template>


<style>
.title-home {
  display: flex;
  justify-content: center;
  align-items: end;
  margin: 10% 0 5% 0;
}
.lead{
  text-align:justify;
  margin: 0 10% 0 10%;
}

hr {
  height: 4px;
  background-color: black;
  border: none;
  border-radius: 51%;
}



.header {
  display: flex;
  justify-content: space-around;
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
  .title-home {
    padding-top: 5rem;
  }

  .display-3 {
    font-size: 3.5rem;
  }

  hr {
    height: 2px;
  }

  .profil {
    max-width: 150px;
  }

}</style>
