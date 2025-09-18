// export {};

declare namespace NodeJS {
	interface ProcessEnv {
		readonly NODE_ENV: "development" | "production" | "test";
		readonly TZ?: string;

		// clerkjs
		readonly NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
		readonly CLERK_SECRET_KEY: string;

		readonly NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL: string;
		readonly NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL: string;
		readonly NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL: string;
		readonly NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL: string;

		// Deployment used by `npx convex dev`
		readonly CONVEX_DEPLOYMENT: string;
		readonly NEXT_PUBLIC_CONVEX_URL: string;

		// This needs to be added to convex
		readonly CLERK_JWT_ISSUER_DOMAIN: string;
		// readonly CLERK_PUBLISHABLE_KEY:string
		// readonly NEXT_PUBLIC_CLERK_FRONTEND_API_URL:string

		// Stream
		readonly NEXT_PUBLIC_STREAM_API_KEY: string;
		readonly STREAM_API_SECRET_KEY: string;
	}
}
