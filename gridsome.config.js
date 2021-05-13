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
  transformers: {
    remark: {
      plugins: ["remark-attr"],
    },
  },
};
