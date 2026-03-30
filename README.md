# Task Management Dashboard

A simple, responsive, and modern **Task Management Dashboard** built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

This project was created as part of a **Frontend Software Developer Intern assignment** and demonstrates core frontend development concepts such as authentication flow, CRUD operations, filtering, sorting, pagination, local persistence, and component testing.

---

## 🚀 Live Overview

This application allows users to:

- Log in with mock authentication
- Manage tasks efficiently
- Perform CRUD operations
- Filter, search, and sort tasks
- Persist task data using local storage
- Navigate a clean and responsive dashboard UI

---

## 🛠️ Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **LocalStorage** (for mock authentication and task persistence)
- **Vitest**
- **React Testing Library**

---

## ✨ Features

### 1. Mock Authentication
- Simple login page
- Login state stored in `localStorage`
- Protected dashboard route
- Logout functionality

### 2. Task Dashboard
- View all tasks in a structured table layout
- Each task contains:
  - **Title**
  - **Description**
  - **Status**
  - **Due Date**

### 3. CRUD Functionality
- ✅ Create a new task
- ✅ Edit an existing task
- ✅ Delete a task
- ✅ Update task status

### 4. Filtering & Sorting
- Search tasks by title
- Filter tasks by status
- Sort tasks by due date

### 5. Bonus Features
- ✅ Pagination
- ✅ Responsive UI for mobile/tablet/desktop
- ✅ Mock initial task data
- ✅ Basic unit tests

---

## 📂 Folder Structure

```bash
app/
  login/
    page.tsx
  dashboard/
    page.tsx
  layout.tsx
  page.tsx
  globals.css

components/
  dashboard/
    DashboardHeader.tsx
    TaskFilters.tsx
    TaskFormDialog.tsx
    TaskTable.tsx
    PaginationControls.tsx
    __tests__/
      PaginationControls.test.tsx
      TaskFilters.test.tsx
  ui/
    ...

data/
  mockTasks.ts

hooks/
  useTasks.ts

lib/
  storage.ts
  __tests__/
    storage.test.ts

types/
  task.ts
```

---

## ⚙️ How to Run the App

### 1. Clone the repository

```bash
git clone https://github.com/Abhishekkvpnld/task-management_Techbrein.git
```

### 2. Navigate into the project folder

```bash
cd client
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in browser

```bash
http://localhost:3000
```

---

## 🧪 Run Tests

To run the unit tests:

```bash
npm test
```

If your project uses Vitest directly, you can also run:

```bash
npm run test
```

---

## 📌 Project Highlights

- Built using **modern Next.js App Router architecture**
- Strong focus on **component reusability**
- Clean and maintainable **TypeScript-based code structure**
- Uses **localStorage** to simulate authentication and persistence without a backend
- Includes **basic test coverage** for key components and utilities

---

## 🔐 Authentication Note

This project uses **mock authentication** for demonstration purposes only.

- No real backend or database is connected
- Login state is stored in browser `localStorage`
- Route protection is handled on the frontend

---

## 💾 Data Persistence

Tasks are persisted using **localStorage**, which means:

- Tasks remain saved even after page refresh
- No external API or backend is required
- Ideal for frontend-only demonstration projects

---

## 📸 Screenshots

You can add screenshots here for better presentation:

```md
![Login Page](./public/screenshots/login.png)
![Dashboard](./public/screenshots/dashboard.png)
```

> Create a `screenshots` folder inside `public/` and add your images there.

---

## 👨‍💻 Author

**Abhishek KV**

- Portfolio: [https://abhishekkvpnld.github.io/Portfolio/](https://abhishekkvpnld.github.io/Portfolio/)
- GitHub: (https://github.com/Abhishekkvpnld)
- LinkedIn: (http://www.linkedin.com/in/abhishek-kv-77b0b7286)

---

## 📄 License

This project is created for **learning and assignment purposes**.

You may modify and use it for personal or educational purposes.

---
