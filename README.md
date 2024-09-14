Here's a detailed `README.md` for your GitHub project "EV Charge":

---

# EV Charge

**EV Charge** is an innovative Electric Vehicle (EV) Route Optimizer web application that uses the `HERE Maps API` to facilitate efficient EV navigation and planning. The platform ensures seamless EV route planning while considering critical factors like battery percentage, route conditions, and EV model. 

Additionally, the application includes charging station estimations and emergency SOS features to enhance user safety and minimize range anxiety.

---

## Features

### 1. **EV Route Optimization**
   - Integrates the `HERE Maps API` to provide optimized routes for EV drivers.
   - Considers battery percentage, distance, route conditions, and vehicle model.
   - Automatically adjusts for detours and real-time traffic information.

### 2. **Charging Station Estimation**
   - Estimates and displays the location of charging stations along the planned route.
   - Helps users manage their journey by ensuring charging infrastructure availability throughout their travel.
   - Minimizes range anxiety by providing real-time charging station updates.

### 3. **User-Friendly Interface**
   - Easy-to-navigate UI with seamless API integration.
   - Supports EV-specific data like battery level and vehicle model for tailored route planning.
   - Comprehensive error handling for smoother user experience in diverse scenarios.

### 4. **Emergency SOS Feature**
   - Ensures user safety with an integrated emergency SOS button.
   - Offers quick access to emergency services in case of unexpected issues during the journey.

### 5. **Database Management**
   - Robust backend powered by MongoDB for user management and route history tracking.
   - Stores user profiles, EV models, and route preferences for personalized experiences.
   - Implements e-commerce functionalities for potential premium services, including route optimization and charging station reservations.

---

## Tech Stack

- **Frontend:**
  - React.js
  - HTML5 / CSS3
  - JavaScript
  - HERE Maps API for route planning and maps integration
  
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (for storing user information, EV details, and route preferences)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HringkeshSingh/Devignite-main.git
   cd Devignite-main
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file for environment variables:

   ```bash
   touch .env
   ```

   Add your HERE Maps API key and database connection details in `.env`:

   ```
   REACT_APP_HERE_MAPS_API_KEY=your_here_maps_api_key
   MONGODB_URI=your_mongodb_uri
   ```

4. Run the application:

   ```bash
   npm start
   ```

---

## Usage

1. Sign up and log in to create an account.
2. Select your EV model and input the starting and destination points.
3. The app will automatically calculate the most efficient route, considering your vehicle's battery percentage and suggest charging stations along the way.
4. Use the emergency SOS button in case of urgent situations to get quick access to help.

---

## Future Enhancements

- Integration of real-time charging station availability.
- Introduction of a premium subscription model for advanced route planning features.
- Enhanced mobile compatibility for better user experience on smaller screens.
  
---

## Contributors

- **Hringkesh Singh** - [HringkeshSingh](https://github.com/HringkeshSingh)
- **Aryav Jain** - [AryavJain14](https://github.com/AryavJain14)
- **Hringkesh Singh** - [HringkeshSingh](https://github.com/HringkeshSingh)
- **Meet Raut** - [MeetRaut](https://github.com/MeetRaut)
- **Hrishikesh Dhuri** - [HringkeshSingh](https://github.com/HringkeshSingh)

---

## Acknowledgements

- Special thanks to the **HERE Maps API** for providing the route optimization and mapping functionalities.
  
