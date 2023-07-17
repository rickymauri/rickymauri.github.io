const { logger } = require('../config/loggerConfig');
const NO_CONTENT = 204;
const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const NOT_FOUND = 404;
const CONFLICT = 409;
const UNPROCESSABLE_ENTITY = 422;
const INTERNAL_SERVER_ERROR = 500;

const GENERIC_ERROR = "generic_error";
const FORM_NOT_FOUND = "form_not_found";
const INVALID_FORMCODE = "invalid_formcode";
const INVALID_FORMID = "invalid_formid";
const INVALID_TEACHERID = "invalid_teacherid";
const INVALID_STUDENTID = "invalid_studentid";
const INVALID_USERNAME = "invalid_username";
const INVALID_CREDENTIALS = "invalid_credentials";
const USERNAME_ALREADY_IN_USE = "username_already_in_use";
const FEEDBACK_ALREADY_EXISTS = "feedback_already_exists";
const FORM_IS_CLOSED = "form_is_closed";
const DB_ERROR = "db_error";
const ROOM_NOT_EMPTY = "room_not_empty";
const ROOM_NOT_FOUND = "room_not_found";


/**
 * @class EvoliError
 * @classdesc custom error class that adds code and status
 * @extends Error
 */
class EvoliError extends Error {
    constructor(status, code, message, printStack = true) {
      super(message);
      Error.captureStackTrace(this, this.constructor);
  
      this.name = this.name;
      /**
       * @property status - the status of the error
       */
      this.status = status;
      /**
       * @property code - the custom error code
       */
      this.code = code;
      /**
       * @property printStack - if true, the stack trace will be printed
       * @default true
       * @type {boolean}
       */
      this.printStack = printStack;
    }
  }

  class Errors {

    static formNotFound() {
        return new EvoliError(NOT_FOUND, FORM_NOT_FOUND, "Form not found");
    }

    static invalidFormCode() {
        return new EvoliError(BAD_REQUEST, INVALID_FORMCODE, "Invalid form code");
    }

    static invalidFormId() {
        return new EvoliError(BAD_REQUEST, INVALID_FORMID, "Invalid form id");
    }

    static invalidTeacherId() {
        return new EvoliError(BAD_REQUEST, INVALID_TEACHERID, "Invalid teacher id");
    }

    static invalidStudentId() {
        return new EvoliError(BAD_REQUEST, INVALID_STUDENTID, "Invalid student id");
    }

    static invalidUsername() {
        return new EvoliError(BAD_REQUEST, INVALID_USERNAME, "Invalid username");
    }

    static invalidCredentials() {
        return new EvoliError(BAD_REQUEST, INVALID_CREDENTIALS, "Invalid credentials", false);
    }
    
    static dbError() {
        return new EvoliError(INTERNAL_SERVER_ERROR, DB_ERROR, "Database error");
    }

    static usernameAlreadyInUse() {
        return new EvoliError(CONFLICT, USERNAME_ALREADY_IN_USE, "Username already in use");
    }

    static feedbackAlreadyExists() {
        return new EvoliError(CONFLICT, FEEDBACK_ALREADY_EXISTS, "Form already exists");
    }

    static formIsClosed() {
        return new EvoliError(BAD_REQUEST, FORM_IS_CLOSED, "Form is closed");
    }

    static roomNotEmpty() {
        return new EvoliError(CONFLICT, ROOM_NOT_EMPTY, "The room is not empty");
    }

    static roomNotFound() {
        return new EvoliError(NOT_FOUND, ROOM_NOT_FOUND, "The room does not exist");
    }

    static async genericError() {
        return new EvoliError(INTERNAL_SERVER_ERROR, GENERIC_ERROR, "An error occurred");
    }

    static printError(err) {
        console.log(err);
        logger.error(`[${err.status ?? 500}] - ${err.code}`);
        logger.error(err);
        if (err.printStack) logger.error(err.stack);
    }

  }

module.exports = {Errors, EvoliError};