"use client";

import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import { Chat } from "stream-chat-react";
import { AppSidebar } from "@/components/app-sidebar";
import UserSyncWrapper from "@/components/UserSyncWrapper";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import streamClient from "@/lib/stream";

export default function Layout({ children }: React.PropsWithChildren) {
	return (
		<UserSyncWrapper>
			<Chat client={streamClient}>
				<SidebarProvider
					style={
						{
							"--sidebar-width": "19rem",
						} as React.CSSProperties
					}
				>
					<AppSidebar />
					<SidebarInset>
						<header className="flex h-16 shrink-0 items-center gap-2 px-4">
							<SidebarTrigger className="-ml-1" />
							<Separator
								orientation="vertical"
								className="mr-2 data-[orientation=vertical]:h-4"
							/>
							<Link href="/dashboard">
								<h1 className="text-lg font-bold tracking-wider uppercase">
									Appliquer Chat
								</h1>
							</Link>
						</header>
						<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
							{children}
						</div>
					</SidebarInset>
				</SidebarProvider>
			</Chat>
		</UserSyncWrapper>
	);
}
