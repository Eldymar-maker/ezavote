# Cash Prize PH - App

This is a Next.js application built with Firebase Studio. It's a platform for users to earn rewards, participate in games, and engage with a community.

## Running Locally

To run the application on your local machine for development and testing, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:9002`.

## Deploying with Cloudflare Pages & GitHub

This application can be easily deployed for free using Cloudflare Pages, connected directly to a GitHub repository. This setup provides automatic builds and deployments whenever you push new changes.

### Step 1: Push Your Code to a GitHub Repository

1.  **Create a new repository on GitHub:** If you haven't already, go to [GitHub](https://github.com/new) and create a new repository for this project.
2.  **Push your local code:** Follow the instructions on GitHub to connect your local project folder to the new repository and push your code. You'll typically run commands like this in your project directory:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
    git push -u origin main
    ```
    (Make sure to replace `YOUR_USERNAME/YOUR_REPOSITORY` with your actual GitHub details.)

### Step 2: Create a Cloudflare Pages Project

1.  **Log in to Cloudflare:** Go to the [Cloudflare dashboard](https://dash.cloudflare.com/) and log in.
2.  **Navigate to Pages:** In the sidebar, select **Workers & Pages**, then go to the **Pages** tab.
3.  **Create a New Project:** Click **Create a project** and then select **Connect to Git**.
4.  **Connect to GitHub:** Authorize Cloudflare to access your GitHub account and select the repository you just created.

### Step 3: Configure and Deploy

1.  **Select Branch:** Choose the `main` branch (or whichever branch you want to deploy from).
2.  **Configure Build Settings:** Cloudflare is smart and will likely detect that this is a Next.js project.
    *   Select **Next.js** from the **Framework preset** dropdown.
    *   This should automatically set the **Build command** to `npm run build` and the **Build output directory** to `.next`. If not, you can set them manually.
3.  **Save and Deploy:** Click the **Save and Deploy** button.

Cloudflare will now build and deploy your application. You can watch the progress in the deployment logs. Once complete, you'll be given a unique `*.pages.dev` URL where your live app can be accessed.

### Step 4: Automatic Deployments

That's it! Now, every time you push a change to your connected GitHub branch, Cloudflare Pages will automatically rebuild and deploy the new version of your site.
