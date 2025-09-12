import { StreamChat } from "stream-chat";

if (!process.env.NEXT_PUBIC_STREAM_API_KEY) {
	throw new Error("NEXT_PUBIC_STREAM_API_KEY is not set");
}

// Initialize Stream Chat client
const streamClient = StreamChat.getInstance(
	process.env.NEXT_PUBIC_STREAM_API_KEY,
);

export default streamClient;
