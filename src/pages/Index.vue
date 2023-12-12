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
    </div>
  </Layout>
</template>


<style>
.title-home {
  display: flex;
  justify-content: center;
  align-items: start;
  height: 65vh;
  padding-top: 10%;
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
  .title {
    padding: 5vmin;
  }

hr{
  height: 2px;
}
  .profil {
    max-width: 150px;
  }

}</style>
