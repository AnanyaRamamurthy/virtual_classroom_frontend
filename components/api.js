const BASE_URL = 'http://localhost:5000/api';
const AUTH_BASE = `${BASE_URL}/auth`;
const ADMIN_BASE = `${BASE_URL}/admin`;
const USER_BASE = `${BASE_URL}/user`;

export const LOGIN_URL = `${AUTH_BASE}/login`;

export const GET_DEPARTMENTS_URL = `${USER_BASE}/department/all`;
