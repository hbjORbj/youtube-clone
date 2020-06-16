export const home = (req, res) => {
  res.render("home", { locals: { title: "Home" } });
};

export const search = (req, res) => {};

export const getUpload = (req, res) => {
  res.render("upload", { locals: { title: "Upload" } });
};
export const postUpload = (req, res) => {};

export const videoDetail = (req, res) => {};

export const getEditVideo = (req, res) => {};
export const postEditVideo = (req, res) => {};
export const deleteVideo = (req, res) => {};
