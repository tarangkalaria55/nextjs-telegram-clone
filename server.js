const { createServer } = require("node:http");
const { parse } = require("node:url");
const next = require("next");
const path = require("node:path");

const dir = path.join(__dirname);
process.chdir(__dirname);

const dev = process.env.NODE_ENV !== "production"; // production

const pipeName =
	process.env.PORT && Number.isNaN(Number(process.env.PORT))
		? process.env.PORT
		: undefined;
const portNumber = !pipeName ? Number(process.env.PORT) || 3000 : undefined;
const port = pipeName ?? portNumber ?? 3000;
// const hostname = process.env.HOSTNAME || "0.0.0.0";

const app = next({
	dev,
	dir: dir,
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = createServer((req, res) => {
		const parsedUrl = parse(req.url, true);
		handle(req, res, parsedUrl);
	}).listen(port);
	console.log(
		`> Ready on http://${server.address().address}:${server.address().port}`,
	);
});
