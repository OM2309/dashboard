#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

// Get the project name from command line arguments (e.g., npx create octal-admin-dashboard my-app)
const projectName = process.argv[2] || 'my-admin-dashboard';

// Define paths
const projectPath = path.join(process.cwd(), projectName);
const templatePath = path.join(__dirname, '../template');

// Step 1: Create project directory
console.log(`Creating a new admin dashboard project: ${projectName}...`);
fs.ensureDirSync(projectPath);

// Step 2: Copy the template files (Dashify project) to the new project directory
console.log('Copying template files...');
fs.copySync(templatePath, projectPath, {
  filter: (src) => !src.includes('node_modules') && !src.includes('dist'),
});

// Step 3: Update package.json with the new project name
const packageJsonPath = path.join(projectPath, 'package.json');
const packageJson = fs.readJsonSync(packageJsonPath);
packageJson.name = projectName;
fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });

// Step 4: Install dependencies in the new project
console.log('Installing dependencies...');
process.chdir(projectPath);
execSync('npm install', { stdio: 'inherit' });

// Step 5: Success message
console.log(`
🎉 Project "${projectName}" created successfully!
To get started:
  cd ${projectName}
  npm run dev
`);
