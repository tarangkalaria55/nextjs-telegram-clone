/** biome-ignore-all lint/a11y/useSemanticElements: custom role attribute */

import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
	size?: "sm" | "md" | "lg";
	message?: string;
	className?: string;
	showMessage?: boolean;
}

export function LoadingSpinner({
	size = "md",
	message = "Loading...",
	className,
	showMessage = true,
}: LoadingSpinnerProps) {
	const sizeClasses = {
		sm: "w-4 h-4 border-z",
		md: "w-6 h-6 border-z",
		lg: "w-8 h-8 border-[3px]",
	};

	const containerPadding = {
		sm: "min-h-[60px]",
		md: "min-h-[80px]",
		lg: "min-h-[100px]",
	};

	return (
		<div
			className={cn(
				"flex flex-col items-center justify-center",
				containerPadding[size],
				className,
			)}
		>
			<div
				className={cn(
					"border-muted-foreground/20 border-t-primary rounded-full animate-spin",
					sizeClasses[size],
				)}
				role="status"
				aria-label="Loading"
			/>
			{showMessage && (
				<p className="mt-3 text-sm text-muted-foreground animate-pulse">
					{message}
				</p>
			)}
		</div>
	);
}

export function InlineSpinner({
	size = "md",
	className,
}: Pick<LoadingSpinnerProps, "size" | "className">) {
	const sizeClasses = {
		sm: "w-4 h-4 border-2",
		md: "w-5 h-5 border-2",
		lg: "w-6 h-6 border-2",
	};

	return (
		<div
			className={cn(
				"border-muted-foreground/20 border-t-primary rounded-full animate-spin",
				sizeClasses[size],
				className,
			)}
			role="status"
			aria-label="Loading"
		/>
	);
}
