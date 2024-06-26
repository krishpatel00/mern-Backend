import { Error } from "mongoose";

class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    // (this.statuscode = statusCode),
    this.status = statusCode;
    this.message = message;
    this.errors = errors;
    this.data = null;
    this.success = false;
    // (this.data = null),
    // (this.message = message),
    // (this.success = false),
    // (this.error = errors);
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
