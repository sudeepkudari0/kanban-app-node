module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      key: 'nodeServer.pem',
      user : 'ubuntu',
      host : '65.2.78.89',
      ref  : 'origin/main',
      repo : 'git@github.com:sudeepkudari0/kanban-app-node.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source/frontend ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
