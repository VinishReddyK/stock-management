# Stock Management

## Introduction

For the retail shops those who wants a better management software experience for streamlining their supply chain along with their storage in warehouse, the inventory management system will provide a smooth experience. In this competitive environment of businesses, the management of stock plays an important role to be effective in the business compared to others.

## Stock Management Installation

### Prerequisites

- The first thing you will be needing is the npm so to get npm we will first download nod because it will have built in npm in it and it is the only way to install npm effortlessly [download node](https://nodejs.org/en/download)
- After installing the node test for npm using the follwoing command
  ```bash
  npm --version
  ```
- After successfully gettin npm on to the system we then have to install yarn which will build the ui files faster and more efficiently like npm yarn is also a node package manager
  ```bash
  npm install --global yarn
  ```
- The third requirement will be clong the project and getting it onto your system.

  ```bash
  git clone https://github.com/VinishReddyK/stock-management.git
  cd stock-management
  ```

### Run the project

1. Open a new terminal or commandprompt at the root of the project repository then navigate to Stock Management server folder and install the packages and start the server the following commands would be useful for that:
   ```bash
   cd server
   npm i
   npm start
   ```
2. There is no need start any server for database since we are using sqlite it is a serverless databse which makes it easier to setup so no commands for that are included it is bundled in with ther server.

3. Open a new terminal or commandprompt at the root of the project repository and runn yarn with yarn deployement commands those are listed below:
   ```bash
   yarn
   yarn run dev
   ```
4. You can now access the app if you follow on of the links that appear after running yarn run dev command at the ui files assuming you started the server first. The will usually be localhost running on port 5172 ([http://localhost:5173](http://localhost:5173)) but for reliability follow the link that appears.
