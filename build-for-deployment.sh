#!/bin/bash

# VisitHome Admin Backoffice - Build for Deployment Script
echo "🚀 Building app for deployment..."

# Build the React app
echo "📦 Building React app..."
cd visithome-admin-backoffice
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

# Copy build files to Firebase hosting directory
echo "📁 Copying build files to Firebase hosting directory..."
cd ..

# Create build directory if it doesn't exist
if [ ! -d "build" ]; then
    echo "📁 Creating build directory..."
    mkdir -p build
fi

# Clean and copy files
rm -rf build/*
cp -r visithome-admin-backoffice/dist/* build/

echo "✅ Build completed successfully!"
echo "📁 Files are ready in the 'build/' directory"
echo "🌐 You can now deploy using: firebase deploy --only hosting:YOUR_HOSTING_ID"
echo "   Or upload the contents of 'build/' directory manually to Firebase Console"
