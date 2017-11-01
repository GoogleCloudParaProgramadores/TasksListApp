'use strict';

var taskAuthService = ['$state', 'angularAuth0', '$timeout', function($state, angularAuth0, $timeout) {
    function handleAuthentication() {
        angularAuth0.parseHash(function(err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                setSession(authResult);
                $state.go('tasks');
            } else if (err) {
                $timeout(function() {
                    $state.go('home');
                });
                console.log(err);
            }
        });
     }

    function setSession(authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    function login() {
        //login
        angularAuth0.authorize();
    }

    function logout() {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
    }

    function isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    function getToken() {
        return localStorage.getItem('access_token');
    }

    return {
        login: login,
        handleAuthentication: handleAuthentication,
        logout: logout,
        isAuthenticated: isAuthenticated,
        getToken: getToken
    }
}];

module.exports = taskAuthService;
