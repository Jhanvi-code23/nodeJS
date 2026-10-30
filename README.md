# Node.js Practice 🚀

A structured Node.js learning and practice repository based on **CodeWithHarry's Node.js Tutorial in Hindi**.

This repository contains my practice code, experiments, notes, and mini-exercises while learning Node.js from the basics to advanced concepts.

> **Goal:** Build a strong understanding of Node.js fundamentals and server-side JavaScript before moving on to Express.js and backend development.

---

## 📚 Learning Roadmap

### 01. Node.js Fundamentals

- [ ] What is Node.js?
- [ ] Why Node.js?
- [ ] Node.js vs JavaScript in the Browser
- [ ] JavaScript Runtime Environment
- [ ] V8 JavaScript Engine
- [ ] Node.js Architecture — Basic Understanding
- [ ] Server-side JavaScript
- [ ] Installing Node.js
- [ ] Checking Node.js Version
- [ ] Running a `.js` file using Node
- [ ] Node.js REPL
- [ ] Executing JavaScript from the Terminal

### Basic Commands

```bash
node -v
node --version
node filename.js
node
```

---

## 02. Node.js Modules

Understanding how Node.js organizes and reuses code through modules.

### CommonJS Modules

- [ ] What are modules?
- [ ] `require()`
- [ ] `module.exports`
- [ ] Exporting functions
- [ ] Exporting variables
- [ ] Exporting multiple values
- [ ] Importing custom modules
- [ ] Relative paths
- [ ] Built-in Node.js modules

### Example

```js
// math.js

function add(a, b) {
    return a + b;
}

module.exports = add;
```

```js
// app.js

const add = require("./math");

console.log(add(10, 20));
```

---

## 03. Core / Built-in Modules

Node.js provides several built-in modules that can be used without installing external packages.

### Important Modules

- [ ] `fs` — File System
- [ ] `os` — Operating System
- [ ] `path` — File and Directory Paths
- [ ] `http` — HTTP Server
- [ ] `events` — Event Handling
- [ ] `url` — URL Handling

---

# 04. File System Module — `fs` 📁

The `fs` module is used to work with files and directories.

```js
const fs = require("fs");
```

### Reading Files

- [ ] `fs.readFile()`
- [ ] Understanding asynchronous file reading
- [ ] Callback function
- [ ] `err` and `data`
- [ ] UTF-8 encoding
- [ ] Buffer basics
- [ ] `fs.readFileSync()`
- [ ] Synchronous vs asynchronous file reading

### Example

```js
const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
});
```

### Writing Files

- [ ] `fs.writeFile()`
- [ ] `fs.writeFileSync()`
- [ ] Overwriting file content
- [ ] Error handling while writing

```js
fs.writeFile("file.txt", "Hello Node.js!", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("File written successfully");
});
```

### Appending Files

- [ ] `fs.appendFile()`
- [ ] `fs.appendFileSync()`
- [ ] Difference between `writeFile()` and `appendFile()`

### Other File Operations

- [ ] `fs.rename()`
- [ ] `fs.renameSync()`
- [ ] `fs.unlink()`
- [ ] `fs.unlinkSync()`
- [ ] Checking whether a file exists
- [ ] Working with file paths

### Directories

- [ ] Creating directories
- [ ] Reading directories
- [ ] Removing directories
- [ ] Basic directory handling

---

# 05. Operating System Module — `os` 💻

The `os` module provides information about the operating system and computer.

```js
const os = require("os");
```

### Practice

- [ ] `os.platform()`
- [ ] `os.arch()`
- [ ] `os.cpus()`
- [ ] `os.hostname()`
- [ ] `os.homedir()`
- [ ] `os.tmpdir()`
- [ ] `os.totalmem()`
- [ ] `os.freemem()`
- [ ] Understanding operating-system information

### Example

```js
const os = require("os");

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem());
```

---

# 06. Path Module 🛣️

The `path` module helps in handling file and directory paths safely.

```js
const path = require("path");
```

### Topics

- [ ] `path.join()`
- [ ] `path.resolve()`
- [ ] `path.basename()`
- [ ] `path.dirname()`
- [ ] `path.extname()`
- [ ] `path.parse()`
- [ ] `path.format()`
- [ ] Absolute vs relative paths
- [ ] Working with `__dirname`
- [ ] Working with `__filename`

### Example

```js
const path = require("path");

const filePath = path.join(__dirname, "files", "data.txt");

console.log(filePath);
```

---

# 07. Asynchronous JavaScript in Node.js ⚡

Understanding asynchronous programming is essential for Node.js.

### Topics

- [ ] Synchronous execution
- [ ] Asynchronous execution
- [ ] Blocking operations
- [ ] Non-blocking operations
- [ ] Callbacks
- [ ] Callback functions
- [ ] Error-first callback pattern
- [ ] Why Node.js uses asynchronous I/O
- [ ] I/O operations
- [ ] Basic event-driven architecture

