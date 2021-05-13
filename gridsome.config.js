// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Abdoulaye Cissé | Développeur web",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projets/**/*.md",
        typeName: "Projet",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "BlogPost",
        path: "blog/**/*.md",
      },
    },
  ],
  templates: {
    BlogPost: "/blog/:title",
  },
  icon: "./src/icon.jpg",
<<<<<<< HEAD
  transformers: {},
=======
  transformers: {

  },
>>>>>>> 97e8a4a87b45458aa4518112db24775981f8dbb0
};
