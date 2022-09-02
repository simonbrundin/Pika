import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["nuxt-graphql-client", "@pinia/nuxt", "@nuxtjs/tailwindcss"],
  // buildModules: ["@pinia/nuxt"],
  runtimeConfig: {
    public: {
      "graphql-client": {
        clients: {
          default: {
            host: "https://mooni.hasura.app/v1/graphql",
            token: {
              name: "x-hasura-admin-secret",
              value:
                "U8YIwQpWtyqjZzyDhBznAKMPfr4K9NO8jCYkvxfa7XgGqM8E5UTahKFFprog9WqD",
              type: null,
            },
            retainToken: true,
          },
        },
      },
    },
  },
});
