"use client";

import { useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
	throw new Error("Missing NEXT_PUBLIC_CONVEX_URL from .env");
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

function ConvexClientProvider({ children }: React.PropsWithChildren) {
	return (
		<ConvexProviderWithClerk client={convex} useAuth={useAuth}>
			{children}
		</ConvexProviderWithClerk>
	);
}

export default ConvexClientProvider;
