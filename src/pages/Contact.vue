<template>
  <Layout>
    <div class="container contact-form">
      <form action="https://formspree.io/f/mgerojqg" method="POST">
        <div class="form-group">
          <div class="form-group">
            <label for="InputEmail1" class="form-label mt-4">Votre mail</label>
            <input
              type="email"
              class="form-control"
              id="InputEmail1"
              aria-describedby="emailHelp"
              placeholder="example@mail.fr"
              name="_replyto"
            />
          </div>
          <div class="form-group">
            <label for="Textarea" class="form-label mt-4">Votre message</label>
            <textarea
              class="form-control"
              id="Textarea"
              rows="3"
              name="message"
            ></textarea>
          </div>
          <!-- your other form fields go here -->

          <button class="btn btn-lg btn-outline-primary" type="submit">
            Envoie
          </button>
        </div>
      </form>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact",
  },
};
</script>
<style>
label {
  font-size: large;
}
.contact-form {
  padding: 4em;
}
</style>
