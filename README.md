# SKIDS Clinic: Confident, Mindful Guidance (PWA)

This is a frontend-only Progressive Web App (PWA) designed to provide evidence-based guidance for parents and teachers. It's built with React, TypeScript, and Tailwind CSS, and it leverages the Google Gemini API for its AI-powered features.

This README provides the technical instructions for setting up, configuring, and deploying the application.

## Project Structure

- **`index.html`**: The main entry point. Contains the importmap for all dependencies.
- **`index.tsx`**: Mounts the React application to the DOM.
- **`components/`**: Contains all React components.
  - **`App.tsx`**: The root component, handles routing and layout.
  - **`LoginScreen.tsx`**: The new entry point for user authentication.
  - **`AuthContext.tsx`**: Manages user authentication state with Magic.link. **(NEEDS CONFIGURATION)**
  - **`ApiKeyContext.tsx`**: Manages the user's self-provided Gemini API key.
  - ...other UI components.
- **`services/`**: Contains the `geminiService.ts` file for interacting with the Gemini API.
- **`constants.ts`**: Contains all static content, including topics, example plans, and FAQs.
- **`types.ts`**: Contains all TypeScript type definitions.
- **`assets/`**: Contains static assets (currently none, as the logo was removed).

## Technical Stack

- **React 19**
- **TypeScript**
- **Tailwind CSS** (via CDN)
- **React Router** for navigation
- **ESM Modules** via `importmap` (no build step needed)
- **Magic.link** for password-less authentication
- **@google/genai** for AI features

---

## 🚀 Step 1: Configuration (Crucial!)

Before you can run or deploy the application, you **must** configure it with your Magic.link API key.

1.  **Sign up for Magic.link:** Go to [magic.link](https://magic.link) and create a free account.
2.  **Create an Application:** In your Magic dashboard, create a new application.
3.  **Get Your Key:** Find and copy your **Publishable API Key**. It will start with `pk_live_...`.
4.  **Update the Code:** Open the file `components/AuthContext.tsx`.
5.  Find the following line:

    ```javascript
    const MAGIC_PUBLISHABLE_key = 'YOUR_MAGIC_KEY_GOES_HERE';
    ```

6.  **Replace the placeholder** `'YOUR_MAGIC_KEY_GOES_HERE'` with your actual Publishable API Key from Magic.

    ```javascript
    // Example:
    const MAGIC_PUBLISHABLE_key = 'pk_live_XXXXXXXXXXXXXXXXXXXX';
    ```

7.  Save the file.

The application is now configured and ready for deployment.

---

## 🚀 Step 2: Running Locally (Optional)

Since this project has no build step, you can run it with any simple local web server.

1.  Make sure you have Node.js installed.
2.  Install a simple server globally: `npm install -g serve`
3.  From the root directory of the project, run: `serve .`
4.  Open your browser to the URL provided (usually `http://localhost:3000`).

---

## 🚀 Step 3: Deployment to Netlify

This project is optimized for easy deployment on a static hosting service like Netlify.

1.  **Push to GitHub:** Create a new repository on [GitHub](https://github.com) and push this entire project folder to it.
2.  **Sign up for Netlify:** Create a free account at [netlify.com](https://www.netlify.com).
3.  **Import Project:**
    -   From your Netlify dashboard, click **"Add new site" > "Import an existing project"**.
    -   Connect to GitHub and authorize it.
    -   Select the repository you just created.
4.  **Deploy:**
    -   Netlify will automatically detect that this is a static site. You do not need to configure any build commands or publish directories.
    -   The default settings are correct.
    -   Click the **"Deploy site"** button.

Within a minute, your application will be live on a public URL. You can customize this URL in the Netlify site settings.

---

## Managing Users

User management is **not** done in the code. It is handled entirely through your Magic.link dashboard. See `README_OPS.md` for the non-technical guide for your operations team.
