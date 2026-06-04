# Personal Finance & Subscription Tracker

A comprehensive personal finance and subscription tracking application built with React, Vite, TailwindCSS, and Firebase. This application allows users to track their expenses, manage subscriptions, and view financial summaries.

## Live Hosted URL
**[Click here to view the live application on Firebase](INSERT_FIREBASE_URL_HERE)**

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [INSERT_GITHUB_REPO_URL]
   cd Personal_Finance
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed on your computer, then run:
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available in your browser at `http://localhost:5173/`.

## Environment Variables (.env Usage)

This project uses Firebase for authentication and database storage. To run this project locally, you must create a `.env` file in the root folder of the project and add your Firebase credentials:

```env
VITE_FIREBASE_API_KEY="your_api_key_here"
VITE_FIREBASE_AUTH_DOMAIN="your_auth_domain_here"
VITE_FIREBASE_PROJECT_ID="your_project_id_here"
VITE_FIREBASE_STORAGE_BUCKET="your_storage_bucket_here"
VITE_FIREBASE_MESSAGING_SENDER_ID="your_sender_id_here"
VITE_FIREBASE_APP_ID="your_app_id_here"
```
*(Note: Never commit your actual `.env` file to a public GitHub repository. It is automatically ignored by Git).*

## Responsive Testing Evidence

The application has been fully tested across multiple devices (Desktop, Tablet, and Mobile) to ensure a seamless responsive experience.

*Screenshots for all devices:*
- Desktop View: `[Insert Desktop Screenshot Here]`
- Tablet View: `[Insert Tablet Screenshot Here]`
- Mobile View: `[Insert Mobile Screenshot Here]`

## Progressive Web App (PWA)
This application is fully PWA-compliant. Users can install it directly to their desktop or mobile device for a native application experience.
