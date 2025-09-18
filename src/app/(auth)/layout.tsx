"use client";

export default function AuthLayout({ children }: React.PropsWithChildren) {
	return <div className="flex min-h-full flex-col">{children}</div>;
}
