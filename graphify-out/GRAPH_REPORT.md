# Graph Report - caveman  (2026-07-06)

## Corpus Check
- 123 files · ~78,531 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 916 nodes · 1138 edges · 100 communities (87 shown, 13 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.72)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `25d22f86`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 59|Community 59]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 61|Community 61]]
- [[_COMMUNITY_Community 62|Community 62]]
- [[_COMMUNITY_Community 63|Community 63]]
- [[_COMMUNITY_Community 64|Community 64]]
- [[_COMMUNITY_Community 65|Community 65]]
- [[_COMMUNITY_Community 66|Community 66]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Community 68|Community 68]]
- [[_COMMUNITY_Community 69|Community 69]]
- [[_COMMUNITY_Community 70|Community 70]]
- [[_COMMUNITY_Community 71|Community 71]]
- [[_COMMUNITY_Community 72|Community 72]]
- [[_COMMUNITY_Community 73|Community 73]]
- [[_COMMUNITY_Community 74|Community 74]]
- [[_COMMUNITY_Community 75|Community 75]]
- [[_COMMUNITY_Community 76|Community 76]]
- [[_COMMUNITY_Community 77|Community 77]]
- [[_COMMUNITY_Community 78|Community 78]]
- [[_COMMUNITY_Community 79|Community 79]]
- [[_COMMUNITY_Community 80|Community 80]]
- [[_COMMUNITY_Community 81|Community 81]]

## God Nodes (most connected - your core abstractions)
1. `main()` - 18 edges
2. `main()` - 15 edges
3. `CLAUDE.md — caveman` - 12 edges
4. `Contributing to caveman` - 11 edges
5. `main()` - 10 edges
6. `detectMatch()` - 10 edges
7. `validate()` - 10 edges
8. `validate()` - 10 edges
9. `ensure()` - 10 edges
10. `runSpawn()` - 9 edges

## Surprising Connections (you probably didn't know these)
- `downloadTo()` --calls--> `require`  [INFERRED]
  bin/install.js → tests/installer/unit.settings.test.mjs
- `TestExtractInlineCodes` --uses--> `ValidationResult`  [INFERRED]
  tests/test_validate_inline.py → skills/caveman-compress/scripts/validate.py
- `TestValidateInlineCodes` --uses--> `ValidationResult`  [INFERRED]
  tests/test_validate_inline.py → skills/caveman-compress/scripts/validate.py
- `TestValidateIntegration` --uses--> `ValidationResult`  [INFERRED]
  tests/test_validate_inline.py → skills/caveman-compress/scripts/validate.py
- `parseModeChange()` --calls--> `getDefaultMode()`  [INFERRED]
  src/plugins/opencode/plugin.js → src/hooks/caveman-config.js

## Import Cycles
- None detected.

## Communities (100 total, 13 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.07
Nodes (55): absoluteNodePath(), captureSpawn(), checkNodeVersion(), checkWslWindowsNode(), child_process, copyDirRecursive(), crypto, cursorExtPresent() (+47 more)

### Community 1 - "Community 1"
Cohesion: 0.12
Nodes (27): CompletedProcess, Path, benchmark_pair(), count_tokens(), main(), print_table(), benchmark_pair(), count_tokens() (+19 more)

### Community 2 - "Community 2"
Cohesion: 0.10
Nodes (19): count_bullets(), extract_code_blocks(), extract_headings(), extract_inline_codes(), extract_paths(), extract_urls(), Line-based fenced code block extractor.      Handles ``` and ~~~ fences with v, read_file() (+11 more)

### Community 3 - "Community 3"
Cohesion: 0.09
Nodes (25): require, SETTINGS, addCommandHook(), claudeConfigDir(), crypto, fs, hasCavemanHook(), MANAGED_HOOK_BASENAMES (+17 more)

### Community 4 - "Community 4"
Cohesion: 0.10
Nodes (27): backup_dir_for(), build_compress_prompt(), build_fix_prompt(), call_claude(), compress_file(), is_sensitive_path(), Strip outer ```markdown ... ``` fence when it wraps the entire output., Send a prompt to Claude.      Prefers the Anthropic SDK when ANTHROPIC_API_KEY (+19 more)

### Community 5 - "Community 5"
Cohesion: 0.11
Nodes (20): { compress }, handle(), reader, send(), compress(), compressDescriptionsInPlace(), FILLERS, HEDGES (+12 more)

### Community 6 - "Community 6"
Cohesion: 0.08
Nodes (23): Agent distribution, Auto-clarity rule, Auto-generated / auto-synced — do not edit directly, Benchmarks, caveman-commit / caveman-review, caveman-compress, CI sync workflow, CLAUDE.md — caveman (+15 more)

### Community 7 - "Community 7"
Cohesion: 0.16
Nodes (22): appendFlag(), readHistory(), aggregateHistory(), COMPRESSION, deriveSavings(), findCompressedPairs(), findRecentSession(), formatHistory() (+14 more)

### Community 8 - "Community 8"
Cohesion: 0.09
Nodes (20): Before / After, Benchmarks, How It Work, <img src="../../docs/assets/dancing-rock.svg" width="20" height="20" alt="rock"/> Caveman (285 tokens), Install, 📄 Original (706 tokens), Part of Caveman, Security (+12 more)

### Community 9 - "Community 9"
Cohesion: 0.22
Nodes (16): count_bullets(), extract_code_blocks(), extract_headings(), extract_inline_codes(), extract_paths(), extract_urls(), Line-based fenced code block extractor.      Handles ``` and ~~~ fences with v, read_file() (+8 more)

