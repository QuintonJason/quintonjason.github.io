var SpotifyWebApi = require("spotify-web-api-node");

/**
 * This example refreshes an access token. Refreshing access tokens is only possible access tokens received using the
 * Authorization Code flow, documented here: https://developer.spotify.com/spotify-web-api/authorization-guide/#authorization_code_flow
 */

 /* Retrieve a code as documented here:
 * https://developer.spotify.com/spotify-web-api/authorization-guide/#authorization_code_flow
 *
 * Codes are given for a set of scopes. For this example, the scopes are user-read-private and user-read-email.
 * Scopes are documented here:
 * https://developer.spotify.com/spotify-web-api/using-scopes/
 */
var authorizationCode = 'user-read-currently-playing';

/**
 * Set the credentials given on Spotify's My Applications page.
 * https://developer.spotify.com/my-applications
 */
var spotifyApi = new SpotifyWebApi({
  clientId : '8271cc060a3e4dd791bb03df64f32164',
  clientSecret : '0ff2f29c740a444c9c91fc38775c62b6',
  redirectUri : 'http://quintonjason.com/callback/'
});

// When our access token will expire
var tokenExpirationEpoch;

// First retrieve an access token
spotifyApi.authorizationCodeGrant(authorizationCode)
  .then(function(data) {

    // Set the access token and refresh token
    spotifyApi.setAccessToken(data.body['access_token']);
    spotifyApi.setRefreshToken(data.body['refresh_token']);

    // Save the amount of seconds until the access token expired
    tokenExpirationEpoch = (new Date().getTime() / 1000) + data.body['expires_in'];
    console.log('Retrieved token. It expires in ' + Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) + ' seconds!');
  }, function(err) {
    console.log('Something went wrong when retrieving the access token!', err.message);
  });

// Continually print out the time left until the token expires..
var numberOfTimesUpdated = 0;

setInterval(function() {
  console.log('Time left: ' + Math.floor((tokenExpirationEpoch - new Date().getTime() / 1000)) + ' seconds left!');

  // OK, we need to refresh the token. Stop printing and refresh.
  if (++numberOfTimesUpdated > 5) {
    clearInterval(this);

    // Refresh token and print the new time to expiration.
    spotifyApi.refreshAccessToken()
      .then(function(data) {
        tokenExpirationEpoch = (new Date().getTime() / 1000) + data.body['expires_in'];
        console.log('Refreshed token. It now expires in ' + Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) + ' seconds!');
      }, function(err) {
        console.log('Could not refresh the token!', err.message);
      });
  }
}, 1000);