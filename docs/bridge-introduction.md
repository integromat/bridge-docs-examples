# Make Bridge: Introduction

Make Bridge is a powerful tool developed by Make that enables seamless integration of automation capabilities into external applications and services. It acts as an abstraction layer between the Make platform and end users, allowing integrators (Make's Bridge customers) to embed Make's automation features into their own products without requiring end users to directly interact with the Make platform.

## Key Features and Uses

- **API Integration Service**: Make Bridge allows integrators to create reusable templates in the Make platform, which can then be instantiated as scenarios for automation workflows. These workflows can connect various apps and services, automating tasks such as data synchronization, notifications, or report generation.
- **No-Code Backend as a Service (BaaS)**: Beyond API integration, Make Bridge functions as a no-code backend solution. Integrators can leverage it to manage workflows, connections, and data processing without the need for extensive backend development. This makes it ideal for SaaS applications looking to offer integrated automation capabilities.
- **End-User Accessibility**: The Bridge simplifies the user experience by embedding a wizard-like interface into the integrator's application. End users can configure and activate automation scenarios without logging into Make, ensuring a smooth and branded experience.
- **Sandboxing and Security**: The service provides flexible sandboxing options (e.g., user-level or team-level), ensuring data segregation and secure access management tailored to the integrator's needs.

## How It Works

1. **Template Creation**: Integrators design templates within the Make platform using its visual editor.
2. **Embedding**: These templates are marked as "instanceable" and embedded into the integrator's product via the Bridge.
3. **Scenario Instantiation**: End users interact with a guided setup flow (wizard) to provide inputs and credentials, creating personalized automation scenarios in the background.

## Benefits

- **Minimal Coding Required**: Integrators can quickly embed automation capabilities with minimal development effort.
- **Scalable Automation**: Supports multiple use cases, from simple task automation to complex workflows across different apps.
- **Customizable Integration**: While offering quick-start options, integrators can also implement advanced customizations using APIs.

Make Bridge is a versatile solution that combines no-code backend functionality with robust API integration capabilities, making it an essential tool for businesses aiming to enhance their applications with powerful automation features.

---

## Two Main Ways to Implement Make Bridge

Integrators can implement Make Bridge in two main ways, depending on the level of customization and security they require:

### 1. Direct API Integration

This method involves directly interacting with the Make API and Bridge Portal API to integrate its functionalities into the integrator's application. It provides maximum flexibility and customization but requires more development effort.

Please refer to the [Make Bridge API Reference](https://developers.make.com/bridge-documentation/api-reference/integrate-bridge) for detailed instructions on using the API for integration.

---

### 2. Portal Integration with Embedded Components

This approach leverages the Make Bridge Portal, which provides pre-built frontend components and backend APIs for easier integration. It is designed for quick implementation with minimal coding.

Please refer to the [Make Bridge Portal Guide](./portal-guide.md) for detailed instructions on using the Portal for integration.
