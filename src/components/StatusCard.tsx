interface StatusCardProps {
	title: string;
	description?: string;
	action?: React.ReactNode;
	className?: string;
}

export default function StatusCard({
	title,
	description,
	action,
	className = "",
	children,
}: React.PropsWithChildren<StatusCardProps>) {
	return (
		<div
			className={`flex items-center justify-center min-h-[400px] ${className}`}
		>
			<div className="text-center space-y-4 max-w-md w-full mx-4">
				{children}
				<div className="text-xl">{title}</div>
				{description && <div className="text-sm">{description}</div>}
				{action && <div className="mt-4">{action}</div>}
			</div>
		</div>
	);
}
