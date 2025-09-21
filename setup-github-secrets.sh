#!/bin/bash

# VisitHome Admin Backoffice - GitHub Secrets Setup Helper
echo "🔐 GitHub Secrets Setup Helper"
echo "================================"
echo ""

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI not found. Installing..."
    npm install -g firebase-tools
else
    echo "✅ Firebase CLI found"
fi

echo ""
echo "📋 Follow these steps to set up GitHub Secrets:"
echo ""
echo "1. Go to your GitHub repository"
echo "2. Navigate to Settings → Secrets and variables → Actions"
echo "3. Click 'New repository secret'"
echo ""

# Get Firebase project ID
echo "🔍 Getting Firebase project information..."
if [ -f ".firebaserc" ]; then
    PROJECT_ID=$(grep -o '"default": "[^"]*"' .firebaserc | cut -d'"' -f4)
    echo "📁 Found project in .firebaserc: $PROJECT_ID"
else
    echo "⚠️  .firebaserc not found. Please enter your Firebase project ID:"
    read -p "Firebase Project ID: " PROJECT_ID
fi

echo ""
echo "🔑 Getting Firebase CI token..."
echo "This will open a browser window for authentication."
echo "Press Enter to continue..."
read

# Get Firebase CI token
FIREBASE_TOKEN=$(firebase login:ci --no-localhost 2>/dev/null)

if [ $? -eq 0 ] && [ ! -z "$FIREBASE_TOKEN" ]; then
    echo "✅ Firebase CI token obtained successfully"
else
    echo "❌ Failed to get Firebase CI token. Please try again."
    echo "Run: firebase login:ci"
    exit 1
fi

echo ""
echo "📝 Add these secrets to your GitHub repository:"
echo ""
echo "Required Secrets:"
echo "=================="
echo "Secret Name: FIREBASE_PROJECT_ID"
echo "Secret Value: $PROJECT_ID"
echo ""
echo "Secret Name: FIREBASE_TOKEN"
echo "Secret Value: $FIREBASE_TOKEN"
echo ""
echo "Secret Name: FIREBASE_HOSTING_ID"
echo "Secret Value: [Get from Firebase Console → Hosting → Your site ID]"
echo ""
echo "Additional Required Secrets (get from Firebase Console):"
echo "========================================================"
echo "Secret Name: FIREBASE_API_KEY"
echo "Secret Value: [Get from Firebase Console → Project Settings → General → Your apps]"
echo ""
echo "Secret Name: FIREBASE_AUTH_DOMAIN"
echo "Secret Value: [Get from Firebase Console → Project Settings → General → Your apps]"
echo ""
echo "Secret Name: FIREBASE_STORAGE_BUCKET"
echo "Secret Value: [Get from Firebase Console → Project Settings → General → Your apps]"
echo ""
echo "Secret Name: FIREBASE_MESSAGING_SENDER_ID"
echo "Secret Value: [Get from Firebase Console → Project Settings → General → Your apps]"
echo ""
echo "Secret Name: FIREBASE_APP_ID"
echo "Secret Value: [Get from Firebase Console → Project Settings → General → Your apps]"
echo ""
echo "Secret Name: AUTH_ACCOUNTS"
echo "Secret Value: [Comma-separated list of authorized emails, e.g., admin@example.com,user@example.com]"
echo ""
echo "🔗 GitHub Secrets URL:"
echo "https://github.com/YOUR_USERNAME/YOUR_REPO/settings/secrets/actions"
echo ""
echo "✅ Setup complete! Push to 'develop' or 'master' to trigger deployment."
