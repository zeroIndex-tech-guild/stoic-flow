/**
 * Represents the details of a single error.
 *
 * @example
 * {
 *   code: "REQUIRED_FIELD",
 *   message: "The email field is required",
 *   details: "email"
 * }
 */
export type ErrorDetails = {
  code: string // A unique error code for debugging (e.g., "VALIDATION_ERROR").
  message: string // A user-friendly error message.
  details?: string | Record<string, any> // Optional additional context or data.
}

/**
 * Represents an error response from the server.
 *
 * @example
 * {
 *   statusCode: 400,
 *   message: "Validation failed",
 *   data: null,
 *   errors: [
 *     { code: "REQUIRED_FIELD", message: "The email field is required", details: "email" }
 *   ]
 * }
 */
export type ErrorResponse = {
  statusCode: number // HTTP status code (e.g., 400 for validation error).
  message: string // General error message.
  data: null // Always null for error responses.
  errors: ErrorDetails[] // Array of detailed error objects.
}

/**
 * Represents a successful response from the server.
 *
 * @example
 * {
 *   statusCode: 200,
 *   message: "User fetched successfully",
 *   data: { id: 1, name: "John Doe" },
 *   errors: null
 * }
 */
export type SuccessResponse<T> = {
  statusCode: number // HTTP status code (e.g., 200 for success).
  message: string // A success message.
  data: T // The payload returned by the server.
  error: null // Always null for success responses.
}
