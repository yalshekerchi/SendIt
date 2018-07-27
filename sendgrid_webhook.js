const localtunnel = require('localtunnel');

localtunnel(5000, { subdomain: 'hxvfbkzdfjzzdf' }, (err, tunnel) => {
  console.log('LT running');
});
