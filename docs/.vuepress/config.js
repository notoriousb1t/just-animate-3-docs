module.exports = {
  title: "Just Animate 3",
  description: "Making Animation Simple",
  base: "/just-animate-3-docs/",
  ga: "UA-6412794-8",
  head: [
    ["meta", {
      name: "keywords",
      content: "just-animate just-animate.js text animation css variables custom properties"
    }],
    ["meta", {
      property: "og:title",
      content: "Just Animate"
    }],
    ["meta", {
      property: "og:type",
      content: "article"
    }],
    ["meta", {
      property: "og:url",
      content: "https://just-animate.com"
    }],
    ["link", {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Kanit:600,900i|Raleway:400,500,700"
    }], 
  ],
  themeConfig: {
    nav: [
    {
      text: "Guides",
      items: [
        {
          text: "Getting Started",
          link: "/guides/getting-started.md"
        }
      ]
    },
    {
      text: "API",
      items: [
        {
          text: "Eases",
          link: "/api/eases.md"
        }, 
        {
          text: "Delays and Staggers",
          link: "/api/delays.md"
        },
      ]
    }],
    // Assumes GitHub. Can also be a full GitLab url.
    repo: "just-animate/just-animate/",
    repoLabel: "View on GitHub",
    docsBranch: "docs",
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Help us improve this page!"
  }
};
