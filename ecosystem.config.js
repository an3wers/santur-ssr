module.exports = {
  apps: [
    {
      name: 'SanturApp',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
};
