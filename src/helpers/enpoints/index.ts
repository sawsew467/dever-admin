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
const endpointScheduleManagement = {};

const endpointOther = {};

export {
  endpointAuth,
  endpointUsersManagement,
  endpointScheduleManagement,
  endpointOther,
};
