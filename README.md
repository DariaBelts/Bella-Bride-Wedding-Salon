# Bella Bride Wedding Salon

A modern, simple, and elegant frontend web application for **Bella Bride Wedding Salon** built with React, Vite, JavaScript, and CSS. This project is designed as a clean single-page application (SPA) suitable for web application hosting and DevOps training demonstrations.

## 🌸 Features

- **Navigation**: Clean header with brand logo and quick navigation links.
- **Hero Section**: Highlighting the salon's banner tagline, main title, subtitle, and call-to-action buttons.
- **Wedding Dress Collection**: Interactive gown gallery showcasing 6 sample wedding dresses (*Isabella*, *Sophia*, *Aurora*, *Olivia*, *Grace*, *Victoria*) with prices and descriptions.
- **Services**: Service highlight cards for Bridal Consultation, Dress Fitting, Alterations, and Accessories.
- **About Section**: Highlighting the salon's vision and experience.
- **Appointment / Contact Form**: Modern appointment booking form with instant client-side feedback.
- **Footer**: Salon location details (Chicago, IL) and navigation links.

---

## 🛠️ Technology Stack

- **Frontend**: React 19, Vite, JavaScript (ES Modules)
- **Styling**: Pure CSS3 with modern design token variables and responsive flex/grid layouts
- **Runtime Target**: Node.js 22 compatible
- **Containerization**: Docker (Multi-stage build) & Nginx Alpine

---

## 🚀 Local Development

### Prerequisites

Ensure Node.js 22+ and npm are installed on your environment.

### 1. Install Dependencies
```bash
npm ci
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Lint Codebase
```bash
npm run lint
```

### 4. Build Production Bundle
```bash
npm run build
```
The compiled static assets will be output to the `dist/` directory.

---

## 🐳 Docker Deployment

The application includes a multi-stage `Dockerfile` and `nginx.conf` optimized for production single-page applications.

### 1. Build Docker Image
```bash
docker build -t wedding-salon:v1 .
```

### 2. Run Container
```bash
docker run -d --name wedding-salon -p 8080:80 wedding-salon:v1
```

Access the application in your browser at `http://localhost:8080`.
