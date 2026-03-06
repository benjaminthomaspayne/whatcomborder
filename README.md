# BorderBug - Border Crossing Wait Times Tracker

## What's New in This Update

### Design Changes
- ✅ Dark green gradient theme (replaces teal)
- ✅ Yellow/amber accent colors
- ✅ Glass-morphism effects
- ✅ Improved typography and spacing
- ✅ Better mobile responsiveness

### Functionality
- ✅ **WCOG data integration** - Real-time sensor data from Whatcom Council of Governments
- ✅ **Fixed parseWaitTime()** - "0" now correctly displays as "No delay" instead of "N/A"
- ✅ **Dual data sources** - Shows both WCOG and federal (CBP/CBSA) data
- ✅ **Production Tailwind CSS** - Removed CDN, using compiled CSS (~10-50 KB vs 3.4 MB)

### Content Updates
- ✅ Rebranded as "BorderBug"
- ✅ Updated NOTE section explaining multiple data sources
- ✅ Updated "How it works" section
- ✅ Updated attribution bullets
- ✅ Removed DriveBC references
- ✅ Updated Pacific Highway description (added km conversion)
- ✅ New SEO metadata

### Technical
- ✅ Tailwind CLI production build
- ✅ Updated to borderbug.netlify.app
- ✅ Optimized for performance

## Files Included

```
borderbug-update/
├── index.html              # Main app file
├── package.json            # Node dependencies
├── tailwind.config.js      # Tailwind configuration
├── netlify.toml           # Netlify build config
├── src/
│   └── input.css          # Tailwind input file
├── dist/
│   └── output.css         # Generated CSS (created during build)
├── favicon-16x16.png      # Favicon (copy from current)
├── favicon-32x32.png      # Favicon (copy from current)
├── favicon.ico            # Favicon (copy from current)
├── og-image.png           # Social media thumbnail (copy from current)
└── netlify/functions/
    └── border-data.js     # CORS proxy (copy from current)
```

## Deployment Steps

### 1. Copy Existing Files
Copy these files from your current deployment:
- `favicon-16x16.png`
- `favicon-32x32.png`
- `favicon.ico`
- `og-image.png`
- `netlify/functions/border-data.js`

### 2. Deploy to Netlify

**Option A: Drag & Drop (Easiest)**
1. Make sure all files are in the `borderbug-update` folder
2. Drag the entire folder to Netlify's deploy interface
3. Netlify will automatically:
   - Run `npm install`
   - Run `npm run build:css` (compiles Tailwind)
   - Deploy your site

**Option B: Git Deployment**
1. Push to GitHub
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build:css`
   - Publish directory: `.` (root)
4. Deploy!

### 3. Verify Deployment

After deployment, check:
- ✅ All crossings display correctly
- ✅ WCOG data shows up (first row in each card except Point Roberts)
- ✅ Federal data shows up (second row)
- ✅ Traffic cams load
- ✅ Weather displays
- ✅ No console errors
- ✅ No "Tailwind CDN should not be used in production" warning

## Local Development

To work on the app locally:

```bash
# Install dependencies
npm install

# Watch for CSS changes (auto-rebuild on save)
npm run watch:css

# Build CSS for production
npm run build:css
```

Then open `index.html` in your browser.

## Important Notes

### WCOG Data Display Order
- **4 crossings** (Peace Arch, Pacific Highway, Lynden, Sumas): WCOG first, then federal
- **Point Roberts**: Federal data only (no WCOG sensors)

### API Keys
- WCOG API key is embedded: `269a2097-d8e3-4d1c-8a29-5bfcfa4f50ea`
- No other API keys needed

### Performance
- Compiled CSS is ~10-50 KB (vs 3.4 MB CDN)
- Page load should be significantly faster
- All Tailwind classes are optimized and minified

## Troubleshooting

**CSS not loading?**
- Make sure you ran `npm run build:css`
- Check that `dist/output.css` exists

**WCOG data not showing?**
- Check browser console for errors
- Verify Netlify function is working
- WCOG API may be slow (wait 10-15 seconds)

**Build fails on Netlify?**
- Make sure `package.json`, `tailwind.config.js`, and `netlify.toml` are all in root
- Check Netlify build logs for specific errors

## Questions?

Email: benjaminthomaspayne@gmail.com
