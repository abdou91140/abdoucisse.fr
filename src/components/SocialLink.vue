<template>
    <a :href="url" class="text-white hover:text-gray-400 transition-all">
      <font-awesome :icon="['fab', icon]" />
    </a>
  </template>
  
  <script>
  export default {
    props: {
      url: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  