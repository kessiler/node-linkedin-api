
var oauth = require('oauth');

var baseUrl = 'http://api.linkedin.com/v1';
var requestTokenUrl = 'https://api.linkedin.com/uas/oauth/requestToken';
var accessTokenUrl = 'https://api.linkedin.com/uas/oauth/accessToken';

var LinkedIn = function(options) {
	if (!(this instanceof LinkedIn))
		return new LinkedIn(options);

	this.consumerKey = options.consumerKey;
	this.consumerSecret = options.consumerSecret;
	this.callBack = options.callBack;

	this.oauth = new oauth.OAuth(requestTokenUrl, accessTokenUrl, this.consumerKey, this.consumerSecret, '1.0A', this.callBack, 'HMAC-SHA1');

	return this;
}