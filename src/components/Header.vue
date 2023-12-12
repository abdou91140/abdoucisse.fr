<template>
  <header>
    <div class="header">
      <b-navbar class="navbar navbar-expand-lg container-fluid" data-bs-theme="dark" toggleable="lg" type="dark">
        <b-navbar-brand>
          <g-link class="home" to="/">
            <g-image class="logo-nom  d-inline-block align-top" src="~/assets/images/logo-nom.png" />
          </g-link>
        </b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <g-link class="nav-link" to="/">Accueil</g-link>
            <g-link class="nav-link" to="/projects">Projets</g-link>
            <g-link class="nav-link" to="/blog">Blog</g-link>
            <g-link class="nav-link" to="/contact">Contact</g-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
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
/* Adjustments for the logo */
.logo-nom {
  width: 100px; height: 75px; object-fit: contain;

}

.nav-link,
.home {
  margin-left: 20px;
  text-decoration: none !important;
}

/* Media query for smaller screens */
@media screen and (max-width: 768px) {
  .navbar-nav>.nav-link {
    border-bottom: 0.5px solid white;
    width: 60px;
  }
.logo-nom{
  transform: scale(0.5);
}
}
</style>
