export const getJoin = (req, res) => {
  res.render("join", { locals: { title: "Join" } });
};
export const postJoin = (req, res) => {};

export const getLogin = (req, res) => {
  res.render("login", { locals: { title: "Log In" } });
};
export const postLogin = (req, res) => {};

export const logout = (req, res) => {};

export const userDetail = (req, res) => {};
export const editProfile = (req, res) => {};
export const changePassword = (req, res) => {};
