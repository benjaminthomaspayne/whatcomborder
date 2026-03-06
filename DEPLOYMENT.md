# BorderBug Deployment Guide

## Quick Checklist

Before deploying, make sure you have:
- [ ] Copied `favicon-16x16.png` from current deployment
- [ ] Copied `favicon-32x32.png` from current deployment  
- [ ] Copied `favicon.ico` from current deployment
- [ ] Copied `og-image.png` from current deployment
- [ ] Copied `netlify/functions/border-data.js` from current deployment (the CORS proxy)
- [ ] Logo files are present (cbp.svg, cbsa.png, wcog.png)

## Step-by-Step Deployment

### Step 1: Prepare Files

1. Download all files from the `borderbug-update` folder
2. Copy the files listed in the checklist above from your current Netlify deployment
3. Your folder structure should look like:

```
borderbug-update/
├── index.html
├── package.json
├── tailwind.config.js
├── netlify.toml
├── README.md
├── DEPLOYMENT.md
├── src/
│   └── input.css
├── dist/               (empty - will be created during build)
├── favicon-16x16.png   ← COPY THIS
├── favicon-32x32.png   ← COPY THIS
├── favicon.ico         ← COPY THIS
├── og-image.png        ← COPY THIS
├── cbp.svg
├── cbsa.png
├── wcog.png
└── netlify/
    └── functions/
        └── border-data.js  ← COPY THIS
```

### Step 2: Deploy to Netlify

**Method 1: Netlify UI (Recommended for first deployment)**

1. Go to https://app.netlify.com/
2. Log in to your account
3. Go to your existing site (currently at whatcomborder.netlify.app)
4. Click "Deploys" tab
5. Drag the entire `borderbug-update` folder into the deploy area
6. Netlify will:
   - Install dependencies (`npm install`)
   - Build CSS (`npm run build:css`)
   - Deploy the site

**Method 2: Git Deployment (Recommended for ongoing updates)**

1. Create a new GitHub repository or use existing one
2. Push all files to the repository
3. In Netlify:
   - Click "Site Settings"
   - Click "Build & Deploy"
   - Connect to your GitHub repository
   - Build settings should auto-detect from `netlify.toml`:
     - Build command: `npm run build:css`
     - Publish directory: `.`
4. Deploy!

### Step 3: Update Site Name

1. In Netlify, go to "Site Settings" → "General"
2. Under "Site details", click "Change site name"
3. Change from `whatcomborder` to `borderbug`
4. Your site will now be at `borderbug.netlify.app`

### Step 4: Verify Deployment

Visit your site and check:

✅ **Visual Design**
- Dark green gradient background
- Yellow accent buttons
- Glass-morphism cards

✅ **Data Display**
- All 5 crossings show up
- Weather shows for each crossing
- Traffic cams load (may take a moment)

✅ **WCOG Data (First row in each card)**
- Peace Arch US: Standard, NEXUS with WCOG label
- Peace Arch Canada: Standard, NEXUS with WCOG label
- Pacific Highway US: Standard, NEXUS, Commercial with WCOG label
- Pacific Highway Canada: Standard, NEXUS, Commercial with WCOG label
- Lynden US: Standard, NEXUS, Commercial with WCOG label
- Lynden Canada: Standard, NEXUS, Commercial with WCOG label
- Sumas US: Standard, NEXUS, Commercial (N/A) with WCOG label
- Sumas Canada: Standard, NEXUS, Commercial with WCOG label
- Point Roberts: NO WCOG data (only federal data)

✅ **Federal Data (Second row in each card, or only row for Point Roberts)**
- CBP labels for US-bound
- CBSA labels for Canada-bound

✅ **Content Updates**
- Title says "BorderBug: Whatcom County - British Columbia..."
- NOTE section mentions multiple data sources
- "How it works" mentions BorderBug by name
- Footer says "BorderBug designed by Benjamin Payne"

✅ **Technical**
- No console errors
- No "Tailwind CDN" warning in console
- Page loads quickly

### Step 5: Connect Custom Domain (Optional - Do Later)

Once you're ready to connect `borderbug.com`:

1. In Netlify: "Domain Settings" → "Add custom domain"
2. Enter `borderbug.com`
3. Follow Netlify's DNS instructions
4. Point your Cloudflare DNS to Netlify's nameservers

## Troubleshooting

### "Build failed" error

Check the build log in Netlify. Common issues:
- Missing `package.json` → Make sure it's in the root folder
- Missing `tailwind.config.js` → Make sure it's in the root folder
- Node version issue → Netlify should auto-detect, but you can set it in `package.json`

### WCOG data showing "N/A" everywhere

- Wait 10-15 seconds and refresh - WCOG API can be slow
- Check browser console for errors
- Verify `border-data.js` function is working
- Check Netlify function logs

### Traffic cams not loading

- This is normal - cams load individually
- Check that URLs haven't changed
- Some cams may be temporarily offline

### CSS looks wrong

- Make sure `npm run build:css` completed successfully
- Check that `dist/output.css` exists
- Try clearing browser cache

### parseWaitTime still showing "N/A" for zero delays

- Hard refresh the page (Ctrl+Shift+R / Cmd+Shift+R)
- Check that you're viewing the new deployment, not cached old version

## Need Help?

If something isn't working:
1. Check Netlify deploy logs
2. Check browser console for errors
3. Compare your files against the README checklist
4. Email: benjaminthomaspayne@gmail.com

## Success!

Once everything is working:
- Your site is at `borderbug.netlify.app`
- All WCOG data is loading
- Design looks modern and professional
- Performance is significantly improved
- You're ready to connect your custom domain!
