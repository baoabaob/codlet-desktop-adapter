# Codex Desktop Adapter

Official Codlet plugin for Codex desktop, task and transport integration

Plugin ID: `codex.desktop.adapter` · Version: `0.1.0`

## Install and update

In Codlet, choose **Add → Import plugin → GitHub**, then paste:

https://github.com/baoabaob/codlet-desktop-adapter

Use the plugin ZIP from [Releases](https://github.com/baoabaob/codlet-desktop-adapter/releases), not GitHub's generated source-code archive. Codlet follows this plugin's own release channel for updates after a GitHub installation. Private repositories and draft releases are not available to the current unauthenticated importer.

Dependencies: Core only. Install dependencies first; the current importer does not fetch them automatically.

Permissions: `ui.mainWorld`

## Development

This repository is generated from [codlet-plugins](https://github.com/baoabaob/codlet-plugins). Make changes and report issues in that development repository; edits here are not automatically merged back.

The source snapshot and pinned build dependencies are included. To rebuild this plugin:

```text
npm ci --prefix frontend
node frontend/build.mjs
```

Core's runtime SDK is supplied by Codlet. The source revision and exact files are recorded in `.codlet-distribution.json`. Windows x64 Preview is tested; Windows ARM64 and macOS real-client acceptance remain pending.

## Remove

Use the Codlet CLI or GUI. Removing the GUI or its dependency from within that GUI is intentionally protected; use the CLI.
