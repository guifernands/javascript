exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
};

exports.trataPost = (req, res, next) => {
    res.send(req.body);
    return;
}