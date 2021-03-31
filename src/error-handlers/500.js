module.exports = (err,req, res,next) => {
    res.status(500)
    res.statusMessage='Server Error :((';
    res.json({
        message: err.message,
        route: req.path,
    });
  };