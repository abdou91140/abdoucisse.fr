<template>
  <div class="layout">
    <div class="lightning"></div>
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

.container {
  padding-top: 10%;
}

.title {
  display: flex;
  justify-content: center;
  text-align: center;
  color: white;
}

.layout {
  min-height: 100%;
  flex: 1 0 auto;
  background-image: url('/Home.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  animation: lightningAnim 25s linear infinite;
}

.footer {
  position: relative;
  padding-top: 28vmin;
}

.background {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #000;
  overflow: hidden;
}

.changing-text {
  display: inline-block;
  position: relative;
  width: 100%;
}

.changing-text span {
  position: absolute;
  left: 0;
  opacity: 1;
  bottom: 0px;
  width: 100%;
}



.changing-text span:nth-child(2) {
  animation: showWord 35s linear infinite 0s;
  opacity: 1;

  /* Start after 35s */
}

.changing-text span:nth-child(3) {
  animation: showWord 70s linear infinite 0s;
  opacity: 1;

  /* Start after 70s */
}

.changing-text span:nth-child(4) {
  animation: showWord 0s linear infinite 0s;
  opacity: 1;

  /* Start after 105s */
}

.changing-text span:nth-child(5) {
  animation: showWord 0s linear infinite 0s;
  opacity: 1;

  /* Start after 140s */
}

.changing-text span:nth-child(6) {
  animation: showWord 0s linear infinite 0s;
  opacity: 1;

  /* Start after 175s */
}

. changing-text span:nth-child(7) {
  animation: showWord 0s linear infinite 0s;
  /* Start after 210s */
} 

@keyframes showWord {

  0%,
  16.666% {
    opacity: 0;
  }

  20%,
  33.333% {
    opacity: 1;
  }

  34.285%,
  100% {
    opacity: 0;
  }
}

@keyframes lightningAnim {

  0%,
  100% {
    opacity: 0;
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    opacity: 1;
  }
}</style>
