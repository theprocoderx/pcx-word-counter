# @procoderx/pcx-word-counter

> A lightweight Node.js CLI tool for counting words and generating word-frequency maps directly from the terminal.

[![npm version](https://img.shields.io/npm/v/@procoderx/pcx-word-counter.svg)](https://www.npmjs.com/package/@procoderx/pcx-word-counter)
[![npm downloads](https://img.shields.io/npm/dm/@procoderx/pcx-word-counter.svg)](https://www.npmjs.com/package/@procoderx/pcx-word-counter)
[![License](https://img.shields.io/npm/l/@procoderx/pcx-word-counter.svg)](https://www.npmjs.com/package/@procoderx/pcx-word-counter)

## Overview

`@procoderx/pcx-word-counter` is a Node.js command-line utility for analyzing words in text files.

It supports two analysis modes:

- Generate a complete word-frequency map.
- Count occurrences of a specific target word.

The CLI is available through the `pcx-word-counter` command.

---

## Features

- **Dual-Mode Analysis** — Generate a complete word-frequency map or count a specific target word.
- **Node.js CLI** — Run the tool directly from the terminal.
- **Modern ES Modules** — Built using JavaScript ES Modules.
- **Separated Architecture** — Keeps CLI handling separate from core word-counting logic.
- **Scoped npm Package** — Published under the `@procoderx` npm scope.
- **npx Support** — Run the package without a global installation.
- **Global CLI Support** — Install the package globally and use `pcx-word-counter` from anywhere.

---

## Requirements

- Node.js `18+`
- npm

Check your installed versions:

```bash
node -v
npm -v
```

---

## Quick Start

Run the package directly with `npx`:

```bash
npx @procoderx/pcx-word-counter ./file-3.txt
```

To count a specific word:

```bash
npx @procoderx/pcx-word-counter ./file-3.txt the
```

---

## Installation

### Global Installation

Install the package globally:

```bash
npm install -g @procoderx/pcx-word-counter
```

Then use the CLI:

```bash
pcx-word-counter ./file-3.txt
```

### Local Installation

Install the package in an existing Node.js project:

```bash
npm install @procoderx/pcx-word-counter
```

Run the CLI locally:

```bash
npx pcx-word-counter ./file-3.txt
```

Or:

```bash
npm exec pcx-word-counter -- ./file-3.txt
```

### Using npx Without Installation

Run the published package directly:

```bash
npx @procoderx/pcx-word-counter ./file-3.txt
```

---

## Usage

### Syntax

```bash
pcx-word-counter <path-to-file> [target-word]
```

| Argument         | Required | Description                                       |
| ---------------- | -------- | ------------------------------------------------- |
| `<path-to-file>` | Yes      | Path to the text file to analyze                  |
| `[target-word]`  | No       | Specific word whose occurrences should be counted |

---

## Examples

### Generate a Complete Word-Frequency Map

Provide only the file path:

```bash
pcx-word-counter ./file-3.txt
```

The CLI generates a frequency map containing the words found in the file and their occurrence counts.

Example:

```json
{
  "the": 12,
  "word": 5,
  "counter": 3,
  "app": 2
}
```

### Count a Specific Word

Provide a second argument containing the target word:

```bash
pcx-word-counter ./file-3.txt the
```

Example output:

```text
"the" occurs 12 times.
```

---

## Screenshots

### npx Usage

![Using @procoderx/pcx-word-counter with npx](https://raw.githubusercontent.com/theprocoderx/pcx-word-counter/main/screenshots/npx-usage.png)

### Global Installation

![Installing and using @procoderx/pcx-word-counter globally](https://raw.githubusercontent.com/theprocoderx/pcx-word-counter/main/screenshots/global-installation.png)

---

## How It Works

The application separates command-line handling from the core text-processing logic.

1. The CLI receives the file path and optional target word.
2. The application reads the specified text file.
3. The text is processed by the word-counting logic.
4. Without a target word, a complete word-frequency map is generated.
5. With a target word, the occurrence count for that word is returned.

The overall flow:

```text
Terminal Command
       ↓
process.argv
       ↓
Argument Validation
       ↓
Word Counting Logic
       ↓
Frequency Map or Target Word Count
       ↓
Terminal Output
```

---

## Project Structure

```text
pcx-word-counter/
├── bin/
│   └── pcx-word-counter.js     # CLI entry point
│
├── lib/
│   └── counter.js              # Core word-counting logic
│
├── screenshots/
│   ├── npx-usage.png           # npx usage screenshot
│   └── global-installation.png # Global CLI usage screenshot
│
├── LICENSE
├── package.json
└── README.md
```

### `bin/pcx-word-counter.js`

The CLI entry point is responsible for:

- Starting the CLI application.
- Reading command-line arguments.
- Validating CLI input.
- Calling the appropriate counting functionality.
- Displaying results in the terminal.

### `lib/counter.js`

Contains the core application logic responsible for:

- Reading the input file.
- Processing text.
- Counting words.
- Generating word-frequency data.

### `package.json`

Defines:

- Package metadata.
- npm package name and version.
- ES Module configuration.
- CLI binary mapping.
- Package configuration.

---

## npm CLI Configuration

The `bin` field exposes the `pcx-word-counter` command:

```json
{
  "bin": {
    "pcx-word-counter": "bin/pcx-word-counter.js"
  }
}
```

This creates the following relationship:

```text
pcx-word-counter
       ↓
bin/pcx-word-counter.js
       ↓
Node.js
```

The CLI entry file uses a Node.js shebang:

```js
#!/usr/bin/env node
```

This allows npm to execute the file directly as a terminal command.

---

## Error Handling

The CLI validates the required file path before processing the input.

File-system errors are reported to the terminal, for example:

```text
Failed to read file: ENOENT: no such file or directory
```

Failed operations return a non-zero process exit code.

---

## Development

Clone the repository:

```bash
git clone https://github.com/theprocoderx/pcx-word-counter.git
```

Navigate into the project:

```bash
cd pcx-word-counter
```

Install dependencies:

```bash
npm install
```

Link the package locally:

```bash
npm link
```

Test the CLI:

```bash
pcx-word-counter ./file-3.txt
```

---

## Future Improvements

Possible future versions may include:

- `--help` option
- `--version` option
- Case-insensitive matching
- Additional output formats
- Sorting options for frequency maps
- Support for more text-analysis options
- Improved CLI error messages
- Automated tests

---

## Repository

- **GitHub:** [theprocoderx/pcx-word-counter](https://github.com/theprocoderx/pcx-word-counter)
- **npm:** [@procoderx/pcx-word-counter](https://www.npmjs.com/package/@procoderx/pcx-word-counter)

---

## License

This project is licensed under the [ISC License](LICENSE).

---

## Author

**ProCoderX (Magan Singh)**

Building practical Node.js tools and developer-focused projects.

- **Website:** [procoderx.com](https://procoderx.com)
- **GitHub:** [@theprocoderx](https://github.com/theprocoderx)
- **LinkedIn:** [ProCoderX](https://www.linkedin.com/in/procoderx)
- **npm:** [@procoderx](https://www.npmjs.com/~procoderx)
- **Email:** procoderxs@gmail.com
