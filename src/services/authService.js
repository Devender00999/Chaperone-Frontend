import jwtDecode from "jwt-decode";
import http from "./httpService";

import config from "../config";

const apiEndPoint = config.apiUrl + "/users/auth";
console.log(apiEndPoint, config.apiUrl);
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
   const { data } = await http.post(apiEndPoint, { email, password });
   localStorage.setItem(tokenKey, data.token);
}

export function loginWithJwt(jwt) {
   localStorage.setItem(tokenKey, jwt);
}

export function getJwt() {
   const token = localStorage.getItem(tokenKey);
   if (token) return token;
   return "";
}

export function logout() {
   localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
   try {
      const jwt = localStorage.getItem(tokenKey);
      return jwtDecode(jwt);
   } catch (ex) {
      return null;
   }
}

const auth = {
   login,
   loginWithJwt,
   logout,
   getCurrentUser,
   getJwt,
};

export default auth;
