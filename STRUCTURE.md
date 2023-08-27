# Structure of the Web Application

- This Markdown file specifies the architecture of this web application frontend developed using React.js via Visual Studio Code

## Components

### Navigation bar

- Directory: /src/Components/Navigation/Navbar.jsx

- Made with <nav></nav> tags and <NavLink></NavLink> tags
- {App Title} | Home | Status | (Login | Register : Logout)
- Login, Register, and Logout will be performed through buttons

### Footer

- Directory: /src/Components/Navigation/BottomNav.jsx

- Includes full navigation map of the website
- Home(with extra explanations) | Status(with extra explanations) | Credits | Documentations

### LoginForm

- Directory: /src/Components/Forms/LoginForm.js

### RegisterForm

- Directory: /src/Components/Forms/RegisterForm.js

### ResetForm

- Directory: /src/Components/Forms/ResetForm.js

## Pages

### Home

- Directory: /src/Pages/Home.jsx

- Main Home for the website
- Contains brief abstract of the application and the award point system

### Status

- Directory: /src/Pages/Status.jsx

- Page to check the status of your room
- Provides Daily Data and Weekly Data and the Final Result
- Mini side navbar for <Status /> exclusively to navigate between the result mappings

### Login

- Directory: /src/Pages/Login.jsx

- Page to perform login process for the head and vice of the department of environment in Korea Minjok Leadership Academy.
- Input: Username & Password
- Buttons to navigate to <Register /> or <Reset /> to perform further actions
- Auto navigates to <Home />, if the authorization process is valid without errors.
- Imports the <LoginForm /> JSX component for the login form

### Register

- Directory: /src/Pages/Register.jsx

- Page to perform register process for the head and vice of the department of environment in Korea Minjok Leadership Academy.
- Input: Username(Full name in Korean) & Email & Password & Wave & Student ID(ex. 221029)
- Buttons to navigate to <Login /> or <Reset /> to perform further actions
- Auto navigates to <Login />, if the user creating process is valid without errors.
- Imports the <RegisterForm /> JSX component for the login form

### Reset

- Directory: /src/Pages/Reset.js

- Page to reset the password for the admin account.
- Input: Student ID & Email
- Buttons to navigate to <Login /> or <Register /> to perform further actions
- Auto navigates to <Login />, if the password reset process is valid without errors.
- Imports the <ResetForm /> JSX component for the login form
