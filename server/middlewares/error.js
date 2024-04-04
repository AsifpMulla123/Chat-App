const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode ||= 500;
    return res.status(err.status).json({
        success: false,
        message: err.message,
    });
};
export { errorMiddleware };