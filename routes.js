// Global Routes
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// User Routes
const USERS = "/users";
const EDIT_PROFILE = "/:id/edit-profile";
const CHANGE_PASSWORD = "/:id/change-password";

// Video Routes
const VIDEOS = "/videos";
const UPLOAD = "/upload";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: (id) => `/users/${id}`,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: (id) => `/videos/${id}`,
  editVideo: (id) => `/videos/${id}/edit`,
  deleteVideo: (id) => `/videos/${id}/delete`,
};

export default routes;
