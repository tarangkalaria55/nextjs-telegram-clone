"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "@/types/react-types";

const Header: FC = () => {
	const pathname = usePathname();
	const isDashboard = pathname.startsWith("/dashboard");
	return (
		<header>
			<Link
				href="/dashboard"
				className={`${isDashboard ? "text-violet-400" : "text-red-400"}`}
			>
				Beam
			</Link>
		</header>
	);
};

export default Header;