### Community 10 - "Community 10"
Cohesion: 0.11
Nodes (18): caveman, bugs, url, engines, node, author, bin, description (+10 more)

### Community 11 - "Community 11"
Cohesion: 0.16
Nodes (14): findRepoConfigPath(), fs, getConfigDir(), getConfigPath(), getDefaultMode(), os, path, readModeFromConfigFile() (+6 more)

### Community 12 - "Community 12"
Cohesion: 0.12
Nodes (14): readFlag(), VALID_MODES, { execFileSync }, flagPath, fs, { getDefaultMode, safeWriteFlag, readFlag, VALID_MODES }, INDEPENDENT_MODES, os (+6 more)

### Community 13 - "Community 13"
Cohesion: 0.12
Nodes (15): Architecture, Backend, CLAUDE.md — Taskflow Project, Code Style, Common Commands, Database, Environment Variables, Frontend (+7 more)

### Community 14 - "Community 14"
Cohesion: 0.12
Nodes (15): Architecture, Backend, CLAUDE.md — Taskflow Project, Code Style, Common Commands, Database, Environment Variables, Frontend (+7 more)

### Community 15 - "Community 15"
Cohesion: 0.12
Nodes (15): caveman-mcp, keywords, main, directory, author, bin, description, files (+7 more)

### Community 16 - "Community 16"
Cohesion: 0.12
Nodes (15): author, bin, caveman-shrink, description, files, homepage, keywords, license (+7 more)

### Community 17 - "Community 17"
Cohesion: 0.23
Nodes (14): appendBootstrapToSoul(), frontmatterHasKey(), fs, installOpenclaw(), loadBootstrapSnippet(), loadSkillBody(), mergeOpenclawFrontmatter(), os (+6 more)

### Community 18 - "Community 18"
Cohesion: 0.14
Nodes (12): caveman-help, Example output, How to invoke, See also, What it does, Caveman Help, Configure Default Mode, Deactivate (+4 more)

### Community 19 - "Community 19"
Cohesion: 0.29
Nodes (12): call_api(), compute_stats(), dry_run(), format_prompt_label(), format_table(), load_caveman_system(), load_prompts(), main() (+4 more)

### Community 20 - "Community 20"
Cohesion: 0.18
Nodes (9): safeWriteFlag(), applyModeChange(), CavemanPlugin(), config, flagPath, handleSessionCreated(), here, INDEPENDENT_MODES (+1 more)

### Community 21 - "Community 21"
Cohesion: 0.15
Nodes (6): HERE, INSTALLER, REPO_ROOT, requireCjs, SETTINGS, SKILL_BODY_SRC

### Community 22 - "Community 22"
Cohesion: 0.15
Nodes (12): Also by Julius Brussee, Benchmarks, Caveman Ecosystem, How It Work, Install, License, Links, Lobster, Meet Rock 🦞 <img src="docs/assets/dancing-rock.svg" width="22" height="22" alt="rock"/> (+4 more)

### Community 23 - "Community 23"
Cohesion: 0.17
Nodes (11): Adding a new agent, Adding a new skill, Code style, Contributing to caveman, Ideas, Pull-request guidelines, Quick orientation, Running benchmarks and evals (+3 more)

### Community 24 - "Community 24"
Cohesion: 0.17
Nodes (11): Boundaries, Caveman Compress, Compress, Compression Rules, Pattern, Preserve EXACTLY (never modify), Preserve Structure, Process (+3 more)

### Community 25 - "Community 25"
Cohesion: 0.17
Nodes (11): Boundaries, Caveman Compress, Compress, Compression Rules, Pattern, Preserve EXACTLY (never modify), Preserve Structure, Process (+3 more)

