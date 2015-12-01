var AV = require('leanengine');
AV.Promise.resolve = AV.Promise.as;
AV.Promise.reject = AV.Promise.error;

module.exports = AV;
