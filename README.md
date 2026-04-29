# KhmerGO

A modern travel discovery and accommodation platform for Cambodia built with React, Node.js, and MySQL.

## Overview

KhmerGO is a full-stack web application that helps travelers explore destinations and accommodations across Cambodia. 

## Tech Stack

### Frontend
- **React 18** with Vite (port 5173)
- **Vite** for fast development and optimized builds
- CSS custom properties for design system
- Responsive design with mobile-first approach


### Backend
- **Node.js** with Express.js (port 5000)
- **MySQL** database (`khmergo_db`)
- JWT authentication for admin access
- RESTful API endpoints

## Project Structure

```
KhmerGo/
├── frontend/                 # Public website
│   ├── src/
│   │   ├── views/           # Page components
│   │   ├── components/      # Reusable components
│   │   ├── styles/          # CSS files organized by page
│   │   └── assets/          # Images and static files
│   ├── package.json
│   └── vite.config.js
│
└── backend/                 # API server
    ├── src/
    │   ├── controllers/     # Route handlers
    │   ├── model/          # Database queries
    │   ├── routes/         # API endpoints
    │   ├── utils/          # Helper functions
    │   ├── middleware/     # Auth and validation
    │   └── db.js           # Database connection
    ├── package.json
    └── server.js


### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone <repository-url>
cd KhmerGo

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies (from root)
cd ../frontend
npm install



### 2. Setup Database

Create MySQL database and tables:

```bash
cd backend
mysql -u root -p < path/to/schema.sql
```

Or manually create the database:

```sql
CREATE DATABASE khmergo_db CHARACTER SET utf8mb4;
USE khmergo_db;

-- Tables: provinces, places, stays, bookings, contacts, users
-- See backend migration or schema file for full DDL
```

### 3. Configure Environment

Create `.env` file in the backend folder:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=khmergo_db
JWT_SECRET=your_secret_key_here
ADMIN_PORT=5000
NODE_ENV=development
```

Create `.env` file in frontend and admin (if needed):

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

## Running the Project

### Backend (API Server)

```bash
cd backend
npm start
```

Runs on `http://localhost:5000`

**API Base:** `http://localhost:5000/api`

### Frontend (Public Website)

```bash
cd frontend
npm run dev
```

Runs on `http://localhost:5173`


Runs on `http://localhost:5174`

## Features

### Public Features
- 🏞️ Browse 25 provinces with detailed information
- 📍 Explore 75 destinations with location maps and photos
- 🏨 View 150+ accommodations with pricing and details
- 🗺️ Interactive Google Maps integration for all places and stays
- 🌐 Visit official website links for destinations and accommodations
- 📧 Contact form for inquiries and support
- 📱 Fully responsive mobile design


## Database Schema

### Key Tables

**provinces** — 25 provinces of Cambodia
- Fields: id, name, slug, province_type, description, image_url

**places** — 75 tourist destinations
- Fields: id, province_id, name, slug, tag, best_for, detail, image_url, website_url, map_embed

**stays** — 150 accommodations
- Fields: id, province_id, name, slug, stay_type, best_for, detail, price_min, price_max, currency_code, image_url, website_url, map_embed

**bookings** — Booking records
- Fields: id, user_id, stay_id, check_in, check_out, status, note

**contacts** — Contact form submissions
- Fields: id, full_name, email, subject, message, status, created_at

**users** — Admin users
- Fields: id, username, email, password_hash, role, is_active, created_at

**Last Updated:** April 2026
