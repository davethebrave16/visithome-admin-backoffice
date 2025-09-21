# Deployment Guide

This document explains how the automated deployment system works for the VisitHome Admin Backoffice.

## Workflow Overview

The project uses GitHub Actions for automated build and deployment with three workflows:

### Build Check
- **Trigger**: Pull requests to `master` and `develop` branches
- **Workflow**: `.github/workflows/build.yml`
- **Purpose**: Verify the app builds successfully before merging

### Staging Environment
- **Trigger**: Push to `develop` branch
- **Workflow**: `.github/workflows/deploy-staging.yml`
- **Environment**: `staging`
- **Purpose**: Test new features before production

### Production Environment
- **Trigger**: Push to `master` branch
- **Workflow**: `.github/workflows/deploy-production.yml`
- **Environment**: `production`
- **Purpose**: Live production deployment

## Required GitHub Secrets

To enable automated deployment, you need to configure these secrets in your GitHub repository:

### Firebase Configuration Secrets
- `FIREBASE_PROJECT_ID`: Your Firebase project ID
- `FIREBASE_API_KEY`: Your Firebase API key
- `FIREBASE_AUTH_DOMAIN`: Your Firebase auth domain
- `FIREBASE_STORAGE_BUCKET`: Your Firebase storage bucket
- `FIREBASE_MESSAGING_SENDER_ID`: Your Firebase messaging sender ID
- `FIREBASE_APP_ID`: Your Firebase app ID

### Deployment Secrets
- `FIREBASE_TOKEN`: Firebase CI token for deployment authentication
- `FIREBASE_HOSTING_ID`: Your Firebase hosting site ID

### Application Secrets
- `AUTH_ACCOUNTS`: Comma-separated list of authorized email addresses

### Getting Firebase Configuration
All Firebase configuration values can be found in:
Firebase Console → Project Settings → General → Your apps → Web app config

### Getting Firebase Hosting ID
1. Go to Firebase Console → Hosting
2. Find your hosting site
3. The site ID is shown in the hosting dashboard (usually your project ID or a custom name)

**Security Note**: The hosting ID is used in the deployment command `--only hosting:SITE_ID` and is stored as a GitHub secret. Never hardcode this value in configuration files like `.firebaserc` as it would expose sensitive information in the repository.

### Getting Firebase CI Token
```bash
firebase login:ci
```

## Setup Instructions

1. **Fork or clone this repository**
2. **Go to GitHub repository settings**
3. **Navigate to Secrets and variables → Actions**
4. **Add the required secrets** (see above)
5. **Push to `develop` or `master`** to trigger deployment

## Manual Deployment

If you prefer manual deployment:

```bash
# Build the app
./build-for-deployment.sh

# Deploy to Firebase
firebase deploy --only hosting
```

## Workflow Files

- `build.yml` - Build check workflow for pull requests
- `deploy-staging.yml` - Staging deployment workflow
- `deploy-production.yml` - Production deployment workflow
- `workflow-check.yml` - Workflow validation and checks

## Troubleshooting

### Common Issues

1. **Firebase token expired**: Generate a new token with `firebase login:ci`
2. **Build fails**: Check Node.js version compatibility
3. **Deployment fails**: Verify Firebase project ID and permissions

### Checking Workflow Status

- Go to the "Actions" tab in your GitHub repository
- View workflow runs and logs
- Check for any error messages

## Environment Variables

Make sure your `.env` file in `visithome-admin-backoffice/` contains the correct Firebase configuration before deployment.
