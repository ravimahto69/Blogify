
# Blogify

Developed a full-stack blogging platform using Next.js and MongoDB with RESTful APIs, dynamic routing, and scalable architecture. Implemented database schemas, API endpoints, and environment-based configuration, ensuring maintainable and production-ready deployment.


## Tech Stack

**Client:** Next.js 15 (App Router)

React

JavaScript (ES6+)

CSS

**Server:** Next.js 15 (App Router)

React

JavaScript (ES6+)

CSS

**Tools & Platform:** Node.js

npm

Git & GitHub
## Features

📄 Create and fetch blog posts

🔗 Dynamic routing using blog slugs

🧠 MongoDB schema-based data modeling

🔌 REST API endpoints

⚡ Fast rendering using Next.js

🗂 Organized modular folder structure

🔐 Environment variable support

🌍 Production-ready setup
## Installation

```bash
git clone https://github.com/ravimahto69/Blogify.git
cd Blogify
npm install
npm run dev
 

📂 Project Structure

Blogify/
│
├── public/                 # Static files (images, icons)
│
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── page.jsx
│   │   ├── api/
│   │   │   └── blog/
│   │   │       ├── route.js
│   │   │       ├── [slug]/route.js
│   │   │       └── slug-list/route.js
│   │
│   ├── components/         # Reusable UI components
│   ├── lib/                # Database connection logic
│   ├── schema/             # Mongoose schemas
│   └── styles/             # Global / component styles
│
├── .env.example
├── next.config.mjs
├── package.json
└── README.md

🧱 System Architecture

Client (Browser)
     |
     | HTTP Requests
     ▼
Next.js App Router
     |
     ├── Pages & Components
     ├── API Routes
     |      └── Controllers
     |
     ▼
 MongoDB Database

