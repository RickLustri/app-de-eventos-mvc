function protegerRotaUsuario(request, response, next) {
  if (request.session.user) {
    next();
  } else {
    response.redirect("/login");
  }
};


function protegerRotaAdmin(request, response, next) {
  if (request.session.user && request.session.user.cargo === "admin") {
    next();
  } else {
    response.redirect("/eventos");
  }
};


module.exports = { 
  protegerRotaUsuario,
  protegerRotaAdmin
};