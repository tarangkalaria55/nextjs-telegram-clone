/** biome-ignore-all lint/correctness/noUnusedVariables: aaa */
"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { useChatContext } from "stream-chat-react";
import { useCreateNewChat } from "@/hooks/useCreateNewChat";
import type { Doc } from "../../convex/_generated/dataModel";

export default function NewChatDialog({ children }: React.PropsWithChildren) {
	const [open, setOpen] = useState(false);
	const [selectedUsers, setSelectedUsers] = useState<Doc<"users">[]>([]);
	const [groupName, setGroupName] = useState("");
	const createNewChat = useCreateNewChat();
	const { user } = useUser();
	const { setActiveChannel } = useChatContext();

	const handleCreateChat = async () => {};

	return <>{children}</>;
}
