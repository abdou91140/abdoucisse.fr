<template>
  <Layout>
    <div class="container contact-form">
      <div class="titles display-5">
        Contact
      </div>
      <form action="https://formspree.io/f/mgerojqg" method="POST">
        <fieldset class="form-group">
          <div class="form-group">
            <label for="InputEmail1" class="form-label">Votre mail</label>
            <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp"
              placeholder="example@mail.fr" name="_replyto" />
          </div>
          <div class="form-group">
            <label for="Textarea" class="form-label">Votre message</label>
            <textarea class="form-control" id="Textarea" rows="3" name="message"></textarea>
          </div>

          <button class="btn btn-lg btn-outline-info" type="submit">
            Envoie
          </button>
        </fieldset>
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

</style>
