# AI Architecture

## Overview
SaarthiAI's intelligence layer combines multiple specialized AI modules designed to process vast amounts of unstructured real-world mobility data into actionable, personalized recommendations for the commuter.

## Modules

### 1. Crowd Prediction
- **Purpose**: Estimates future occupancy of vehicles and stations.
- **Input schema**: `time, dayOfWeek, routeId, weatherConditions, localEvents`
- **Output schema**: `predictedOccupancy (0-100), confidenceInterval`
- **Algorithm**: Time-series forecasting combined with event-based anomaly detection.
- **Example**: Input `(Monday, 9:00 AM, Route-14, Clear, No Events)` → Output `(Occupancy: 95%, Confidence: high)`.

### 2. Route Recommendation / Scoring
- **Purpose**: Ranks possible journeys based on dynamic conditions and user preferences.
- **Input schema**: `availableRoutes[], userPreferences (weights), liveCrowd, liveTraffic, fare`
- **Output schema**: `rankedRoutes[] with commuteScore`
- **Algorithm**: Weighted multi-objective optimization function.
- **Example**: Chooses a 40-min bus ride over a 35-min metro ride if the user prioritizes "low crowd" and the metro is severely congested.

### 3. Disruption Prediction
- **Purpose**: Anticipates delays caused by external factors.
- **Input schema**: `weatherForecast, historicalDelayData, socialMediaFeeds`
- **Output schema**: `riskLevel, affectedRoutes, estimatedDelayMinutes`
- **Algorithm**: NLP for feed parsing and probabilistic risk modeling.

### 4. Fare Optimization
- **Purpose**: Recommends the best ticketing strategy.
- **Input schema**: `userJourneyHistory, availablePasses`
- **Output schema**: `recommendedPass, estimatedMonthlySavings`
- **Algorithm**: Historical spend analysis matched against pass pricing thresholds.

### 5. Commute Assistant (Chat)
- **Purpose**: Conversational interface for mobility queries.
- **Input schema**: `userQueryString, context (currentLocation, activeJourney)`
- **Output schema**: `textResponse, suggestedActions[]`
- **Algorithm**: LLM (OpenAI/Gemini) with Retrieval-Augmented Generation (RAG) providing live API context.

### 6. Smart Boarding Recommendation
- **Purpose**: Suggests which specific metro coach to board.
- **Input schema**: `stationPlatform, upcomingTrainOccupancyArray`
- **Output schema**: `recommendedCoachIndex`
- **Algorithm**: Real-time load balancing heuristic based on station exit proximity.

### 7. Last-Mile Intelligence
- **Purpose**: Connects users from transit hubs to exact destinations.
- **Input schema**: `transitHubLocation, finalDestination, timeOfDay`
- **Output schema**: `options[] (e.g., E-Rickshaw, Auto, Walking)`
- **Algorithm**: Geofencing and localized availability heuristics.

### 8. Green Score Calculation
- **Purpose**: Gamifies sustainable transit choices.
- **Input schema**: `journeyDistance, modeOfTransport`
- **Output schema**: `carbonSavedGrams`
- **Algorithm**: Standard emission factor multiplication (e.g., Car CO2/km - Metro CO2/km).

## Explainable AI
Every recommendation provided by SaarthiAI includes a human-readable explanation to build trust.
**Example**: "We recommended Route B because although it takes 4 minutes longer, Route A is currently experiencing a severe delay due to waterlogging near Sector 18."

## Future Integration
Currently, the system uses mock ML heuristic endpoints for deterministic demonstrations. The architecture is fully prepared to connect to real ML models (e.g., Python microservices via FastAPI) and LLM APIs via environment variables (`AI_API_KEY`, `ML_SERVICE_URL`).
