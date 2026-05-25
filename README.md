# Aditya Singh Gautam — Portfolio (Angular)

Personal portfolio for **Aditya Singh Gautam**, Full Stack Developer (LPU CSE). Built with Angular 19, Tailwind CSS, and content from your resume plus the IFMS project documentation.

## Run locally

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200)

## Customize content

| File | What to edit |
|------|----------------|
| `src/app/core/constants/profile.ts` | Name, email, phone, links, map |
| `src/app/core/constants/portfolio-data.ts` | Projects, resume, skills, blog posts |

## Pages

- **About** — Bio, services, achievements
- **Resume** — Education (LPU), Prodigy internship, certificates, skills
- **Portfolio** — IFMS, RoleCare, Driuber, Blogify, E-Books (click a card for details)
- **Blog** — Project insight articles
- **Contact** — Map (Phagwara) + contact form

## Build

```bash
npm run build
```

Output: `dist/portfolio/`

## Contact form (Gmail on Vercel)

The form does **not** send email from the browser alone. It calls a Vercel serverless function (`api/contact.js`) that uses Gmail SMTP.

### 1. Create a Gmail App Password

1. Use your Gmail: `singhaditya20030@gmail.com`
2. Turn on **2-Step Verification** for the Google account
3. Open [Google App Passwords](https://myaccount.google.com/apppasswords)
4. Create an app password (e.g. name: `Portfolio Vercel`) and copy the **16-character password**

Do **not** put your normal Gmail password in Vercel.

### 2. Add environment variables on Vercel

In your project → **Settings** → **Environment Variables**, add:

| Name | Value | Example |
|------|--------|---------|
| `GMAIL_USER` | Your Gmail address | `singhaditya20030@gmail.com` |
| `GMAIL_APP_PASSWORD` | The 16-char app password | `abcd efgh ijkl mnop` (spaces optional) |
| `CONTACT_TO_EMAIL` | (optional) Inbox to receive messages | Same as `GMAIL_USER` |

Apply to **Production** (and Preview if you want), then **Redeploy**.

### 3. Test locally (optional)

`npm start` alone will **not** run the API. Use:

```bash
npx vercel dev
```

Set the same env vars in a local `.env` file (do not commit it).
