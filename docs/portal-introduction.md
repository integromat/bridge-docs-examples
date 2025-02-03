# Make Bridge Portal: Introduction

The **Make Bridge Portal** is a modular microservice designed to enhance the functionality of the Make platform by serving as a secure entry point for external applications to interact with Make's ecosystem. It provides a streamlined and secure way for integrators to embed Make's automation capabilities into their own products while maintaining control over user access and context.

## Key Features and Uses

- **Centralized Authentication and Management**: The Portal enables external applications to authenticate against the Make platform using JSON Web Tokens (JWT). This ensures secure communication between integrators' systems and Make, while also managing workspace contexts for end users.
- **Modular Design**: The Portal is built to support multiple use cases beyond just Bridge integration. Its modular architecture allows for future expansion, such as enabling login-less experiences or integrating additional services.
- **Bridge Module**: The initial module within the Portal focuses on supporting the Make Bridge. It provides functionalities such as:
  - Retrieving and managing instanceable templates.
  - Managing scenarios (e.g., enabling, disabling, or deleting them).
  - Starting new automation flows based on templates in specific workspace contexts.
- **Frontend and Backend Integration**: The Portal offers both frontend components (e.g., widgets) for embedding into applications and backend APIs for secure communication. This flexibility allows integrators to choose the approach that best suits their needs.

## Benefits

- **Ease of Integration**: The Portal simplifies embedding Make's automation capabilities by offering pre-built components and APIs.
- **Security**: With JWT-based authentication, CSRF protection, and session management, it ensures robust security for all interactions.
- **Scalability**: Its modular design supports diverse use cases, making it adaptable for future enhancements.

## How It Works

1. Integrators register their application in the Portal and configure authentication using secrets.
2. The Portal acts as a proxy between integrators’ systems and Make, ensuring secure data exchange.
3. End users interact with embedded components (e.g., the Bridge widget) to configure automation workflows without directly accessing the Make platform.
