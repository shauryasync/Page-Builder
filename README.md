# Page Builder

## Live Demo

https://page-builder-nine-azure.vercel.app/

## Repository

https://github.com/shauryasync/Page-Builder

---

## Overview

Page Builder is a web application that allows users to dynamically create and customize a content page using draggable and configurable blocks. Users can add, edit, reorder, and manage content interactively within a clean interface.

---

## Features

- Add multiple block types:
  - Text Block
  - Header Block (H1, H2, H3)
  - Image Block (URL-based preview)
  - Markdown Block (live preview)

- Drag-and-drop reordering of blocks
- Inline editing for all blocks
- Delete blocks
- Persistent state using localStorage

---

## UI/UX Design Choices

The interface is designed to be clean, minimal, and easy to use.

- Card-based layout for clear separation of content blocks
- Active block highlighting to indicate focus during editing
- Subtle hover interactions for better user feedback
- Sidebar for quick access to different block types
- Balanced spacing and soft color palette for readability

The goal was to keep the UI intuitive while maintaining a modern and consistent design.

---

## Component Design

The application is structured using reusable and modular components.

- Layout Components:
  - Navbar
  - Sidebar

- Canvas Components:
  - Canvas (main working area)
  - BlockRenderer (handles dynamic rendering)

- Block Components:
  - TextBlock
  - HeaderBlock
  - ImageBlock
  - MarkdownBlock

Each block is independently managed and reusable, making the system scalable and easy to extend.

---

## State Management Strategy

The application uses a centralized state in the root component.

- All blocks are stored in a single array

- Each block contains:
  - id
  - type
  - content
  - isEditing

- All operations (add, edit, delete, reorder) update this state

- Data flows in a unidirectional manner from parent to child components

This approach ensures predictable behavior and easier debugging.

---

## Drag-and-Drop Implementation

Drag-and-drop functionality is implemented using the `dnd-kit` library.

- `DndContext` handles drag events
- `SortableContext` enables list reordering
- `useSortable` makes each block draggable
- `arrayMove` updates block positions in state

---

## Persistence

The application uses localStorage to persist data.

- On initial load, saved blocks are retrieved from localStorage
- On every update, the current state is stored again

This ensures that the page content remains intact after refreshing the browser.

---

## How to Run Locally

```bash
npm install
npm run dev
```
