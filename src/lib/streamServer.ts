import { StreamChat } from "stream-chat";

if (!process.env.NEXT_PUBIC_STREAM_API_KEY) {
	throw new Error("NEXT_PUBIC_STREAM_API_KEY is not set");
}

if (!process.env.STREAM_API_SECRET_KEY) {
	throw new Error("STREAM_API_SECRET_KEY is not set");
}

// Initialize Stream Chat client
const serverClient = StreamChat.getInstance(
	process.env.NEXT_PUBIC_STREAM_API_KEY,
	process.env.STREAM_API_SECRET_KEY,
);

export default serverClient;
