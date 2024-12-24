Landing Page Project

This is a landing page project built using modern web development tools. Below you will find instructions on how to set up, run, and build the project.

Features

Development server with live reloading using Parcel.

Sass support for styles.

SVG optimization with SVGO.

Easy sharing with Ngrok.

Prerequisites

Make sure you have the following installed on your system:

Node.js (v14 or newer)

npm (comes with Node.js)

Installation

Clone the repository to your local machine:

git clone <repository-url>
cd landing

Install dependencies:

npm install

Available Scripts

Development Server

To start a development server with live reloading:

npm run dev

This will launch the project at http://localhost:1234. Any changes made to the source files will automatically reload the page.

Building for Production

To build the project for production:

npm run build

This will generate optimized files in the dist directory. The --public-url ./ ensures correct paths for relative URLs.

Optimizing SVGs

To optimize the icons.svg file:

npm run optimize-svg

This will use SVGO to clean up and compress the SVG file located in src/img/icons/icons.svg.

Sharing via Ngrok

To share your development server with others via Ngrok:

Install Ngrok if you haven't already:

npm install -g ngrok

Start the development server:

npm run dev

In another terminal, run:

ngrok http 1234

Copy the provided public URL and share it with others.

Project Structure

landing/
├── src/
│   ├── index.html        # Main HTML file
│   ├── styles/           # Styles (Sass)
│   ├── img/              # Images and icons
│   └── scripts/          # JavaScript files
├── dist/                 # Build output (generated)
├── .parcelrc             # Parcel configuration
├── package.json          # Project configuration
├── README.md             # Project documentation