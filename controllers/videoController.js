export const home = (req, res) => {
  res.render("home", { locals: { title: "Home" } });
};
