# API Documentation

**Base URL**: `http://localhost:5000/api`

## 1. Auth (`/api/auth`)
- **POST `/register`** - Public. Register new user.
  - Body: `{ "name": "Aryan", "email": "a@a.com", "password": "pass" }`
  - Response: `{ "token": "jwt_string", "user": {...} }`
- **POST `/login`** - Public. Authenticate.
  - Body: `{ "email": "a@a.com", "password": "pass" }`
  - Response: `{ "token": "...", "user": {...} }`

## 2. Users (`/api/users`)
- **GET `/profile`** - User. Get current user profile.
- **PUT `/profile`** - User. Update profile.

## 3. Routes (`/api/routes`)
- **GET `/`** - Public. List routes.
- **GET `/:id`** - Public. Get route details.

## 4. Stops (`/api/stops`)
- **GET `/`** - Public. Get all stops.

## 5. Vehicles (`/api/vehicles`)
- **GET `/`** - Public. List active vehicles.
- **GET `/:id/status`** - Public. Live location/occupancy.

## 6. Journeys (`/api/journeys`)
- **POST `/plan`** - User. CORE endpoint to plan a route.
  - Body: `{ "origin": { "lat": 28.5, "lng": 77.2 }, "destination": { "lat": 28.6, "lng": 77.3 } }`
  - Response: `{ "options": [ { "routeSegments": [...], "commuteScore": 85, "estimatedTime": 45, "fare": 35 } ] }`
- **POST `/start`** - User. Begin journey tracking.
- **POST `/complete`** - User. End journey.

## 7. Crowd (`/api/crowd`)
- **GET `/status`** - Public. Current network crowding.

## 8. Predictions (`/api/predictions`)
- **POST `/crowd`** - Public. Predict crowd at a future time.
  - Body: `{ "routeId": "...", "time": "2023-10-10T10:00:00Z" }`
  - Response: `{ "predictedOccupancy": 85, "confidence": 0.92 }`

## 9. Traffic (`/api/traffic`)
- **GET `/live`** - Public. Get live congestion data.

## 10. Disruptions (`/api/disruptions`)
- **GET `/`** - Public. List active delays/incidents.

## 11. Reports (`/api/reports`)
- **POST `/`** - User. Submit community report.
- **GET `/`** - Public. View verified reports.

## 12. Wallet (`/api/wallet`)
- **GET `/`** - User. Get balance.
  - Response: `{ "balance": 850, "currency": "INR" }`
- **POST `/add-money`** - User.
  - Body: `{ "amount": 100 }`

## 13. Card (`/api/card`)
- **GET `/`** - User. Get Saarthi virtual NCMC card.

## 14. Transactions (`/api/transactions`)
- **GET `/history`** - User. List recent spends.

## 15. Notifications (`/api/notifications`)
- **GET `/`** - User. Get user alerts.

## 16. AI (`/api/ai`)
- **POST `/chat`** - User. Talk to commute assistant.
  - Body: `{ "message": "Is the Yellow Line crowded right now?" }`
  - Response: `{ "reply": "Yes, it is currently operating at 92% capacity. Consider the bus for a lighter crowd." }`

## 17. Admin (`/api/admin`)
- **GET `/overview`** - Admin. Get system-wide stats.
  - Response: `{ "totalUsers": 1500, "activeIncidents": 2, "systemHealth": "Optimal" }`

## 18. Operator (`/api/operator`)
- **GET `/fleet`** - Operator. Monitor agency vehicles.
