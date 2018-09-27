const nconf = require('nconf');

module.exports = {
    func: () => {
        console.log(nconf.get('NODE_ENV'));
    }
}