const BASE_URL = 'http://localhost:5000/api';
const AUTH_BASE = `${BASE_URL}/auth`;
const ADMIN_BASE = `${BASE_URL}/admin`;
const USER_BASE = `${BASE_URL}/user`;

export const LOGIN_URL = `${AUTH_BASE}/login`;

export const GET_DEPARTMENTS_URL = `${USER_BASE}/department/all`;
export const GET_DEPARTMENT_URL_PREFIX = `${USER_BASE}/department`;

export const REGISTER_OFFICIAL_URL = `${ADMIN_BASE}/official/create`;
export const ALL_OFFICIALS_URL = `${ADMIN_BASE}/official/all`;

export const NEW_COURSE_URL = `${ADMIN_BASE}/course/create`;
export const ALL_COURSES_URL = `${ADMIN_BASE}/course/all`;
export const EDIT_COURSE_URL = `${ADMIN_BASE}/course/update`;
export const GET_COURSE_URL_PREFIX = `${ADMIN_BASE}/course`;

export const NEW_FACULTY_TO_COURSE_URL = `${ADMIN_BASE}/assign/professor`;
export const EDIT_FACULTY_TO_COURSE_URL = `${ADMIN_BASE}/assign/professor/update`;

export const NEW_DEPARTMENT_URL = `${ADMIN_BASE}/department/create`;
export const EDIT_DEPARTMENT_URL = `${ADMIN_BASE}/department/update`;

export const NEW_STUDENT_URL = `${ADMIN_BASE}/student/create`;
