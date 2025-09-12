"use client";

import { useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { env } from "@/lib/env";
import type { FCWithChildren } from "@/types/react-types";

const convex = new ConvexReactClient(env.NEXT_PUBLIC_CONVEX_URL);

const ConvexClientProvider: FCWithChildren = ({ children }) => {
	return (
		<ConvexProviderWithClerk client={convex} useAuth={useAuth}>
			{children}
		</ConvexProviderWithClerk>
	);
};

export default ConvexClientProvider;
