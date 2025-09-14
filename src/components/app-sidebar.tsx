"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import type * as React from "react";
import type { ChannelFilters, ChannelSort } from "stream-chat";
import { ChannelList } from "stream-chat-react";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import NewChatDialog from "./NewChatDialog";
import { Button } from "./ui/button";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { user } = useUser();

	const filters: ChannelFilters = {
		members: { $in: [user?.id as string] },
		type: { $in: ["messaging", "team"] },
	};

	const options = { presence: true, state: true };

	const sort: ChannelSort = {
		last_message_at: -1,
	};

	return (
		<Sidebar variant="floating" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<div className="flex items-center justify-between w-full">
								<div className="flex flex-col">
									<span className="text-xs text-muted-foreground">
										Welcome back
									</span>
									<span className="text-sm font-semibold">
										{user?.firstName} {user?.lastName}
									</span>
								</div>
								<UserButton signInUrl="/sign-in" />
							</div>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu className="gap-2">
						<NewChatDialog>
							<Button className="w-full" variant="outline">
								Start New Chat
							</Button>
						</NewChatDialog>

						{/* Channels List */}
						<ChannelList
							sort={sort}
							filters={filters}
							options={options}
							EmptyStateIndicator={() => (
								<div className="flex flex-col items-center justify-center h-full py-12 px-4">
									<div className="text-6xl mb-6 opacity-20">💬</div>
									<h1 className="text-xl font-medium text-foreground mb-2">
										Ready to chat?
									</h1>
									<p className="text-sm text-muted-foreground text-center leading-relaxed max-w-[200px]">
										Your conversations will appear here once you start chatting
										with others.
									</p>
								</div>
							)}
						/>
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
