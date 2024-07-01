# REST-Template

This repository is a RESTful template designed to accelerate the deployment of RESTful services in your future projects. It incorporates Express, MySQL, JWT, and Authorization, along with Sequelize ORM (with Relationships) to provide a robust starting point for building scalable and secure APIs.

## Features

- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **MySQL**: A popular relational database management system.
- **JWT (JSON Web Tokens)**: For secure user authentication and authorization.
- **Sequelize**: A promise-based Node.js ORM for MySQL, featuring easy-to-use relationships.

## General To-Do List
- [X] **JWT Authentication**.
- [X] **Role Based Authorization**.
- [ ] **SysOp Integration**.
- [X] **Custom Error Handling**.
- [ ] **Forget Password Mail**.
- [X] **netgsm Integration**.
- [ ] **minIO Integration**.
- [ ] **Cloudflare Integration**.
- [ ] **General Configuration File**: Users can be choose cloudflare or minio or base64.
- [ ] **File Management**.
- [X] **API Limiter**.
- [X] **Worker Subsystem**.
- [ ] **Custom Push Notification Service**.

## Endpoints To-Do List

### User Management
- [X] **/login**: User login.
- [X] **/register**: User registration.
- [X] **/resetPass**: Reset password.
- [ ] **/forgetPass**: Send reset password email with a link.
- [X] **/sendMailOTP**: Send OTP (One-Time Password) via email.
- [X] **/sendSMSOTP**: Send OTP via SMS.
- [X] **/verifyOTP**: Verify the OTP.
- [ ] **/deactivateAccount**: Deactivate user account.
- [ ] **/activateAccount**: Activate user account.
- [ ] **/deleteAccount**: Permanently delete user account after a 7-day waiting period (data retention for 10 years).
- [X] **/refreshToken**: Refresh authentication token.

### Profile Management
- [ ] **/updateProfile/:userName**: Update user profile by username.
- [ ] **/getProfile/:userName**: Get user profile by username.
- [ ] **/getPreferences/:userName**: Get user preferences by username.
- [ ] **/updatePreferences/:userName**: Update user preferences by username.
- [ ] **/getDocuments/:userName**: Get user documents by username.
- [ ] **/updateDocuments/:userName**: Update user documents by username.
- [ ] **/getRating/:userName**: Get user rating by username.
- [ ] **/updateRating/:userName**: Update user rating by username.

### System Management
- [ ] **/system/get/users**: Retrieve all users.
- [ ] **/system/get/merchants**: Retrieve all merchants.
- [ ] **/system/delete/:userName**: Delete user by username.
- [ ] **/system/delete/:merchantName**: Delete merchant by merchant name.
- [ ] **/system/update/:userName**: Update user details by username.
- [ ] **/system/update/:merchantName**: Update merchant details by merchant name.

## Getting Started

To start using this template:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/restful-template.git
   cd restful-template

2. **Install dependencies**:
   ```sh
   npm install

3. **Set up environment variables**:
   ```sh
   Create a .env file in the root directory and add your MySQL database credentials, JWT secret, and other configurations.
 
4. **Run the application**:
   ```sh
   npm start

## Contributing
Feel free to fork this repository, create a branch, and submit pull requests. Contributions are always welcome to make this template more robust and versatile.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

