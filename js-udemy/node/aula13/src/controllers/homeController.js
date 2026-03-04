exports.paginaInicial = (req, res) => {
    res.render('index');
};

exports.trataPost = (req, res, next) => {
    res.send(req.body);
}