export default defineNuxtPlugin({
  name: 'fetch',
  parallel: true,
  setup() {
    const appFetch = $fetch.create({
      baseURL: `http://localhost:3001/`,
      onRequest({ options }) {
        options.headers.append('Content-Type', 'application/json');
      },
    });
    return {
      provide: {
        appFetch,
      },
    };
  },
});
