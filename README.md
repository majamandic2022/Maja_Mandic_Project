# Prerequisites

1. nodejs

2. npm or yarn

3. nvm

# Clone Project

```bash
git clone https://github.com/majamandic2022/Maja_Mandic_Project.git
```

### Run command from root dir to generate .env file from .env.example

```bash
cd lotr
```

```bash
 cp .env.example .env
```

- To fill out env variables, you have to create an account and get your api key by following this link: https://the-one-api.dev/

# How to start application

Enter directory

```bash
cd lotr
```

Set node version

```bash
 nvm use
```

If you don't have the same version of node, you have to install:

```bash
nvm install xx.x
```

than repeat nvm use

Use this to install all packages

```bash
yarn
```

or use npm if you prefer

```bash
npm install
```

Start app in dev mode

```bash
yarn dev
npm run dev
```

Runs the app in the development mode.\
Open [http://localhost:5173/](http://localhost:5173/) to view an application in the browser. \

The page will reload if you make edits.\

### Other

```bash
yarn build
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
