# Email Setup Guide

## Step 1: Create Environment Variables

Create a `.env.local` file in your project root with the following:

```
EMAIL_USER=muthuradhakrish@gmail.com
EMAIL_PASS=vhqq lkfj jaqt ivko
```

## Step 2: Gmail App Password Setup

1. Go to your Google Account settings
2. Navigate to Security > 2-Step Verification
3. Scroll down to "App passwords"
4. Generate a new app password for "Mail"
5. Use this password as your `EMAIL_PASS`

## Step 3: Test the Setup

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out the form and submit
4. Check the browser console and terminal for error messages

## Common Issues:

1. **"Email configuration not set up"** - Environment variables not set
2. **"Invalid login"** - Wrong email/password combination
3. **"Less secure app access"** - Need to use App Password instead of regular password

## Debug Steps:

1. Check if `.env.local` file exists in project root
2. Verify email and password are correct
3. Make sure you're using an App Password, not your regular Gmail password
4. Check browser console and terminal for detailed error messages 