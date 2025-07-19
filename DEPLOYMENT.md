# 🚀 GitHub Pages Deployment Guide

## ✅ What's Already Done

1. **GitHub Actions Workflow**: Created `.github/workflows/deploy.yml`
2. **Vite Configuration**: Updated `vite.config.ts` with base URL `/vibe/`
3. **Pushed Changes**: All changes are now on GitHub

## 🔧 Manual GitHub Pages Setup

### Step 1: Enable GitHub Pages
1. Go to your repository: `https://github.com/locvthanh/vibe`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**

### Step 2: Check Deployment Status
1. Go to **Actions** tab in your repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually takes 2-3 minutes)

### Step 3: Access Your Site
Once deployment is complete, your site will be available at:
```
https://locvthanh.github.io/vibe/
```

## 🔄 Automatic Deployment

From now on, every time you push changes to the `main` branch:
1. GitHub Actions will automatically build your project
2. Deploy it to GitHub Pages
3. Your site will be updated within a few minutes

## 🛠️ Troubleshooting

### If the workflow fails:
1. Check the **Actions** tab for error details
2. Common issues:
   - Node version compatibility
   - Missing dependencies
   - Build errors

### If the site doesn't load:
1. Wait 5-10 minutes for DNS propagation
2. Check if the workflow completed successfully
3. Verify the URL: `https://locvthanh.github.io/vibe/`

## 📝 Custom Domain (Optional)

If you want to use a custom domain:
1. Go to repository **Settings** → **Pages**
2. Enter your domain in the **Custom domain** field
3. Update `vite.config.ts` base URL to `/` instead of `/vibe/`
4. Add a `CNAME` file in the `public/` folder with your domain

## 🎉 Success!

Your Vibe AI Hub is now live on GitHub Pages! 🚀

- **URL**: https://locvthanh.github.io/vibe/
- **Auto-deploy**: Every push to main branch
- **Build**: Automatic via GitHub Actions 