"use client";

import UserSyncWrapper from "@/components/UserSyncWrapper";

function Layout({ children }: React.PropsWithChildren) {
	return <UserSyncWrapper>{children}</UserSyncWrapper>;
}
export default Layout;