### Community 26 - "Community 26"
Cohesion: 0.18
Nodes (9): caveman-commit, Example output, How to invoke, See also, What it does, Auto-Clarity, Boundaries, Examples (+1 more)

### Community 27 - "Community 27"
Cohesion: 0.18
Nodes (9): caveman-review, Example output, How to invoke, See also, What it does, Auto-Clarity, Boundaries, Examples (+1 more)

### Community 28 - "Community 28"
Cohesion: 0.18
Nodes (9): Always-on rules, Install caveman, Manual install (no `curl | bash`), One-liner, Per-agent install, Privacy, Troubleshooting, Uninstall (+1 more)

### Community 29 - "Community 29"
Cohesion: 0.25
Nodes (10): detect_file_type(), _is_code_line(), _is_json_content(), _is_yaml_content(), Return True if the file is natural language and should be compressed., Check if a line looks like code., Check if content is valid JSON., Heuristic: check if content looks like YAML. (+2 more)

### Community 30 - "Community 30"
Cohesion: 0.25
Nodes (10): detect_file_type(), _is_code_line(), _is_json_content(), _is_yaml_content(), Return True if the file is natural language and should be compressed., Check if a line looks like code., Check if content is valid JSON., Heuristic: check if content looks like YAML. (+2 more)

### Community 31 - "Community 31"
Cohesion: 0.18
Nodes (8): assert, { execFileSync }, fs, os, path, ROOT, STATS, TRACKER

### Community 32 - "Community 32"
Cohesion: 0.20
Nodes (9): Adding a prompt, Adding a skill, Evals, Files, Read the snapshot (no LLM, no API key, runs in CI), Refresh the snapshot (requires `claude` CLI logged in), The three arms, What this does NOT measure (+1 more)

### Community 33 - "Community 33"
Cohesion: 0.20
Nodes (5): HERE, INSTALLER, REPO_ROOT, requireCjs, SETTINGS

### Community 34 - "Community 34"
Cohesion: 0.20
Nodes (7): assert, { execFileSync }, fs, INIT, os, path, ROOT

### Community 35 - "Community 35"
Cohesion: 0.22
Nodes (8): flagPath, fs, { getDefaultMode, safeWriteFlag }, INDEPENDENT_MODES, mode, os, path, settingsPath

### Community 36 - "Community 36"
Cohesion: 0.22
Nodes (8): `caveman-activate.js` — SessionStart hook, Caveman Hooks, `caveman-mode-tracker.js` — UserPromptSubmit hook, `caveman-statusline.sh` / `caveman-statusline.ps1` — Statusline badge script, How It Works, Statusline Badge, Uninstall, What's Included

### Community 37 - "Community 37"
Cohesion: 0.25
Nodes (7): API Integration Guide, Authentication, Creating Tasks, Error Handling, Pagination, Rate Limiting, Webhooks

### Community 38 - "Community 38"
Cohesion: 0.25
Nodes (7): API Integration Guide, Authentication, Creating Tasks, Error Handling, Pagination, Rate Limiting, Webhooks

### Community 39 - "Community 39"
Cohesion: 0.25
Nodes (7): caveman-shrink, Configuration, Install, License, Status, Use it, What it does NOT touch

### Community 40 - "Community 40"
Cohesion: 0.25
Nodes (7): description, name, owner, name, url, plugins, $schema

### Community 41 - "Community 41"
Cohesion: 0.29
Nodes (6): Auto-clarity, Example, Job, Output, Refusals, Tools

### Community 42 - "Community 42"
Cohesion: 0.29
Nodes (6): Code Style, Communication Style, Testing Approach, Things to Avoid, User Preferences, Workflow Preferences

### Community 43 - "Community 43"
Cohesion: 0.29
Nodes (6): Code Style, Communication Style, Testing Approach, Things to Avoid, User Preferences, Workflow Preferences

### Community 44 - "Community 44"
Cohesion: 0.29
Nodes (6): Architecture Decision: Background Job Processing (March 2026), Design Decision: Component Library (January 2026), Meeting Notes: Security Review (February 2026), Performance Investigation: Dashboard Slowness (March 2026), Project Notes — Taskflow, Technical Debt Inventory (January 2026)

### Community 45 - "Community 45"
Cohesion: 0.29
Nodes (6): Architecture Decision: Background Job Processing (March 2026), Design Decision: Component Library (January 2026), Meeting Notes: Security Review (February 2026), Performance Investigation: Dashboard Slowness (March 2026), Project Notes — Taskflow, Technical Debt Inventory (January 2026)

