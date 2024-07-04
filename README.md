# AstroNet

AstroNet is a captivating web application built with React.js that allows users to embark on an extraordinary journey through the cosmos. By leveraging the power of NASA's APIs, AstroNet provides an immersive experience, enabling users to explore the wonders of the universe, from the mesmerizing Astronomy Picture of the Day to the awe-inspiring Mars Rover Photos and the breathtaking EPIC (Earth Polychromatic Imaging Camera) images.

## Live Demo

Check out the live demo of AstroNet hosted at https://nasa-api-4s7o.onrender.com/

## Features

- **Astronomy Picture of the Day**: Feast your eyes on the stunning Astronomy Picture of the Day, complete with detailed explanations and high-resolution images (when available).
- **Mars Rover Photos**: Embark on a virtual expedition across the Martian landscape by browsing through an extensive collection of photographs captured by the Curiosity rover.
- **EPIC Images**: Marvel at the captivating "Blue Marble" imagery of our planet Earth, captured by the DSCOVR satellite's EPIC camera.
- **User Authentication**: Secure your astronomical adventures with a personalized account through the user registration and login functionality.
- **Responsive Design**: Enjoy a seamless experience across various devices, ensuring optimal viewing pleasure on desktops, tablets, and mobile phones.

## Technologies Used

**Frontend:**
- React.js
- React Router
- React Bootstrap
- Axios
- Vite

**Backend:**
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT) for authentication
- bcrypt for password hashing

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)
- MongoDB (locally or a cloud service like MongoDB Atlas)
- NASA API Key (obtained from https://api.nasa.gov/)

### Installation

1. Clone the repository : git clone https://classroom.github.com/a/V1F4A3D5

2. Navigate to the project directory : 
    - cd se3040-assignment02-Sandithya21

3. Install frontend dependencies : 
    - cd frontend
    - npm install

4. Install backend dependencies : 
    - cd ../backend
    - npm install

5. Create a `.env` file in the `backend` directory and add the following environment variables :
    - MONGODB_URL=mongodb+srv://Nasa:1234@cluster0.xyyr78p.mongodb.net/Nasa_db
    - JWT_SECRET=mysecret

6. Create a `.env` file in the `frontend` directory and add the following environment variable:
    - VITE_API_KEY=YRDV2UhjE4wu2XkwcGsdu1LLu7co6maD8l6hEayo

### Running the Application

1. Start the backend server:
    - cd backend
    - npm start

The backend server will start running on `http://localhost:8088`.

2. In a new terminal window, start the frontend development server :
    - cd frontend
    - npm run dev

The frontend development server will start running on `http://localhost:5173`. The application will automatically open in your default browser.

3. Register a new user or log in with existing credentials to access the protected routes.

## Deployment

To deploy the application, follow these steps:

1. Build the frontend React app:
    - cd frontend
    - npm run build

2. Copy the `dist` folder from the `frontend` directory to the backend directory.

3. Update the `server.js` file in the `backend` directory to serve the static files from the `dist` folder.

4. Deploy the `backend` directory to your hosting platform, ensuring that the required environment variables are set correctly.

## Brief Report

AstroNet harnesses the power of three captivating NASA APIs: the Astronomy Picture of the Day API, the Mars Rover Photos API, and the EPIC (Earth Polychromatic Imaging Camera) API. These APIs provide a wealth of astronomical data and imagery, allowing users to explore the universe from the comfort of their devices.

During the development process, several challenges were encountered and overcome:

1. **API Integration**: Integrating multiple APIs with different data structures and response formats required careful handling and parsing of the received data. This challenge was addressed by leveraging the Axios library for making HTTP requests and handling responses efficiently.

2. **User Authentication**: Implementing a secure user authentication system was crucial to provide personalized experiences and protect user data. This was achieved by utilizing JSON Web Tokens (JWT) for token-based authentication and bcrypt for securely hashing user passwords.

3. **Responsive Design**: Ensuring a seamless experience across various devices posed a challenge. This was tackled by utilizing the responsive utilities and grid system provided by React Bootstrap, along with custom CSS styles tailored to different screen sizes and resolutions.

4. **Performance Optimization**: Delivering a smooth and responsive user experience was a priority. To address this, techniques such as code splitting, lazy loading, and optimizing image sizes were employed to minimize load times and enhance overall performance.

5. **Error Handling**: Gracefully handling errors and providing informative feedback to users was essential. This was accomplished by implementing robust error handling mechanisms, catching exceptions, and displaying appropriate error messages or fallback components.

Throughout the development process, the team collaborated closely, leveraged best practices, and continuously improved the codebase to deliver a polished and engaging application.
