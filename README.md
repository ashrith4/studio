# Sikkim Getaways - Next.js Application

This is a Next.js application for exploring hotels and car rentals in Sikkim. It uses Firebase for authentication and potentially other backend services, and Genkit for AI features.

## Features

- Browse places in Sikkim (Gangtok, Pelling, Lachung).
- View hotels available in each place with details and image carousels.
- View available rental cars with details.
- User Authentication (Login/Register) using Firebase.
- (Planned/Optional) AI features using Genkit.

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm (or yarn)
- Firebase Project:
    - Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/).
    - Enable Firebase Authentication (Email/Password).
    - Get your Firebase project configuration credentials.
- Google AI API Key (Optional, for Genkit):
    - Obtain an API key from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation

1.  **Clone the repository (if applicable):**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

### Environment Variables

Create a `.env` file in the root of the project and add your Firebase and Google AI credentials:

```env
# Firebase Configuration (Replace with your actual config)
NEXT_PUBLIC_FIREBASE_API_KEY="YOUR_API_KEY"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
NEXT_PUBLIC_FIREBASE_APP_ID="YOUR_APP_ID"

# Google AI API Key (Optional - for Genkit features)
GOOGLE_GENAI_API_KEY="YOUR_GOOGLE_AI_API_KEY"

# Secret for JWT signing (used in middleware/auth) - Generate a strong secret
AUTH_SECRET="YOUR_STRONG_SECRET_KEY_FOR_JWT"
```

**Important:**
- Replace the placeholder values (`YOUR_...`) with your actual Firebase project configuration and Google AI API key.
- Generate a strong, unique secret for `AUTH_SECRET`. You can use an online generator or `openssl rand -base64 32`.
- **Never commit your `.env` file to version control.** Add `.env` to your `.gitignore` file.

### Running the Development Server

To start the Next.js development server:

```bash
npm run dev
```

The application will usually be available at `http://localhost:9002`.

### Running the Genkit Development Server (Optional)

If you are using Genkit features, you need to run the Genkit development server separately:

To start the Genkit server once:
```bash
npm run genkit:dev
```

To start the Genkit server and watch for changes:
```bash
npm run genkit:watch
```

The Genkit UI will typically be available at `http://localhost:4000`.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

### Running in Production

After building, start the production server:

```bash
npm run start
```

## Project Structure

```
├── src/
│   ├── app/              # Next.js App Router pages and layouts
│   │   ├── (auth)/       # Route group for authentication pages (login, register)
│   │   ├── cars/         # Car rental page
│   │   ├── places/       # Place and hotel details pages
│   │   ├── api/          # API Routes (if any)
│   │   ├── globals.css   # Global styles and Tailwind directives
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Homepage
│   ├── components/       # Reusable UI components
│   │   ├── ui/           # ShadCN UI components
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── data/             # Static data (places, hotels, cars)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions, Firebase config
│   ├── types/            # TypeScript type definitions
│   ├── ai/               # Genkit related code (flows, prompts) - Optional
│   │   ├── ai-instance.ts
│   │   └── dev.ts
│   ├── middleware.ts     # Next.js middleware for authentication
├── public/             # Static assets
├── .env                # Environment variables (ignored by git)
├── components.json     # ShadCN UI configuration
├── next.config.ts      # Next.js configuration
├── package.json        # Project dependencies and scripts
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # This file
```

## Key Technologies

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS, ShadCN UI
- **Authentication:** Firebase Authentication
- **Database/Backend:** Firebase (Firestore likely needed for booking/user data persistence)
- **State Management:** React Context (for Auth), potentially others as needed
- **AI (Optional):** Genkit, Google AI
- **UI Components:** Lucide Icons, Swiper.js (for carousels)

## Contributing

Contributions are welcome! Please follow standard Git workflow (fork, branch, pull request).