### Important Pattern

```js
function callback(err, data) {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
}
```

### Key Concept

```text
Synchronous
    ↓
Wait for operation to finish
    ↓
Continue


Asynchronous
    ↓
Start operation
    ↓
Continue other work
    ↓
Callback when operation finishes
```

---

# 08. Events & Event-Driven Programming 🔔

Node.js follows an event-driven architecture.

### Topics

- [ ] What is an event?
- [ ] Event-driven programming
- [ ] Event listeners
- [ ] Event emitters
- [ ] `EventEmitter`
- [ ] `.on()`
- [ ] `.emit()`
- [ ] Creating custom events
- [ ] Handling multiple listeners

### Example

```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("greet", () => {
    console.log("Hello Jhanvi!");
});

emitter.emit("greet");
```

---

# 09. HTTP Module 🌐

Node.js can create HTTP servers using its built-in `http` module.

```js
const http = require("http");
```

### Topics

- [ ] What is HTTP?
- [ ] Client and server
- [ ] HTTP request
- [ ] HTTP response
- [ ] Creating a basic HTTP server
- [ ] `http.createServer()`
- [ ] `request` object
- [ ] `response` object
- [ ] `response.write()`
- [ ] `response.end()`
- [ ] `response.writeHead()`
- [ ] Server listening on a port
- [ ] Handling different URLs/routes
- [ ] Basic request methods
- [ ] GET requests
- [ ] Basic POST request understanding

### Basic Server

```js
const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Hello from Node.js!");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

---

# 10. Routing with the HTTP Module 🛣️

Before using a framework, understand basic routing with Node's HTTP module.

### Topics

- [ ] `req.url`
- [ ] Checking requested URL
- [ ] Creating basic routes
- [ ] Sending different responses
- [ ] Handling 404 responses
- [ ] Understanding request methods

### Example

```js
const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Home Page");
    }

    else if (req.url === "/about") {
        res.end("About Page");
    }

    else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }
});

server.listen(3000);
```

---

# 11. CommonJS vs ES6 Modules 🔄

Node.js supports different module systems.

## CommonJS

```js
const fs = require("fs");

module.exports = something;
```

## ES6 Modules

```js
import fs from "fs";

export default something;
```

### Topics

- [ ] CommonJS modules
- [ ] `require()`
- [ ] `module.exports`
- [ ] ES6 modules
- [ ] `import`
- [ ] `export`
- [ ] Default export
- [ ] Named export
- [ ] Difference between CommonJS and ES Modules
- [ ] Module configuration
- [ ] `.mjs`
- [ ] `"type": "module"`

### Comparison

| CommonJS | ES Modules |
|---|---|
| `require()` | `import` |
| `module.exports` | `export` |
| Traditional Node.js module system | Modern JavaScript module system |

---

# 12. NPM 📦

NPM = **Node Package Manager**

It is used to manage Node.js packages and project dependencies.

### Topics

- [ ] What is NPM?
- [ ] Installing NPM
- [ ] `npm -v`
- [ ] Initializing a project
- [ ] `npm init`
- [ ] `npm init -y`
- [ ] `package.json`
- [ ] Dependencies
- [ ] Dev dependencies
- [ ] Installing packages
- [ ] Uninstalling packages
- [ ] Updating packages
- [ ] `node_modules`
- [ ] `package-lock.json`
- [ ] Local package installation
- [ ] Global package installation
- [ ] Running scripts

### Important Commands

```bash
npm init
npm init -y
npm install package-name
npm uninstall package-name
npm update
npm install -g package-name
```

---

# 13. `package.json` 📄

Understand the role of `package.json` in a Node.js project.

### Important fields

- [ ] `name`
- [ ] `version`
- [ ] `description`
- [ ] `main`
- [ ] `scripts`
- [ ] `dependencies`
- [ ] `devDependencies`
- [ ] `author`
- [ ] `license`

Example:

```json
{
    "name": "node-practice",
    "version": "1.0.0",
    "description": "Node.js practice repository",
    "main": "app.js",
    "scripts": {
        "start": "node app.js"
    }
}
```

Run:

```bash
npm start
```

---

# 14. Node.js Packages 📦

Understand how external packages extend Node.js applications.

### Topics

- [ ] What is a package?
- [ ] Installing a package
- [ ] Using an installed package
- [ ] Dependencies
- [ ] Versioning basics
- [ ] Semantic versioning basics
- [ ] `node_modules`
- [ ] `package-lock.json`

---

# 15. JSON & Node.js 🗂️

JSON is commonly used for transferring and storing structured data.

### Topics

- [ ] What is JSON?
- [ ] JSON syntax
- [ ] Objects and arrays in JSON
- [ ] `JSON.parse()`
- [ ] `JSON.stringify()`
- [ ] Reading JSON files
- [ ] Writing JSON files
- [ ] JSON in HTTP/API communication

Example:

```js
const user = {
    name: "Jhanvi",
    age: 19
};

