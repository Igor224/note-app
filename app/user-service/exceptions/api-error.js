module.exports = class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedError() {
        return new ApiError(401, 'User unauthorized to access requested resource')
    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors);
    }

    static AuthError(message, errors = []) {
        return new ApiError(535, 'Username and Password not accepted');
    }
}