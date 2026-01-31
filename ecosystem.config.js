module.exports = {
  apps: [
    {
      name: 'faru-gateway-core',
      cwd: '../faru-gateway-core',
      script: '/Users/jeph/.nvm/versions/node/v16.20.2/bin/node',
      args: 'lib/server.js',
      instances: 1,
      env_production: {
        NODE_ENV: 'production',
        mongo_url: 'mongodb://localhost/faru-mnrt',
        mongo_atnaUrl: 'mongodb://localhost/faru-mnrt'
      },
      autorestart: true,
      watch: false
    },
    {
      name: 'faru-gateway-console',
      cwd: '../faru-gateway-ui',
      script: 'npm',
      args: 'start',
      instances: 1,
      env_production: {
        NODE_ENV: 'production',
        OPENHIM_CONSOLE_PROTOCOL: 'https',
        OPENHIM_CORE_MEDIATOR_HOSTNAME: 'localhost',
        OPENHIM_MEDIATOR_API_PORT: '17070',
        OPENHIM_CONSOLE_SHOW_LOGIN: 'true',
        KC_OPENHIM_SSO_ENABLED: 'false',
        PM2_SERVE_PORT: 9000
      },
      autorestart: true,
      watch: false,
      pre_start: 'npm run build:prod'
    },
    {
      name: 'master-gateway',
      cwd: '../master-gateway',
      script: 'npm',
      args: 'run start:prod',
      instances: 1,
      env_production: {
        NODE_ENV: 'production'
      },
      autorestart: true,
      watch: false,
      pre_start: 'npm run build'
    }
  ]
};

