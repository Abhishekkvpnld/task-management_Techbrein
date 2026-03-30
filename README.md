# Task Management Dashboard

A simple and responsive **Task Management Dashboard** built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

This project was created as part of a **Frontend Software Developer Intern assignment**.

---

## 🚀 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **LocalStorage** for mock authentication and task persistence
- **Vitest + React Testing Library** for basic unit testing

---

## ✨ Features

### 1. Mock Authentication
- Simple login page
- Login state stored in `localStorage`
- Protected dashboard route
- Logout functionality

### 2. Task Dashboard
- View tasks in a clean table layout
- Each task includes:
  - Title
  - Description
  - Status
  - Due Date

### 3. CRUD Functionality
- ✅ Create Task
- ✅ Edit Task
- ✅ Delete Task
- ✅ Change Task Status

### 4. Filtering & Sorting
- Search tasks by title
- Filter tasks by status
- Sort tasks by due date

### 5. Bonus Features
- ✅ Pagination
- ✅ Responsive UI
- ✅ Basic Unit Tests
- ✅ Mock initial task data

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
