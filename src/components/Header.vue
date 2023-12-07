<template>
  <header >
    <div class="header">
    <b-navbar class="p-1" toggleable="md" type="dark">
      <b-navbar-brand>
       <!-- <g-link class="home" to="/">{{ $static.metadata.siteName }}</g-link> --> 
      </b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <g-link class="nav-link" to="/">Acceuil</g-link>
          <g-link class="nav-link" to="/projects">Projets</g-link>
          <g-link class="nav-link" to="/blog">Blog</g-link>
          <g-link class="nav-link" to="/contact">Contact</g-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar></div>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
nav {
  width: 100%;
  padding: 1rem;
  border-style: none !important;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: white;
}

.nav-link,
.home {
  margin-left: 20px;
  text-decoration: none !important;

}

.logo-image {
  width: 40px;
}

.nav--link {
  margin-left: 20px;
  @media (max-width: 419px) {
    margin: 0;
    padding: 15px 10px 10px 0;
  }
}
</style>
