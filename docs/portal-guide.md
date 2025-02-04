# Make Bridge Integration Guide

This guide will walk you through the process of integrating Make Bridge into your application using the Bridge Portal. For a custom integration approach using Make API, please refer to our [custom integration documentation](https://developers.make.com/bridge-documentation/api-reference/integrate-bridge).

## Important Resources

Final result demo (fully functional): https://<YOUR_ZONE>.make.com/portal
Full code examples for download: https://<YOUR_ZONE>.make.com/portal/public/portal-integration-examples.zip

## Guide Overview

Make Bridge integration consists of several components across frontend and backend implementations. The frontend components can be embedded into your application to provide a seamless user experience, while the backend components ensure secure communication with Make Bridge:

### Frontend implementation

- [portal-integrations.js](https://eu1.make.com/portal/static/js/portal-integrations.js) - main component that can be included anywhere in your project standalone
- [modal.js](../examples/node/public/js/modal.js) (optional) - optional component wrapping portal-integrations with modal window
- [index.html](../examples/node/public/index.html) (optional) - example code how to incorporate modal.js and portal-integrations.js together

### Backend implementation (recommended for security)

- Make Portal SDK (JS/TS) - recommended integration via Make Portal SDK (Coming soon)
- [index.ts](../examples/node/lib/index.ts) - example custom integration using Node.js and proxy pattern

While it's possible to implement only the frontend code snippets, we strongly recommend using the backend integration for secure communication with Make Bridge to prevent potential misuse by end users.

## Prerequisites

Before you begin, you'll need to setup two things:

- Application - Application Setup Page in Make Bridge Setup & Settings Page
- Secret - Secrets page in Make Bridge Setup & Settings Page

Important Note: The secret needs to be encoded in JWT token that will be used in all communication with Make Bridge. Please refer to the [index.ts](../examples/node/lib/index.ts) example for more details.

### Frontend Implementation

You have two options for implementing the frontend:

- Modal window
- Embedded standalone portal-integration component

### Backend Implementation

The backend implementation is optional but recommended for secure communication with Make Bridge. You can use the provided [index.ts](../examples/node/lib/index.ts) example as a starting point for your integration. Alternatively, you can use the Make Portal SDK (coming soon) for a more streamlined integration process.
