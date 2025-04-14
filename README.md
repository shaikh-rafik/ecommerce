This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# 🛍️ MyShop - E-Commerce UI with FakeStore API

This is a simple e-commerce web app built using **Next.js**, **Tailwind CSS**, and **ShadCN UI**. It simulates a shopping experience by fetching products from the [FakeStore API](https://fakestoreapi.com/). Features include login, product listing, cart management, search functionality, and a clean UI with light/dark mode toggle.

---

## 📁 Project Structure

The app follows a clear folder structure inside the `app/` directory:

- `product/` - Displays all products.
- `product/[id]/` - Single product detail page.
- `product/cart/` - User cart info.
- `search/` - Product search page.

Due to FakeStore API limitations (such as no new user/product creation), only predefined data could be used.

---

## 🛠 Features Implemented

- ✅ Login page with validation
- ✅ Protected routes (user must login to access content)
- ✅ Product list and single product details
- ✅ Cart management with localStorage
- ✅ Product search functionality
- ✅ Responsive navigation bar with routes
- ✅ Dark/Light mode using Tailwind CSS

---

## 📦 Technologies Used

- **Next.js 13+** (App Router)
- **Tailwind CSS**
- **ShadCN UI**
- **Axios** (for API calls)
- **React Hot Toast** (for alerts)
- **FakeStore API** (as the backend)
- **LocalStorage** (to simulate session and cart persistence)

---

## 🔐 Application Flow

- User starts on the **Login Page**
- After login, they're redirected to the **Product Page**
- The Navbar has links to:
  - Home
  - Product
  - Cart
  - Search
  - Logout (replaces Profile if user is logged in)
- Each product links to a **Single Product Page**
- The **Cart Page** shows all selected items
- The **Search Page** allows keyword-based product filtering

---

## ⚠️ Important Note

> This project uses the [FakeStore API](https://fakestoreapi.com/) for authentication and data.  
> **Please use only the valid usernames and passwords provided by FakeStore API** to log in.  
> New user registration or product creation is not supported.

---

## 🤯 Challenges Faced

- Managing user login flow with FakeStore’s limited API
- Building a functional cart system using only frontend logic
- Filtering products and managing localStorage properly
- Creating a clean responsive UI in limited time

---

## 🙌 Special Thanks

This project was built with the help of:
- Advice and guidance from a senior developer
- Suggestions and debugging help from ChatGPT
- 1 year of frontend learning and practice

---

## 📌 Final Note

The goal was to simulate a basic shopping experience with a modern stack. While many features (like real checkout, product management, etc.) could not be added due to API limitations, the current version serves as a great practice project!

---

**Made with ❤️ by a frontend learner.**

