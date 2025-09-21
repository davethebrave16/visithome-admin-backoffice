# VisitHome Admin Backoffice

A React-based admin panel with Google authentication using Firebase.

[![Build](https://github.com/your-username/your-repo/actions/workflows/build.yml/badge.svg)](https://github.com/your-username/your-repo/actions/workflows/build.yml)
[![Deploy to Staging](https://github.com/your-username/your-repo/actions/workflows/deploy-staging.yml/badge.svg)](https://github.com/your-username/your-repo/actions/workflows/deploy-staging.yml)
[![Deploy to Production](https://github.com/your-username/your-repo/actions/workflows/deploy-production.yml/badge.svg)](https://github.com/your-username/your-repo/actions/workflows/deploy-production.yml)

## Features

- Google authentication via Firebase
- Email-based access control
- Modern React with TypeScript
- Responsive design

## Setup

### 1. Create Firebase Web App

**IMPORTANT**: You need to create a web app in Firebase Console first.

1. **Go to Firebase Console**: [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. **Select your existing project**
3. **Add a new web app**:
   - Click the **gear icon** (⚙️) next to "Project Overview"
   - Select **"Project settings"**
   - Scroll down to **"Your apps"** section
   - Click **"Add app"** button
   - Choose the **Web icon** (`</>`)
   - **App nickname**: Enter `visithome-admin-backoffice`
   - Click **"Register app"**

4. **Copy the configuration** that Firebase generates (you'll see a code block with `firebaseConfig`)

### 2. Environment Configuration

Create a `.env` file in the `visithome-admin-backoffice` directory with your Firebase configuration:

```env
# Firebase Configuration (copy from Firebase Console)
VITE_FIREBASE_API_KEY=AIzaSyC...your_actual_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890

# Authorized Email Accounts (comma-separated)
VITE_AUTH_ACCOUNTS=davethebrave160691@gmail.com,nicotedeschi.nt@gmail.com
```

**How to get these values:**
- All values come from the `firebaseConfig` object shown after creating the web app
- `apiKey` → `VITE_FIREBASE_API_KEY`
- `authDomain` → `VITE_FIREBASE_AUTH_DOMAIN`
- `projectId` → `VITE_FIREBASE_PROJECT_ID`
- `storageBucket` → `VITE_FIREBASE_STORAGE_BUCKET`
- `messagingSenderId` → `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `appId` → `VITE_FIREBASE_APP_ID`

### 3. Enable Google Authentication

1. In Firebase Console, go to **"Authentication"** in the left sidebar
2. Click **"Get started"** if you haven't set it up yet
3. Go to **"Sign-in method"** tab
4. Click on **"Google"** provider
5. Toggle **"Enable"** to ON
6. Set a **Project support email** (required)
7. Click **"Save"**

### 4. Install Dependencies

```bash
cd visithome-admin-backoffice
npm install
```

### 5. Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 6. Build for Production

```bash
npm run build
```

### 7. Deploy to Firebase Hosting

#### Option A: Using GitHub Actions (Recommended)

The project includes automated workflows:

- **Build Check**: Runs on pull requests to `master` and `develop` branches
- **Staging Environment**: Automatically deploys when pushing to `develop` branch
- **Production Environment**: Automatically deploys when pushing to `master` branch

**Setup GitHub Secrets:**
1. Go to your GitHub repository
2. Navigate to Settings → Secrets and variables → Actions
3. Add these secrets:
   - `FIREBASE_PROJECT_ID`: Your Firebase project ID
   - `FIREBASE_TOKEN`: Your Firebase CI token
   - `FIREBASE_HOSTING_ID`: Your Firebase hosting site ID
   - `FIREBASE_API_KEY`: Your Firebase API key
   - `FIREBASE_AUTH_DOMAIN`: Your Firebase auth domain
   - `FIREBASE_STORAGE_BUCKET`: Your Firebase storage bucket
   - `FIREBASE_MESSAGING_SENDER_ID`: Your Firebase messaging sender ID
   - `FIREBASE_APP_ID`: Your Firebase app ID
   - `AUTH_ACCOUNTS`: Comma-separated list of authorized emails

**Getting Firebase Hosting ID:**
1. Go to Firebase Console → Hosting
2. Find your hosting site
3. The site ID is shown in the hosting dashboard (usually your project ID or a custom name)
4. **Note**: This ID is used in the deployment command `--only hosting:SITE_ID` and is stored as a GitHub secret for security

**Getting Firebase CI Token:**
```bash
# Install Firebase CLI globally if not already installed
npm install -g firebase-tools

# Login and get CI token
firebase login:ci

# Copy the token and add it to GitHub Secrets
```

## Manual Deployment Setup

For manual deployment, you need to create a `.firebaserc` file in your project root. This file is **required** for Firebase CLI to know which project and hosting site to deploy to.

### Creating .firebaserc File

Create a `.firebaserc` file in your project root:

```bash
cat > .firebaserc << EOF
{
  "projects": {
    "default": "your-actual-project-id"
  },
  "targets": {
    "your-actual-project-id": {
      "hosting": {
        "admin-panel": ["your-actual-hosting-site-id"]
      }
    }
  }
}
EOF
```

**Replace the placeholders:**
- `your-actual-project-id` → Your Firebase project ID
- `your-actual-hosting-site-id` → Your Firebase hosting site ID

### Example .firebaserc File

```json
{
  "projects": {
    "default": "admin-12345"
  },
  "targets": {
    "visithome-admin-12345": {
      "hosting": {
        "admin-panel": ["admin-12345"]
      }
    }
  }
}
```

**Note**: This file contains sensitive information and should be added to `.gitignore` to prevent accidental commits.

**Quick Setup Script:**
```bash
./setup-github-secrets.sh
```

This script will help you:
1. Install Firebase CLI if needed
2. Get your Firebase project ID
3. Generate a CI token
4. Provide instructions for adding GitHub secrets

#### Option B: Manual Deployment

```bash
./build-for-deployment.sh
```

This script will:
1. Build the React app
2. Copy files to the build directory
3. Prepare everything for deployment

**Important**: For manual deployment, you need to create a `.firebaserc` file first. This file tells Firebase CLI which project and hosting site to use.

Create the `.firebaserc` file:
```bash
cat > .firebaserc << EOF
{
  "projects": {
    "default": "YOUR_PROJECT_ID"
  },
  "targets": {
    "YOUR_PROJECT_ID": {
      "hosting": {
        "admin-panel": ["YOUR_HOSTING_SITE_ID"]
      }
    }
  }
}
EOF
```

Replace:
- `YOUR_PROJECT_ID` with your actual Firebase project ID
- `YOUR_HOSTING_SITE_ID` with your actual Firebase hosting site ID

Then deploy:
```bash
firebase deploy --only hosting:admin-panel
```

This script will automatically:
1. Build the React app
2. Copy files to the build directory
3. Deploy to Firebase Hosting

#### Prerequisites

Make sure you have:
- Firebase CLI installed (`npm install -g firebase-tools`)
- Logged in to Firebase (`firebase login`)
- Selected the correct project (`firebase use your-project-id`)

**Note**: If you encounter Firebase CLI issues, you can also deploy manually through the Firebase Console:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to Hosting
4. Click "Add another site" or use existing site
5. Upload the contents of the `build/` directory

#### Environment Variables for Production

Before deploying, make sure your `.env` file in `visithome-admin-backoffice/` contains your actual Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_actual_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890
VITE_AUTH_ACCOUNTS=davethebrave160691@gmail.com,nicotedeschi.nt@gmail.com
```

**Important**: Never commit your `.env` file to version control. It should be in your `.gitignore`.

## Access Control

Only users with emails listed in the `VITE_AUTH_ACCOUNTS` environment variable can access the admin panel. The emails should be comma-separated.

**Example:**
```env
VITE_AUTH_ACCOUNTS=admin@example.com,user@example.com,another@example.com
```

## Project Structure

```
visithome-admin-backoffice/
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx    # Main admin dashboard
│   │   ├── Login.tsx        # Google login component
│   │   └── Loading.tsx      # Loading spinner
│   ├── contexts/
│   │   └── AuthContext.tsx  # Authentication context
│   ├── firebase.ts          # Firebase configuration
│   └── App.tsx              # Main app component
├── .env                     # Environment variables (create this)
└── package.json
```

## Usage

1. **Start the development server**: `npm run dev`
2. **Navigate to**: `http://localhost:5173`
3. **Click "Sign in with Google"**
4. **Use an authorized email address** (must be in `VITE_AUTH_ACCOUNTS`)
5. **Access the admin dashboard** upon successful authentication

## Troubleshooting

- **"User is not allowed to access"** - The email you're using isn't in the `VITE_AUTH_ACCOUNTS` list
- **Firebase errors** - Double-check that all environment variables are correctly copied from Firebase Console
- **Google sign-in not working** - Make sure Google authentication is enabled in Firebase Console
- **App not loading** - Ensure the `.env` file is in the `visithome-admin-backoffice` directory