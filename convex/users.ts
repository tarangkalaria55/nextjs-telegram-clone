import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Get user by Clerk UserIds
export const getUserByClerkUserId = query({
	args: { userId: v.string() },
	handler: async (ctx, { userId }) => {
		if (!userId) return null;
		return await ctx.db
			.query("users")
			.withIndex("by_userId", (q) => q.eq("userId", userId));
	},
});

// Create or update user (sync from Clerk)
export const upsertUser = mutation({
	args: {
		userId: v.string(),
		name: v.string(),
		email: v.string(),
		imageUrl: v.string(),
	},
	handler: async (ctx, { userId, name, email, imageUrl }) => {
		const existingUser = await ctx.db
			.query("users")
			.withIndex("by_userId", (q) => q.eq("userId", userId))
			.first();

		if (existingUser) {
			await ctx.db.patch(existingUser._id, { name, email, imageUrl });
			return existingUser._id;
		}

		await ctx.db.insert("users", { userId, name, email, imageUrl });
	},
});

// Search users by name or email
export const searchUser = query({
	args: { searchTerm: v.string() },
	handler: async (ctx, { searchTerm }) => {
		if (!searchTerm.trim()) return [];

		const normalizedSearch = searchTerm.trim().toLowerCase();

		const allUsers = await ctx.db.query("users").collect();

		return allUsers
			.filter(
				(user) =>
					user.name.toLowerCase().includes(normalizedSearch) ||
					user.email.toLowerCase().includes(normalizedSearch),
			)
			.slice(0, 20);
	},
});
