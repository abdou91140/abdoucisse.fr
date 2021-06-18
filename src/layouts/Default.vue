<template>
  <div class="layout">
    <div id="content-wrapper">
      <Header />
      <slot />
      <article class="container-fluid row justify-content-center footer">
        <div>
          <a class="nav-link" href="https://github.com/abdou91140">
            <font-awesome :icon="['fab', 'github']" />
          </a>
        </div>
        <div>
          <a class="nav-link" href="https://twitter.com/cissabdou7">
            <font-awesome :icon="['fab', 'twitter']" />
          </a>
        </div>
        <div>
          <a class="nav-link" href="https://www.linkedin.com/in/cisse1982/">
            <font-awesome :icon="['fab', 'linkedin']" />
          </a>
        </div>
      </article>
    </div>
  </div>
</template>
<li class="nav-item">
              <g-link class="nav-link" to="/">Acceuil</g-link>
            </li>
<li class="nav-item">
              <g-link class="nav-link" to="/blog/">Blog</g-link>
            </li>
<li class="nav-item">
              <g-link class="nav-link" to="/Contact/">Contact</g-link>
            </li>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import Header from "../components/Header";
export default {
  components: {
    Header,
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
.layout {
  min-height: 100%;
  flex: 1 0 auto;
}

.container {
  padding-top: 20px;
  margin-bottom: 30px;
  margin-top: 30px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
}

.footer {
  position: relative;
  padding-top: 28vmin;
}
</style>
