# Cloud Monitor Dashboard

## Overview

This project is a Cloud Monitor Dashboard built using the Vite + React template. It provides a user-friendly interface for monitoring cloud resources in a tabular format and visualizing key metrics through charts. Mock data is used to simulate CPU utilization, resource usage, server status, and notifications.

## Features

- **Tabular Data:**

  - Display cloud resources in a responsive tabular format.
  - Columns include Name, Status, Account, and Region.

- **Charts:**

  - Visualize key metrics using various charts.
  - Charts include CPU Utilization, Resource Usage, and Server Status.

- **Notifications:**
  - Simulated real-time notifications for cloud operation scenarios.
  - Notifications include server overload, downtime, etc.

## Technologies Used

- **Vite:** Fast, modern, and scalable build tool for web development.
- **React:** A JavaScript library for building user interfaces.
- **Mock Data:** Simulated data for cloud resources, charts, and notifications.

## Project Structure

cloud-monitor-dashboard/
|-- src/
| |-- components/
| | |-- alerts/
| | |-- cloud-resources-grid/
| | |-- cpu-usage/
| | |-- memory-consumption/
| | |-- navbar/
| | |-- resource-usage/
| | |-- server-status/
| | |-- index.jsx
| |-- pages/
| | |-- error/
| | |-- home-layout/
| | |-- landing/
| | |-- index.js
| |-- App.jsx
| |-- index.css
| |-- main.jsx
|-- package.json
|-- package-lock.json
|-- .eslintrc.cjs
|-- index.html
|-- .gitignore
|-- README.md
|-- vite.config

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone <https://github.com/dhilu0001/cloud-monitor-dashboard.git>
   ```

2. **Install Dependencies::**
   cd your-project-directory
   npm install
3. **Run the Development Server:::**
   npm run dev

4. **Open in Browser:::**
   Open your browser and navigate to http://127.0.0.1:5173/ to view the Cloud Monitor Dashboard.
