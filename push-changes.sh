#!/bin/bash

# Navigate to repository
cd /Users/matthewthomas/Documents/GitHub/sky-presentation

# Add the updated files
git add index.html styles.css

# Commit with descriptive message
git commit -m "Redesign: Clean presentation with full-bleed pillar intros

- Removed slide numbers and excess branding
- Added full-screen colored pillar intro slides (PEOPLE, PROCESS, POSITION, PRODUCT)
- Replaced card border strips with colored Google Material Icons
- Simplified title slide
- Reduced margins for tighter, cleaner layout
- Made fully responsive with mobile breakpoints
- Removed all background colors from content slides"

# Push to GitHub
git push origin main

echo "✅ Changes pushed to GitHub successfully!"
