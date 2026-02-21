# Project Overview

## What this project is
This repository is a Laravel 8 + Vue 3 single-page application scaffold customized into an APK/library management platform.

- Backend: Laravel API with JWT authentication.
- Frontend: Vue 3 SPA mounted from a catch-all Laravel web route.
- Domain model: **Users** own **Libraries**, and Libraries contain **Files**.

## Runtime architecture

### 1) Laravel serves the SPA shell
- `routes/web.php` uses a catch-all route that always returns `welcome.blade.php`, so Vue Router handles client-side navigation.

### 2) API-first backend
- `routes/api.php` defines grouped endpoints for:
  - auth (`/auth/*`)
  - user-level library/file management
  - admin-level user/library/file management
  - filtered library/file listing endpoints

### 3) Vue app boot flow
- `resources/js/app.js` creates the Vue app, sets Axios `baseURL`, restores auth state from local storage, then mounts router + store.
- Router middleware in `resources/js/router/index.js` protects routes for guests, authenticated users, and admins.

## Core business entities

### User
- JWT-authenticated account.
- Has many libraries.
- Has a numeric `role` (default worker/user role).
- Can store push notification token and login token.

### Library
- Belongs to a user.
- Has many files.
- Can be hidden and/or PIN locked.
- Can expose a `user_login_token` for alternate login.

### File
- Belongs to a library.
- Stores metadata such as URL, package, version, description, and logo.
- Type is represented as integer in DB and mapped to readable strings in model accessor.

## Authentication and authorization
- JWT is implemented using `tymon/jwt-auth`.
- `AuthController` supports:
  - email/password login
  - login by `user_login_token`
  - secure login by library id + pin code
  - register/logout/me/refresh
  - push token persistence

## API behavior highlights
- User controllers manage their own libraries and files.
- Admin controllers manage worker users and can act on any user library context.
- Public/filter endpoints use `spatie/laravel-query-builder` for name-based filtering and pagination.

## Frontend structure
- Main modules:
  - `resources/js/views/*` page views
  - `resources/js/components/*` reusable components
  - `resources/js/store/modules/auth.js` auth state/actions
  - `resources/js/middleware/*` route guards
- Build system uses Laravel Mix (`webpack.mix.js`).

## Dependencies of note
- Backend packages: JWT auth, Spatie query builder, FCM integration, Intervention image.
- Frontend packages: Vue Router, Vuex, vform, toaster, loading overlay, route middleware helper.

## Important observations for maintainers
- The repository contains both source Vue files and prebuilt assets under `public/js/*`.
- `resources/js/settings.js` currently points to a production API host by default.
- There are legacy/extra files (e.g., `adminDashboard22.vue`, `dashboard.vue.old`, `omg-onion/*`) that appear unrelated to the main SPA flow and may need cleanup decisions.
