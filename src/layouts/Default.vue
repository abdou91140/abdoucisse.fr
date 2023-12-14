<template>
  <div class="layout">
    <div class="lightning"></div>
    <div id="content-wrapper">
      <Header />
      <slot />
      <Footer />
    </div>
  </div>
</template>
<!-- <li class="nav-item">
              <g-link class="nav-link" to="/">Acceuil</g-link>
            </li>
<li class="nav-item">
              <g-link class="nav-link" to="/blog/">Blog</g-link>
            </li>
<li class="nav-item">
              <g-link class="nav-link" to="/Contact/">Contact</g-link>
            </li> -->
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  components: {
    Header,
    Footer
  },
};
</script>
<style>
.page {
  max-width: 720px;
  text-align: center;
}

body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-size: 17px !important;
}

html,
body {
  height: 100%;
}
.container{
  min-height: 85vh;
}

.title-home {
  display: flex;
  justify-content: center;
  text-align: center;
  color: white;
}

.titles {
  padding: 5%;
  display: flex;
  justify-content: center;
  text-align: center;
  color: white;
}

a {
  text-decoration: none !important;

}

.footer {
  position: relative;
}

.background {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #000;
  overflow: hidden
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
};
@media screen and (max-width: 768px) {
  .container {
    margin: auto;
    max-width: 300px;
    text-align: center;
    padding: initial;
    height: inherit;
  }
}
</style>