const jsonData = JSON.stringify(user);

console.log(jsonData);
```

---

# 16. Node.js + Asynchronous Programming

Connect Node.js fundamentals with real asynchronous operations.

### Practice

- [ ] Async file reading
- [ ] Async file writing
- [ ] Callbacks
- [ ] Nested callbacks
- [ ] Error handling
- [ ] Understanding callback flow
- [ ] Avoiding unnecessary blocking operations

---

# 17. Event Loop 🔄

The Event Loop is one of the most important Node.js concepts.

### Topics

- [ ] What is the Event Loop?
- [ ] Why Node.js needs an Event Loop
- [ ] Synchronous code
- [ ] Asynchronous operations
- [ ] Call Stack
- [ ] Callback Queue
- [ ] Event Loop basics
- [ ] Timers
- [ ] Non-blocking I/O
- [ ] Execution order

### Example

```js
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");
```

Output:

```text
Start
End
Timeout
```

### Core idea

```text
JavaScript Code
      ↓
 Call Stack
      ↓
Async operation
      ↓
Event Loop
      ↓
Callback
```

---

# 18. Node.js Error Handling ⚠️

### Topics

- [ ] Understanding errors
- [ ] Runtime errors
- [ ] File-system errors
- [ ] Error-first callback pattern
- [ ] `try...catch`
- [ ] Handling synchronous errors
- [ ] Handling asynchronous errors
- [ ] Returning after an error

Example:

```js
fs.readFile("file.txt", "utf8", (err, data) => {

    if (err) {
        console.log("Error:", err);
        return;
    }

    console.log(data);
});
```

---

# 19. Node.js Project Structure 📁

Practice organizing Node.js applications properly.

Example:

```text
node-project/
│
├── src/
│   ├── app.js
│   ├── utils.js
│   └── fileOperations.js
│
├── files/
│   └── data.txt
│
├── package.json
├── package-lock.json
└── README.md
```

### Practice

- [ ] Separate files by responsibility
- [ ] Create reusable modules
- [ ] Import/export modules
- [ ] Organize folders
- [ ] Use relative paths correctly

---

# 20. Mini Practice Projects 🛠️

Apply the concepts instead of only watching tutorials.

### Project 1 — File Reader

- [ ] Read a `.txt` file
- [ ] Display its contents
- [ ] Handle file errors

### Project 2 — File Manager

Implement:

- [ ] Create file
- [ ] Read file
- [ ] Update file
- [ ] Rename file
- [ ] Delete file

### Project 3 — Notes Manager

Create a CLI-based notes system:

```text
node app.js add "Learn Node.js"
node app.js list
node app.js delete 1
```

### Project 4 — System Information Tool

Use the `os` module to display:

- [ ] OS
- [ ] CPU
- [ ] Architecture
- [ ] Memory
- [ ] Hostname

### Project 5 — Basic HTTP Server

Create:

```text
/
 /about
 /contact
 /404
```

using Node's built-in `http` module.

### Project 6 — JSON-based User System

- [ ] Store users in JSON
- [ ] Read users
- [ ] Add users
- [ ] Update users
- [ ] Delete users

---

# 21. Node.js Concepts — Quick Revision 🧠

### Node.js

> JavaScript runtime environment used to run JavaScript outside the browser.

### V8

> JavaScript engine used by Node.js.

### `fs`

> File System module.

### `os`

> Operating System module.

### `path`

> Used to work with file and directory paths.

### `http`

> Used to create HTTP servers.

### `require()`

> Loads a CommonJS module.

### `module.exports`

> Exports something from a CommonJS module.

### NPM

> Node Package Manager used to manage packages and dependencies.

### `package.json`

> Contains project metadata, scripts, and dependencies.

### Callback

> Function passed to another function to be executed later.

### Synchronous

> Operation blocks execution until it finishes.

### Asynchronous

> Operation can continue in the background while other code executes.

### Event Loop

> Mechanism that helps Node.js handle asynchronous operations and callbacks efficiently.

---

# 22. Important Differences

## `readFile()` vs `readFileSync()`

| `readFile()` | `readFileSync()` |
|---|---|
| Asynchronous | Synchronous |
| Does not block execution | Blocks execution |
| Uses callback | Returns data |
| Better for non-blocking applications | Simpler for small synchronous operations |

---

## CommonJS vs ES Modules

| CommonJS | ES Modules |
|---|---|
| `require()` | `import` |
| `module.exports` | `export` |
| Traditional Node.js approach | Modern JavaScript approach |

---

## Browser JS vs Node.js

| Browser | Node.js |
|---|---|
| Runs