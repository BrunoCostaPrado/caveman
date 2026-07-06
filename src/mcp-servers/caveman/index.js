#!/usr/bin/env node
// caveman-mcp — MCP server exposing caveman compression as a callable tool.
//
// Tools:
//   compress(text) — compress prose using caveman rules
//
// Protocol: JSON-RPC 2.0 over stdio, one JSON object per line.
// Reuses compress.js from the caveman-shrink package.

const { compress } = require('../caveman-shrink/compress.js');

const VERSION = '0.1.0';

// ── JSON-RPC over stdio ──────────────────────────────────────────────────
const reader = require('readline').createInterface({ input: process.stdin });
reader.on('line', line => {
  const trimmed = line.trim();
  if (!trimmed) return;
  let msg;
  try { msg = JSON.parse(trimmed); } catch { return; }
  handle(msg);
});

function send(msg) {
  process.stdout.write(JSON.stringify(msg) + '\n');
}

// ── Request handler ──────────────────────────────────────────────────────
function handle(msg) {
  const id = msg.id;
  const method = msg.method;

  switch (method) {
    case 'initialize': {
      send({
        jsonrpc: '2.0', id,
        result: {
          protocolVersion: '2024-11-05',
          capabilities: { tools: {} },
          serverInfo: { name: 'caveman-mcp', version: VERSION },
        },
      });
      break;
    }

    case 'notifications/initialized': {
      // No-op — client confirmed initialization.
      break;
    }

    case 'tools/list': {
      send({
        jsonrpc: '2.0', id,
        result: {
          tools: [
            {
              name: 'compress',
              description: 'Compress prose using caveman rules. Strips articles, filler, hedging, pleasantries — preserves code, URLs, paths, identifiers.',
              inputSchema: {
                type: 'object',
                properties: {
                  text: {
                    type: 'string',
                    description: 'Prose text to compress',
                  },
                },
                required: ['text'],
              },
            },
          ],
        },
      });
      break;
    }

    case 'tools/call': {
      const { name, arguments: args } = msg.params || {};
      if (name !== 'compress') {
        send({
          jsonrpc: '2.0', id,
          error: { code: -32601, message: `Tool not found: ${name}` },
        });
        break;
      }
      const text = args && args.text;
      if (typeof text !== 'string') {
        send({
          jsonrpc: '2.0', id,
          error: { code: -32602, message: 'Missing required argument: text' },
        });
        break;
      }
      const result = compress(text);
      send({
        jsonrpc: '2.0', id,
        result: {
          content: [
            {
              type: 'text',
              text: result.compressed,
            },
          ],
        },
      });
      break;
    }

    default: {
      send({
        jsonrpc: '2.0', id,
        error: { code: -32601, message: `Method not found: ${method}` },
      });
      break;
    }
  }
}
