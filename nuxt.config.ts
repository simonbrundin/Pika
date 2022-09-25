// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "nuxt-graphql-client",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-ionic",
  ],
  runtimeConfig: {
    public: {
      "graphql-client": {
        clients: {
          default: {
            host: "https://mooni.hasura.app/v1/graphql",
            token: {
              name: "x-hasura-admin-secret",
              type: null,
            },
            retainToken: true,
          },
        },
      },
    },
  },
});
