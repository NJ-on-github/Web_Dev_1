// The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

function setAuthToken(token){
    
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("expire", Date.now() + 1000 * 60 * 60 * 24);
}