<template>
  <div class="layout">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <g-link class="navbar-brand" to="/">{{
        $static.metadata.siteName
      }}</g-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav ">
          <li class="nav-item">
            <g-link class="nav-link" to="/">Acceuil</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav-link" to="/blog/">Blog</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav-link" to="/Contact/">Contact</g-link>
          </li>
        </ul>
      </div>
    </nav>
    <slot />
    <article class="container-fluid row justify-content-center footer">
      <div>
        <a class="nav-link" href="https://github.com/abdou91140">
          <font-awesome :icon="['fab', 'github']" />
        </a>
      </div>
      <div>
        <a class="nav-link" href="https://github.com/abdou91140">
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
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

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
  display: flex;
  flex-direction: column;
}
html,
body {
  height: 100%;
}
.layout {
  min-height: 100%;
  flex: 1 0 auto;
}
.navbar-brand {
  font-size: inherit !important;
  padding-bottom: 55px;
}
.container {
  padding-top: 20px;
  margin-bottom: 30px;
  margin-top: 30px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
}
.nav-link {
  margin-left: 20px;
  text-decoration: none !important;
}
.footer {
  position: relative;
  padding-top: 28vmin;
}
</style>
