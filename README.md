# Muthya Soft - Data Engineering Platform

A professional multi-page website for data engineering tutoring services by Nagaraju Gajula.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Contact Form

Get your free Web3Forms access key:
1. Visit https://web3forms.com
2. Enter your email
3. You'll receive an access key instantly (no signup required)

Update `.env.local`:
```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_actual_access_key_here
```

### 3. Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000

### 4. Build for Production
```bash
npm run build
npm start
```

## 📦 Deploy to Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Complete landing page with contact form"
   git push
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Sign in with GitHub
   - Click "New Project"
   - Import your `muthyasoft` repository
   - Add environment variable:
     - Name: `NEXT_PUBLIC_WEB3FORMS_KEY`
     - Value: Your Web3Forms access key
   - Click "Deploy"

3. **Done!** Your site will be live in ~2 minutes

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variable in Vercel dashboard
# Then deploy to production
vercel --prod
```

## 🌐 Custom Domain Setup

After deploying to Vercel:

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update your domain's DNS settings:
   - Add a CNAME record pointing to `cname.vercel-dns.com`
   - Or follow Vercel's specific instructions

## 📧 Contact Form Setup

The contact form uses Web3Forms (free tier):
- **Free tier**: 250 submissions/month
- **Email delivery**: Instant
- **No backend needed**: Works client-side
- **Spam protection**: Built-in

### Alternative Email Services

If you need more submissions or features:

**Formspree**: https://formspree.io
- Free: 50 submissions/month
- Paid: Starting at $10/month

**EmailJS**: https://www.emailjs.com
- Free: 200 emails/month
- Requires client-side configuration

**Custom API Route** (for unlimited):
- Use services like Resend, SendGrid, or AWS SES
- Requires API route setup in Next.js

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel (recommended)
- **Contact Form**: Web3Forms

## 📁 Project Structure

```
muthyasoft/
├── src/
│   └── app/
│       ├── components/
│       │   └── ContactForm.tsx    # Contact form component
│       ├── globals.css            # Global styles
│       ├── layout.tsx             # Root layout
│       └── page.tsx               # Main landing page
├── .env.local                     # Environment variables (not committed)
├── .env.example                   # Example env file
└── package.json
```

## 🎨 Customization

### Update Content

Edit `src/app/page.tsx` to customize:
- Hero section text
- Expertise/skills list
- About section
- Social media links

### Update Styling

Edit `src/app/globals.css` to change:
- Color scheme
- Typography
- Dark mode settings

### Update Metadata

Edit `src/app/layout.tsx` to change:
- Page title
- Meta description
- SEO settings

## 📝 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark mode support
- ✅ Working contact form
- ✅ Social media integration
- ✅ Fast loading performance
- ✅ SEO optimized

## 🔗 Social Links

Social media links throughout the site:
- YouTube: TechGeniusMinds (https://www.youtube.com/@TechGeniusMinds)
- Medium: @nagarajugajula100 (https://medium.com/@nagarajugajula100)
- LinkedIn: https://www.linkedin.com/in/nagaraju-gajula-0a408427/
- Email: nagarajugajula100@gmail.com (for contact form)

## 📊 Performance

- Build time: ~1 second
- Page load: <3 seconds
- Lighthouse score: 90+

## 🤝 Support

For issues or questions:
- GitHub Issues: https://github.com/nagaraju100/muthyasoft/issues
- Email: Via contact form on the live site

## 📄 License

ISC License

---

Built with Next.js 16 and Tailwind CSS v4
