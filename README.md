
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


## Screeenshot

<img width="1920" height="1080" alt="Screenshot 2025-12-26 142039" src="https://github.com/user-attachments/assets/3c02a61b-cb59-4139-9d55-8293808e4f03" />
<img width="1920" height="1080" alt="Screenshot 2025-12-26 142105" src="https://github.com/user-attachments/assets/f5b524d6-00d0-4463-bbdc-6a87b7bd9514" />
<img width="1920" height="1080" alt="Screenshot 2025-12-26 142131" src="https://github.com/user-attachments/assets/c95c71c8-f2fe-4702-9942-f50f9e3b63eb" />
<img width="1920" height="1080" alt="Screenshot 2025-12-26 142240" src="https://github.com/user-attachments/assets/1fa5a05c-c2f8-425f-a577-923953802386" />
<img width="1920" height="1080" alt="Screenshot 2025-12-26 142318" src="https://github.com/user-attachments/assets/e1bdbaa9-9d18-4834-8b5e-16e644468ec3" />

