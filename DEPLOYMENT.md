# 🚀 Deployment Guide

Step-by-step guide to deploy your landing page to Vercel.

## Prerequisites

- [x] Landing page is built and tested locally
- [ ] Web3Forms access key obtained
- [ ] GitHub account
- [ ] Vercel account (free)

---

## Step 1: Get Web3Forms Access Key

1. Go to https://web3forms.com
2. Enter your email address: **nagarajugajula100@gmail.com**
3. Click "Get Access Key"
4. Check your email for the access key
5. Copy the access key (you'll need it in Step 4)

**IMPORTANT**: Use nagarajugajula100@gmail.com when registering so contact form submissions will be sent to that email.

**Example key format**: `abc123def-4567-8901-2345-678901234567`

---

## Step 2: Update Environment Variable Locally

1. Open `.env.local` in your project
2. Replace `YOUR_ACCESS_KEY_HERE` with your actual key:
   ```env
   NEXT_PUBLIC_WEB3FORMS_KEY=abc123def-4567-8901-2345-678901234567
   ```
3. Save the file

---

## Step 3: Test Contact Form Locally

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000

3. Scroll to the contact form

4. Fill out the form with test data:
   - Name: Test User
   - Email: your-email@example.com
   - Message: This is a test message

5. Click "Send Message"

6. You should see: "Thank you! Your message has been sent successfully."

7. Check your email inbox for the test message

8. If it works, stop the dev server (Ctrl+C)

---

## Step 4: Push to GitHub

1. **Check git status**:
   ```bash
   git status
   ```

2. **Add all files** (except .env.local which is in .gitignore):
   ```bash
   git add .
   ```

3. **Commit changes**:
   ```bash
   git commit -m "feat: complete landing page with contact form"
   ```

4. **Push to GitHub**:
   ```bash
   git push origin main
   ```

   If you get an error about upstream, use:
   ```bash
   git push -u origin main
   ```

---

## Step 5: Deploy to Vercel

### 5.1 Sign Up / Sign In

1. Go to https://vercel.com
2. Click "Sign Up" or "Log In"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### 5.2 Import Project

1. On Vercel dashboard, click "New Project"
2. Find and select your `muthyasoft` repository
3. Click "Import"

### 5.3 Configure Project

1. **Framework Preset**: Should auto-detect as "Next.js" ✓
2. **Root Directory**: Leave as `./` ✓
3. **Build Command**: Leave as `npm run build` ✓
4. **Output Directory**: Leave as `.next` ✓

### 5.4 Add Environment Variable

**IMPORTANT**: Before clicking Deploy

1. Expand "Environment Variables" section
2. Add variable:
   - **Name**: `NEXT_PUBLIC_WEB3FORMS_KEY`
   - **Value**: Your Web3Forms access key (from Step 1)
   - **Environment**: Select all (Production, Preview, Development)
3. Click "Add"

### 5.5 Deploy

1. Click "Deploy"
2. Wait 1-3 minutes for deployment to complete
3. You'll see confetti when it's done! 🎉

---

## Step 6: Test Your Live Site

1. Click "Visit" or the domain URL (e.g., `muthyasoft.vercel.app`)
2. Test all sections:
   - [ ] Hero section loads
   - [ ] Expertise cards display
   - [ ] About section shows
   - [ ] How it works section visible
   - [ ] Contact form appears
   - [ ] Footer with social links
3. Test contact form:
   - Fill out and submit
   - Check your email for the message
4. Test on mobile:
   - Open on your phone
   - Check responsive design

---

## Step 7: Get Your Deployment URL

Your site is now live at one of these URLs:

**Default Vercel URL**:
- Format: `your-project-name.vercel.app`
- Example: `muthyasoft.vercel.app`

**Custom Domain** (optional - see Step 8):
- Your own domain like `tutoring.nagaraju.com`

---

## Step 8: Add Custom Domain (Optional)

### 8.1 Buy a Domain

If you don't have one:
- Namecheap: https://www.namecheap.com
- GoDaddy: https://www.godaddy.com
- Cloudflare: https://www.cloudflare.com

Popular choices:
- `yourname-tutoring.com`
- `datascience-tutor.com`
- `yourname.dev`

### 8.2 Add Domain in Vercel

1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Enter your domain name
4. Click "Add"

### 8.3 Configure DNS

Vercel will show you DNS records to add:

**Option A: Using Vercel Nameservers (Easiest)**
1. Copy nameservers from Vercel
2. Go to your domain registrar
3. Replace default nameservers with Vercel's
4. Wait 24-48 hours for propagation

**Option B: Using CNAME Record**
1. Add CNAME record in your domain's DNS:
   - Name: `www` or `@`
   - Value: `cname.vercel-dns.com`
2. Wait 1-2 hours for propagation

### 8.4 Verify Domain

1. Wait for DNS propagation
2. Vercel will auto-verify
3. SSL certificate will be auto-issued
4. Your site will be live on your custom domain!

---

## Troubleshooting

### Contact Form Not Working

**Problem**: Form submits but no email received

**Solutions**:
1. Check Web3Forms access key is correct in Vercel
2. Go to Vercel → Settings → Environment Variables
3. Verify `NEXT_PUBLIC_WEB3FORMS_KEY` is set
4. Redeploy: Deployments → Click "..." → Redeploy

### Build Failed on Vercel

**Problem**: Deployment fails

**Solutions**:
1. Check build logs in Vercel
2. Test build locally: `npm run build`
3. Fix any TypeScript errors
4. Commit and push fixes
5. Vercel will auto-redeploy

### Environment Variable Not Working

**Problem**: Variable not accessible in app

**Solutions**:
1. Ensure variable name starts with `NEXT_PUBLIC_`
2. Check it's added in Vercel settings
3. Redeploy the project
4. Clear browser cache

### Custom Domain Not Working

**Problem**: Domain shows error or doesn't load

**Solutions**:
1. Wait 24-48 hours for DNS propagation
2. Check DNS records are correct
3. Verify domain ownership in Vercel
4. Use Vercel's nameservers instead of CNAME

---

## Next Steps After Deployment

1. **Share Your Site**:
   - Add to LinkedIn profile
   - Share on social media
   - Add to YouTube channel description

2. **Monitor Contact Form**:
   - Check Web3Forms dashboard for submissions
   - Respond to inquiries promptly

3. **Analytics** (optional):
   - Add Google Analytics
   - Use Vercel Analytics (built-in)

4. **Continuous Updates**:
   - Update content as needed
   - Push to GitHub
   - Vercel auto-deploys on push

---

## Quick Reference Commands

```bash
# Test locally
npm run dev

# Build for production
npm run build

# Push to GitHub
git add .
git commit -m "your message"
git push

# Deploy via CLI (alternative)
npm i -g vercel
vercel --prod
```

---

## Support

If you encounter issues:
1. Check Vercel build logs
2. Review this guide
3. Search Vercel docs: https://vercel.com/docs
4. GitHub Issues: Your repository issues tab

---

**Congratulations! Your site is live! 🎉**
