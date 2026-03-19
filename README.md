# Mobile Mechanix (Mock)

A mock mobile mechanic marketplace with a map-centric UI, fake data, and local-only requests. This app is intended for demos only. No in-app payments.

## Features
- Map-centric home screen with search, category chips, and mechanic cards
- Mechanic profiles with portfolio, certifications, and reviews
- Request flow with fake status progression and offline queueing
- Invoice view with client-side PDF download
- English and Spanish toggle
- Express server that serves the built SPA

## Local development

### 1) Install dependencies
```
npm install
```

### 2) Run the frontend (Vite dev server)
```
npm run dev:web
```

### 3) Build and run the production server locally
```
npm run build
npm start
```

The production server runs on http://localhost:8080 by default.

## Environment variables

Create env files as needed:
- web/.env
- server/.env

Example values:
```
VITE_APP_NAME=Mobile Mechanix
VITE_SUPPORT_EMAIL=support@mobilemechanix.local
VITE_DEFAULT_CITY=Dallas, TX
PORT=8080
```

When deploying via GitHub Actions, set the VITE_ variables as repository variables so the build step can read them.

## Azure App Service (Linux, Node.js) deployment

### 1) Create resources (Azure CLI)
```
az login
az group create --name mm-rg --location westus2
az appservice plan create --name mm-plan --resource-group mm-rg --is-linux --sku B1
az webapp create --name <app-name> --resource-group mm-rg --plan mm-plan --runtime "NODE:20-lts"
```

### 2) Configure App Service app settings (optional when building in GitHub Actions)
```
az webapp config appsettings set --name <app-name> --resource-group mm-rg --settings \
  VITE_APP_NAME="Mobile Mechanix" \
  VITE_SUPPORT_EMAIL="support@mobilemechanix.local" \
  VITE_DEFAULT_CITY="Dallas, TX"
```

### 3) GitHub Actions deployment (OIDC recommended)

Set these GitHub Actions secrets:
- AZURE_CLIENT_ID
- AZURE_TENANT_ID
- AZURE_SUBSCRIPTION_ID

Set these GitHub Actions variables:
- AZURE_WEBAPP_NAME
- VITE_APP_NAME
- VITE_SUPPORT_EMAIL
- VITE_DEFAULT_CITY

The workflow runs npm ci, builds the SPA, packages the app into deploy.zip, and deploys via azure/webapps-deploy on push to main. Deployment runs only if the build succeeds.

### 3b) Publish profile alternative

If you prefer publish profile authentication, set this secret instead:
- AZUREAPPSERVICE_PUBLISHPROFILE

Then remove the azure/login step and add publish-profile to the webapps-deploy step.

### 4) Deploy

Push to main and the workflow will build and deploy the app.

## View App Service logs

Azure Portal:
- App Service -> Log stream

Azure CLI:
```
az webapp log config --name <app-name> --resource-group mm-rg --application-logging filesystem --level information --web-server-logging filesystem
az webapp log tail --name <app-name> --resource-group mm-rg
```

## Notes
- The server listens on process.env.PORT, which Azure App Service sets automatically.
- The workflow builds the SPA and copies web/dist into server/public before deployment.
