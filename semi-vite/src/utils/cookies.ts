import config from "../config";

export const setToken = (token: string) => localStorage.setItem(config.TOKEN_KEY, token);

export const getToken: () => string = () => localStorage.getItem(config.TOKEN_KEY) || '';

export const removeToken = () => localStorage.removeItem(config.TOKEN_KEY);