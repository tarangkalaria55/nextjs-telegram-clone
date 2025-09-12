import { z } from "zod";

const envSchema = z.object({
	NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z
		.string()
		.min(1)
		.startsWith(
			"pk_",
			"Invalid NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env file",
		),
	CLERK_SECRET_KEY: z
		.string("Missing CLERK_SECRET_KEY in your .env file")
		.min(1)
		.startsWith("sk_", "Invalid CLERK_SECRET_KEY in your .env file"),

	CONVEX_DEPLOYMENT: z.string("Missing CONVEX_DEPLOYMENT in your .env file"),
	NEXT_PUBLIC_CONVEX_URL: z.url(
		"Missing NEXT_PUBLIC_CONVEX_URL in your .env file",
	),
	CLERK_JWT_ISSUER_DOMAIN: z.url(
		"Missing CLERK_JWT_ISSUER_DOMAIN in your .env file",
	),
	CLERK_PUBLISHABLE_KEY: z
		.string("Missing CLERK_PUBLISHABLE_KEY in your .env file")
		.startsWith("pk_", "Invalid CLERK_PUBLISHABLE_KEY in your .env file"),

	// Node environment
	NODE_ENV: z
		.enum(["development", "production", "test"])
		.default("development"),
	TZ: z.string().optional(),
});

const env = envSchema.parse(process.env);

export { env };
