# CouncilHub AI Landing Page

A modern responsive landing page for CouncilHub AI platform targeting Australian local government councils.

## Features

- Modern React frontend with TypeScript
- Express.js backend API
- Responsive design with Tailwind CSS
- Form handling with validation
- In-memory data storage (easily replaceable with database)

## Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd councilhub-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env
   # Edit .env if needed
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5000`

## Production Deployment

### Build for Production

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

### Deployment Options

#### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Heroku
```bash
# Create Heroku app
heroku create your-app-name

# Deploy
git push heroku main
```

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]
```

#### Netlify
The project includes a `netlify.toml` configuration file. Simply:

1. Connect your repository to Netlify
2. Netlify will automatically detect the configuration
3. Deploy!

**Manual Configuration (if needed):**
- Build command: `npm install && npm run build`
- Publish directory: `dist/public`

#### Other Static Hosting
For other static hosts, build and deploy the `dist/public` folder:
```bash
npm run build
# Deploy the dist/public folder
```

## Project Structure

```
├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── pages/        # Page components
│   │   └── lib/          # Utilities
├── server/               # Express backend
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data storage
├── shared/               # Shared types and schemas
└── package.json
```

## Environment Variables

- `NODE_ENV`: Set to "production" for production builds
- `PORT`: Server port (default: 5000)
- `DATABASE_URL`: Database connection (when upgrading from in-memory storage)

## Database Integration

Currently uses in-memory storage. To integrate a real database:

1. Update `server/storage.ts` to use your preferred database
2. Add database connection string to environment variables
3. Run migrations if needed

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type checking

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: Express.js, TypeScript, Zod validation
- **UI Components**: Radix UI, shadcn/ui
- **Forms**: React Hook Form with Zod validation
- **State**: TanStack Query for server state

## Support

For deployment issues or questions, contact hello@councilhub.ai