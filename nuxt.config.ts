import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["nuxt-graphql-client"],
  runtimeConfig: {
    public: {
      "graphql-client": {
        clients: {
          default: {
            host: "https://mooni.hasura.app/v1/graphql", // overwritten by process.env.GQL_SHOPIFY_HOST
            token: {
              name: "x-hasura-admin-secret/x-hasura-access-key", // overwritten by process.env.GQL_SHOPIFY_TOKEN_NAME
            },
          },
        },
      },
    },
  },
});
