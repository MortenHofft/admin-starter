import base64 from 'base-64'
export const JWT_STORAGE_NAME = 'jwt';

// use sessionstorage for the session, but save in local storage if user choose to be remembered
const jwt = localStorage.getItem(JWT_STORAGE_NAME);
if (jwt) {
  sessionStorage.setItem(JWT_STORAGE_NAME, jwt);
}

export const login = async function(username, password, remember) {
  return fetch(`//api.gbif-dev.org/v1/user/login`, {
    mode: 'cors',
    headers: {
      'Authorization': `Basic ${base64.encode(username + ":" + password)}`
    }
  })
};

export const logout = function() {
  localStorage.removeItem(JWT_STORAGE_NAME);
  sessionStorage.removeItem(JWT_STORAGE_NAME);
};

export const getTokenUser = function() {
  const jwt = sessionStorage.getItem(JWT_STORAGE_NAME);
  if (jwt) {
    var user = JSON.parse(base64.decode(jwt.split('.')[1]));
    // is the token still valid - if not then delete it. This of course is only to ensure the client knows that the token has expired. any authenticated requests would fail anyhow
    if (new Date(user.exp * 1000).toISOString() < new Date().toISOString()) {
      logout()
    }
    return user;
  } else {
    return null
  }
}