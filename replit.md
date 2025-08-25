# Overview

CouncilHub AI is a modern web application designed to revolutionize Australian local government operations through intelligent automation and resident-centered service delivery. The platform provides councils with AI-powered request management, comprehensive resident interaction tracking, and self-service portals to improve efficiency and resident satisfaction.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built using React with TypeScript, leveraging modern development practices and tools:

- **Framework**: React 18 with TypeScript for type safety and developer experience
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, professional design
- **UI Components**: Comprehensive set of Radix UI primitives wrapped in custom components
- **State Management**: TanStack React Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation for robust form handling
- **Notifications**: Toast system for user feedback

## Backend Architecture
The server-side follows a REST API pattern with modular design:

- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for consistency across the stack
- **Storage Interface**: Abstracted storage layer with in-memory implementation (designed for easy database integration)
- **Validation**: Shared Zod schemas between client and server
- **API Design**: RESTful endpoints with proper error handling and response formatting

## Development Tooling
The project includes comprehensive development and build tools:

- **Build System**: Vite for fast development and optimized production builds
- **Development Server**: Hot module replacement with custom logging middleware
- **TypeScript**: Strict type checking across the entire codebase
- **Path Mapping**: Organized import paths with @ aliases for clean code organization

## Data Layer Design
The application uses a flexible data architecture:

- **Schema Definition**: Centralized Drizzle ORM schemas in shared directory
- **Database**: PostgreSQL configured with Neon serverless database
- **Migrations**: Drizzle Kit for database schema management
- **Type Safety**: Full end-to-end type safety from database to UI

The data model includes:
- Users table for authentication (future implementation)
- Subscriptions table for early access newsletter signups with council information

## Component Architecture
The frontend follows a atomic design pattern:

- **UI Components**: Reusable primitive components in `/components/ui/`
- **Page Components**: Feature-specific components organized by functionality
- **Layout Components**: Navigation, sections, and structural components
- **Custom Hooks**: Shared logic extraction (mobile detection, toast notifications)

## Configuration Management
The application uses environment-based configuration:

- **Database**: Environment variable-based connection string
- **Development**: Replit-specific development tooling integration
- **Build**: Separate client and server build processes

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form for UI framework
- **TypeScript**: Full TypeScript support across client and server
- **Node.js**: Server runtime environment

## Database & Data Management
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database queries and schema management
- **Drizzle Kit**: Database migration and development tools

## UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI primitives for accessibility
- **Lucide React**: Icon library
- **shadcn/ui**: Pre-built component library

## Development & Build Tools
- **Vite**: Fast build tool and development server
- **ESBuild**: Fast TypeScript/JavaScript bundler for production
- **PostCSS**: CSS processing with Tailwind integration

## Validation & Forms
- **Zod**: Schema validation library
- **Hookform Resolvers**: Integration between React Hook Form and Zod

## State Management
- **TanStack React Query**: Server state management and caching
- **Wouter**: Lightweight client-side routing

## Development Environment
- **Replit**: Cloud development environment with custom tooling integration
- **TSX**: TypeScript execution for development server

The architecture is designed for scalability and maintainability, with clear separation of concerns and a foundation that supports future enhancements like real-time features, advanced AI integration, and enterprise-scale deployment.