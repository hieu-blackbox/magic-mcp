#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { config } from "./utils/config.js";
import { setupJsonConsole } from "./utils/console.js";

import { CreateUiTool } from "./tools/create-ui.js";
import { LogoSearchTool } from "./tools/logo-search.js";
import { FetchUiTool } from "./tools/fetch-ui.js";
import { RefineUiTool } from "./tools/refine-ui.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import express from "express";
const app = express();

setupJsonConsole();

const VERSION = "0.0.35";
const server = new McpServer({
  name: "21st-magic",
  version: VERSION,
});

// Register tools
new CreateUiTool().register(server);
new LogoSearchTool().register(server);
new FetchUiTool().register(server);
new RefineUiTool().register(server);

let transport: SSEServerTransport;

app.get("/sse", (req, res) => {
    console.log("Received connection");
    transport = new SSEServerTransport("/messages", res);
    server.connect(transport);
});

app.post("/messages", (req, res) => {
    console.log("Received message handle message");
    if (transport) {
        transport.handlePostMessage(req, res);
    }
});

const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
