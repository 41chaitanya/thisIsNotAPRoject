# Deploy Valentine Card to Koyeb

## Prerequisites
- GitHub account
- Koyeb account (free tier available at https://www.koyeb.com/)

## Step 1: Push Code to GitHub

1. **Initialize Git Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Valentine Card App"
   ```

2. **Create GitHub Repository:**
   - Go to https://github.com/new
   - Name: `valentine-card`
   - Make it Private (recommended)
   - Don't initialize with README
   - Click "Create repository"

3. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/valentine-card.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy on Koyeb

1. **Sign up/Login to Koyeb:**
   - Go to https://www.koyeb.com/
   - Sign up with GitHub (recommended)

2. **Create New App:**
   - Click "Create App"
   - Choose "GitHub" as deployment method
   - Connect your GitHub account
   - Select the `valentine-card` repository

3. **Configure Deployment:**
   - **Builder:** Docker
   - **Dockerfile:** `Dockerfile` (should auto-detect)
   - **Port:** 8000
   - **Instance Type:** Free (Nano)
   - **Region:** Choose closest to you

4. **Environment Variables (Optional):**
   - No environment variables needed for this app

5. **Deploy:**
   - Click "Deploy"
   - Wait 3-5 minutes for build and deployment

6. **Get Your URL:**
   - After deployment, you'll get a URL like: `https://your-app-name.koyeb.app`
   - Share this URL with her!

## Step 3: Test Your Deployment

1. Open the Koyeb URL in your browser
2. Wait 5 seconds for loading screen
3. Test the "Yes" and "No" buttons
4. Test on mobile by opening the URL on your phone

## Troubleshooting

### Build Fails
- Check Koyeb logs for errors
- Ensure all files are committed to GitHub
- Verify Dockerfile is correct

### App Not Loading
- Check if port 8000 is configured correctly
- View Koyeb logs for runtime errors
- Ensure build completed successfully

### Email Not Working
- Remember to activate FormSubmit first (see test-email.html)
- Check browser console for errors
- Verify email address is correct in code

## Alternative: Deploy to Vercel (Easier)

If Koyeb doesn't work, you can use Vercel:

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow prompts and get instant deployment!

## Alternative: Deploy to Netlify

1. Build the app:
   ```bash
   npm run build
   ```

2. Go to https://app.netlify.com/drop
3. Drag and drop the `build` folder
4. Get instant URL!

## Cost
- Koyeb Free Tier: Free forever
- Vercel: Free for personal projects
- Netlify: Free for personal projects

## Custom Domain (Optional)
You can add a custom domain in Koyeb settings after deployment.
