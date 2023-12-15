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
        path: "blog/**/*.md",
        typeName: "BlogPost",
        remark: {
          //Config options can be added here
        },
      },
    },
  ],
  transformers: {
    remark: {
      //Config options can be added here
    },
  },
  templates: {
    BlogPost: "/blog/:title",
  },
  icon: "./src//assets/images/profil.jpg",
};
