# Mobile Mechanix (Mock)# Mobile Mechanix (Mock)


















































































- The workflow builds the SPA and copies web/dist into server/public before deployment.- The server listens on process.env.PORT, which Azure App Service sets automatically.## NotesPush to main and the workflow will build and deploy the app.### 5) DeployCreate a GitHub repository variable named AZURE_WEBAPP_NAME with your App Service name, or update the value directly in .github/workflows/azure-appservice.yml.### 4) Set the app name for the workflowIn your GitHub repo settings, add a secret named AZUREAPPSERVICE_PUBLISHPROFILE with the contents of publishProfile.xml.```az webapp deployment list-publishing-profiles --name <app-name> --resource-group mm-rg --xml > publishProfile.xml```### 3) Get publish profile and store as a GitHub secret```  VITE_DEFAULT_CITY="Dallas, TX"  VITE_SUPPORT_EMAIL="support@mobilemechanix.local" \  VITE_APP_NAME="Mobile Mechanix" \az webapp config appsettings set --name <app-name> --resource-group mm-rg --settings \```### 2) Configure app settings```az webapp create --name <app-name> --resource-group mm-rg --plan mm-plan --runtime "NODE|20-lts"az appservice plan create --name mm-plan --resource-group mm-rg --is-linux --sku B1az group create --name mm-rg --location westus2az login```### 1) Create resources (Azure CLI)## Azure App Service (Linux, Node.js) deployment```PORT=8080VITE_DEFAULT_CITY=Dallas, TXVITE_SUPPORT_EMAIL=support@mobilemechanix.localVITE_APP_NAME=Mobile Mechanix```Example values:- server/.env- web/.envCreate env files as needed:## Environment variablesThe production server runs on http://localhost:8080 by default.```npm startnpm run build```### 3) Build and run the production server locally```npm run dev:web```### 2) Run the frontend (Vite dev server)```npm install```### 1) Install dependencies## Local development- Express server that serves the built SPA- English and Spanish toggle- Invoice view with client-side PDF download- Request flow with fake status progression and offline queueing- Mechanic profiles with portfolio, certifications, and reviews- Map-centric home screen with search, category chips, and mechanic cards## FeaturesA mock mobile mechanic marketplace with a map-centric UI, fake data, and local-only requests. This app is intended for demos only. No in-app payments.
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
az webapp create --name <app-name> --resource-group mm-rg --plan mm-plan --runtime "NODE|20-lts"
```

### 2) Configure App Service app settings (optional when building in GitHub Actions)
```
az webapp config appsettings set --name <app-name> --resource-group mm-rg --settings \
  VITE_APP_NAME="Mobile Mechanix" \
  VITE_SUPPORT_EMAIL="support@mobilemechanix.local" \
  VITE_DEFAULT_CITY="Dallas, TX"
```

### 3) Set GitHub Actions variables for build-time config

Create repository variables:
- VITE_APP_NAME
- VITE_SUPPORT_EMAIL
- VITE_DEFAULT_CITY
- AZURE_WEBAPP_NAME

### 4) Get publish profile and store as a GitHub secret
```
az webapp deployment list-publishing-profiles --name <app-name> --resource-group mm-rg --xml > publishProfile.xml
```

In your GitHub repo settings, add a secret named AZUREAPPSERVICE_PUBLISHPROFILE with the contents of publishProfile.xml.

### 5) Deploy

Push to main and the workflow will build and deploy the app.

## Notes
- The server listens on process.env.PORT, which Azure App Service sets automatically.
- The workflow builds the SPA and copies web/dist into server/public before deployment.
