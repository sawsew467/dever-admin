const prefixAuth: string = "/core";
const prefixBase: string = "/api/v1";
const prefixOther: string = "/api/core";

const prefixApiAuth: string = `/api/core`;

const endpointAuth = {
  SIGN_IN: `${prefixBase}/auth/login/`,
  VERIFY_TOKEN: `${prefixBase}/verifyToken`,
};

const endpointUsersManagement = {
  GET_ALL_USERS: `${prefixBase}/user-managements/`,
};
const endpointDepartmentManagement = {
  GET_ALL_DEPARTMENTS: `${prefixBase}/department/`,
  DEPARTMENT: `${prefixBase}/department/`,
  DELETE_DEPARTMENT: `${prefixBase}/department/{id}`,
  GET_DEPARTMENT_BY_ID: `${prefixBase}/department/{id}`,
  EDIT_DEPARTMENT_BY_ID: `${prefixBase}/department/{id}`,
};

const endpointOther = {};

export {
  endpointAuth,
  endpointUsersManagement,
  endpointDepartmentManagement,
  endpointOther,
};
