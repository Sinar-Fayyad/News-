# TODO: Correct Frontend API Calls

## Tasks
- [x] Add logout functionality: Create logoutUser function in index.js to call POST /api/v0.1/logout with Authorization header, clear localStorage, and redirect to login.html.
- [x] Add logout button to index.html.
- [x] Unify API calls: Change fetch to axios in index.js for consistency with register.js.
- [x] Improve error handling: Handle 401 errors by redirecting to login.html, show user-friendly messages instead of console.error.
- [ ] Test login, register, news fetch, and logout flows.

## Dependent Files
- News-Client/index.js
- News-Client/index.html
- News-Client/register.js (minor if needed)

## Followup Steps
- Run the frontend and backend to test API calls.
- Verify token handling and error responses.
