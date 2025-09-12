export {};

declare namespace NodeJS {
	interface ProcessEnv {
		readonly NODE_ENV: "development" | "production" | "test";
		readonly TZ?: string;
		// clerkjs
		readonly NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
		readonly CLERK_SECRET_KEY: string;

		// Deployment used by `npx convex dev`
		readonly CONVEX_DEPLOYMENT: string;
		readonly NEXT_PUBLIC_CONVEX_URL: string;
		readonly CLERK_JWT_ISSUER_DOMAIN: string;
		readonly CLERK_PUBLISHABLE_KEY: string;
	}
}
