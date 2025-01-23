const express = require('express');
const app = express();

// Map of HTTP status codes and their descriptions
const statusDescriptions = {
  200: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
  201: "Created: The request has been fulfilled and resulted in a new resource being created.",
  204: "No Content: The server successfully processed the request, but is not returning any content.",
  400: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).",
  401: "Unauthorized: Authentication is required to access the requested resource.",
  403: "Forbidden: The server understands the request, but refuses to authorize it.",
  404: "Not Found: The server has not found anything matching the request URI.",
  405: "Method Not Allowed: The HTTP method is not allowed for the requested resource.",
  429: "Too Many Requests: The user has sent too many requests in a given amount of time.",
  500: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
  502: "Bad Gateway: The server received an invalid response from the upstream server.",
  503: "Service Unavailable: The server is currently unable to handle the request due to temporary overload or maintenance.",
  504: "Gateway Timeout: The server did not receive a timely response from the upstream server."
};

// GET endpoint to return status code information
app.get('/status-info', (req, res) => {
  const code = parseInt(req.query.code); // Parse the query parameter

  // Check if the status code exists in our map
  if (statusDescriptions[code]) {
    res.status(200).json({
      status: code,
      message: statusDescriptions[code],
    });
  } else {
    // Return error response for invalid or unsupported status codes
    res.status(400).json({
      error: "Invalid status code. Please provide a valid HTTP status code from the supported list.",
    });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Status Code API is running on http://localhost:${PORT}`);
});
