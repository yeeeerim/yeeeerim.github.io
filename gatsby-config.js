module.exports = {
  plugins: [
    "gatsby-plugin-cname",
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://yrim.me/", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/favicon-dino.png", // Path is relative to the root
          siteName: "About Yerim", // Used in manifest.json
          shortName: "About Yerim", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/diarys", // Defines the slug for the blog listing page
          usePathPrefixForArticles: true, // Default true (i.e. path will be /blog/first-article)
        },
        // googleAnalytics: {
        //     trackingId: "UA-XXXXXX-X",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // }
      },
    },
  ],
};
