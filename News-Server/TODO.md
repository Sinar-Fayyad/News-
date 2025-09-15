# TODO: Update User Model to Use First Name and Last Name

## Completed Tasks
- [x] Edit migration file to replace 'username' with 'first_name' and 'last_name' columns
- [x] Update User model fillable array to include 'first_name' and 'last_name'
- [x] Update AuthService register method to validate and assign 'first_name' and 'last_name'

## Pending Tasks
- [ ] Run database migration to apply schema changes (e.g., `php artisan migrate:fresh` or rollback and migrate)
- [ ] Update frontend/client-side code to send 'first_name' and 'last_name' instead of 'username' during registration
- [ ] Test user registration with first_name and last_name
- [ ] Test user login functionality
- [ ] Update any other parts of the application that reference 'username' if necessary

# TODO: Add Image and Category to News Table

## Pending Tasks
- [x] Modify migration file to add 'image' and 'category' columns
- [x] Update News model fillable array to include 'image' and 'category'
- [x] Update NewsService to validate and assign 'image' and 'category' in addNews
- [x] Update NewsFactory to generate fake 'image' and 'category' data
- [ ] Run database migration to apply schema changes (e.g., `php artisan migrate:refresh`)
- [ ] Test news creation with image and category