### Community 46 - "Community 46"
Cohesion: 0.29
Nodes (5): HERE, REPO_ROOT, requireCjs, SHIPPED_AGENT_FILES, { stripOpencodeAgentTools }

### Community 47 - "Community 47"
Cohesion: 0.29
Nodes (6): description, main, name, private, type, version

### Community 48 - "Community 48"
Cohesion: 0.29
Nodes (6): Auto-clarity, Example, Job, Output, Refusals, Tools

### Community 49 - "Community 49"
Cohesion: 0.29
Nodes (6): Auto-clarity (inherited), Chaining patterns, Output contracts, What NOT to do, When to use cavecrew vs alternatives, Why this exists (the real win)

### Community 50 - "Community 50"
Cohesion: 0.29
Nodes (6): Auto-clarity (inherited), Chaining patterns, Output contracts, What NOT to do, When to use cavecrew vs alternatives, Why this exists (the real win)

### Community 52 - "Community 52"
Cohesion: 0.29
Nodes (5): assert, { compress, compressDescriptionsInPlace }, { getSpawnOptions }, path, ROOT

### Community 53 - "Community 53"
Cohesion: 0.33
Nodes (5): Auto-clarity, Output (receipt), Refusals (terminal lines), Scope, Workflow

### Community 54 - "Community 54"
Cohesion: 0.33
Nodes (5): Auto-clarity, Boundaries, Output, Severity, Tools

### Community 55 - "Community 55"
Cohesion: 0.33
Nodes (5): cavecrew, Example chaining, How to invoke, See also, What it does

### Community 56 - "Community 56"
Cohesion: 0.33
Nodes (5): Completed This Sprint, High Priority, Low Priority, Medium Priority, Sprint 24 — Task List

### Community 57 - "Community 57"
Cohesion: 0.33
Nodes (5): Completed This Sprint, High Priority, Low Priority, Medium Priority, Sprint 24 — Task List

### Community 58 - "Community 58"
Cohesion: 0.33
Nodes (5): caveman, Example output, How to invoke, See also, What it does

### Community 59 - "Community 59"
Cohesion: 0.33
Nodes (5): caveman-stats, Example output, How to invoke, See also, What it does

### Community 60 - "Community 60"
Cohesion: 0.53
Nodes (5): count(), fmt_pct(), main(), Read evals/snapshots/results.json (produced by llm_run.py) and report real toke, stats()

### Community 61 - "Community 61"
Cohesion: 0.33
Nodes (5): caveman — opencode plugin, What it does, What it does NOT do, What this ships, Why no separate npm package

### Community 62 - "Community 62"
Cohesion: 0.33
Nodes (5): Auto-clarity, Output (receipt), Refusals (terminal lines), Scope, Workflow

### Community 63 - "Community 63"
Cohesion: 0.33
Nodes (5): Auto-clarity, Boundaries, Output, Severity, Tools

### Community 64 - "Community 64"
Cohesion: 0.33
Nodes (5): Auto-Clarity, Boundaries, Intensity, Persistence, Rules

### Community 65 - "Community 65"
Cohesion: 0.33
Nodes (6): Before / After, <img src="docs/assets/dancing-rock.svg" width="20" height="20" alt="rock"/> Caveman Claude, <img src="docs/assets/dancing-rock.svg" width="20" height="20" alt="rock"/> Caveman Claude (19 tokens), <img src="docs/assets/dancing-rock.svg" width="22" height="22" alt="rock"/> Like this trick? Now get whole agent — **caveman-code**, 🗣️ Normal Claude, 🗣️ Normal Claude (69 tokens)

### Community 66 - "Community 66"
Cohesion: 0.33
Nodes (5): Auto-Clarity, Boundaries, Intensity, Persistence, Rules

### Community 67 - "Community 67"
Cohesion: 0.40
Nodes (4): Codex on Windows, `npx skills` symlink fallback, Want it always on (any agent)?, Windows install fallback

### Community 68 - "Community 68"
Cohesion: 0.60
Nodes (4): claude_version(), main(), Run each prompt through Claude Code in three conditions and snapshot the real L, run_claude()

### Community 69 - "Community 69"
Cohesion: 0.67
Nodes (3): count(), main(), Generate a boxplot showing the distribution of token compression per skill, com

## Knowledge Gaps
- **446 isolated node(s):** `$schema`, `name`, `description`, `name`, `url` (+441 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `validate()` connect `Community 2` to `Community 1`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Why does `validate()` connect `Community 9` to `Community 1`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **What connects `$schema`, `name`, `description` to the rest of the system?**
  _474 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.07199032062915911 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.11948790896159317 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.10160427807486631 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.08817204301075268 - nodes in this community are weakly interconnected._