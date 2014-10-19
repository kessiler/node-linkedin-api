var oauth = require('oauth');

var baseUrl = 'http://api.linkedin.com/v1';
var requestTokenUrl = 'https://api.linkedin.com/uas/oauth/requestToken';
var accessTokenUrl = 'https://api.linkedin.com/uas/oauth/accessToken';

var LinkedIn = function (options) {
    if (!(this instanceof LinkedIn))
        return new LinkedIn(options);

    this.consumerKey = options.consumerKey;
    this.consumerSecret = options.consumerSecret;
    this.authorizedCallBack = options.callBack;

    this.oauth = new oauth.OAuth(requestTokenUrl, accessTokenUrl, this.consumerKey, this.consumerSecret, '1.0', this.authorizedCallBack, 'HMAC-SHA1');

    return this;
}

LinkedIn.prototype.getAccessToken = function (requestToken, requestTokenSecret, oauth_verifier, callback) {
    this.oauth.getOAuthAccessToken(requestToken, requestTokenSecret, oauth_verifier, function (error, oauthAccessToken, oauthAccessTokenSecret, results) {
        if (error) {
            callback(error);
        } else {
            callback(null, oauthAccessToken, oauthAccessTokenSecret, results);
        }
    });
}

LinkedIn.prototype.getRequestToken = function (callback) {
    this.oauth.getOAuthRequestToken(function (error, oauthToken, oauthTokenSecret, results) {
        if (error) {
            callback(error);
        } else {
            callback(null, oauthToken, oauthTokenSecret, results);
        }
    });
}


module.exports = LinkedIn;