# Landing Page Project

## This is a landing page project built using modern web development tools. Below you will find instructions on how to set up, run, and build the project.

Features:
  - Development server with live reloading using Parcel.
  - Sass support for styles.
  - SVG optimization with SVGO.
  - Easy sharing with Ngrok.

Make sure you have the following installed on your system:
  - Node.js
  - npm (comes with Node.js)

## Installation

- Clone the repository to your local machine(Run commands in terminal):
    `git clone https://github.com/vkasii/Landing.git`
    `cd landing`
    
- Install dependencies:
    `npm install`

- To start a development server with live reloading:
    `npm run dev`

This will launch the project at http://localhost:1234.

## If you want to share a URL, you need to follow these steps \
Open another terminal

- You need to optimize the icons.svg file:
    `npm run optimize-svg`
  
- Building for Production /
To build the project for production:
    `npm run build`

This will generate optimized files in the dist directory. The --public-url ./ ensures correct paths for relative URLs.

- Sharing via Ngrok
To share your development server with others via Ngrok:

Install Ngrok if you haven't already:
    `npm install -g ngrok`
  
Run `ngrok http 1234` in terminal
  
Copy the provided public URL and share it with others.

### PS(Don't forget to execute the `npm run dev` command in parallel in the terminal)
