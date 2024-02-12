# 📚 Read-Excel

A simple and efficient Node.js project to convert Excel files to JSON format, leveraging TypeScript for type safety and better development experience. This utility reads data from an Excel file, converts it to CSV, and finally outputs it as a JSON file, perfect for integrating Excel data into your web projects or for processing bulk data efficiently.

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repo
   ```sh
   git clone https://yourproject.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
   or if you use yarn,
   ```sh
   yarn install
   ```

### Usage

To start the conversion process, run:

```sh
npm start
```

or if you're using yarn:

```sh
yarn start
```

This will read the Excel file located in `data/books.xlsx`, convert it to a temporary CSV file, and ultimately generate a JSON file in the `temp` directory.

## 📁 Project Structure

- `index.ts`: The entry point of the application. Handles the conversion logic.
- `file-utils.ts`: Utility functions for file operations, including reading from Excel, writing to CSV, and generating JSON.
- `data/`: Directory containing sample Excel files to be converted.
- `temp/`: Temporary directory for intermediate CSV files and the final JSON output.

## 🛠 Built With

- [Node.js](https://nodejs.org/) - The runtime environment.
- [TypeScript](https://www.typescriptlang.org/) - The programming language used.
- [ExcelJS](https://github.com/exceljs/exceljs) - For reading Excel files.
- [csvtojson](https://github.com/Keyang/node-csvtojson) - For converting CSV to JSON.
