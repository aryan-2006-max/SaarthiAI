# SaarthiAI — Detailed Project Report

## Intelligent Mobility Ecosystem for India

> **Plan smarter → Predict better → Travel easier**
>
> *SaarthiAI = One intelligent platform for the entire Indian commuting journey.*

---

## Table of Contents

1. [Problem Statement](#1-problem-statement)
2. [Solution Overview](#2-solution-overview)
3. [Key Differentiator](#3-key-differentiator)
4. [System Architecture](#4-system-architecture)
5. [Technology Stack](#5-technology-stack)
6. [Feature Breakdown](#6-feature-breakdown-26-modules)
7. [AI Intelligence Layer](#7-ai-intelligence-layer-8-modules)
8. [Database Architecture](#8-database-architecture-22-collections)
9. [API Architecture](#9-api-architecture-18-route-groups)
10. [Frontend Architecture](#10-frontend-architecture-25-screens)
11. [Dark Mode Implementation](#11-dark-mode-implementation)
12. [Demo Scenario — Step by Step](#12-complete-demo-scenario)
13. [Transaction Flow Demo](#13-transaction-flow-demo)
14. [Live Bus Tracking System](#14-live-bus-tracking-system)
15. [AI Bus Deployment Optimizer](#15-ai-bus-deployment-optimizer)
16. [Implementation Plan — Phase-wise](#16-implementation-plan)
17. [Project Structure](#17-project-structure)
18. [Simulated vs Real Features](#18-simulated-vs-real-features)
19. [India-First Design Principles](#19-india-first-design-principles)
20. [Future Roadmap](#20-future-roadmap-8-phases)
21. [Conclusion](#21-conclusion)

---

## 1. Problem Statement

Indian commuters face a **fragmented public transportation ecosystem** with no unified intelligence system. Existing mobility apps provide basic information — route discovery, booking, ticketing, and tracking — but they fail to answer the most critical question a commuter has:

> **"What is the BEST way for ME to travel RIGHT NOW?"**

### Specific Challenges

| Challenge | Description |
|-----------|-------------|
| **No Unified Intelligence** | No single platform considers crowd levels, traffic, weather, safety, accessibility, and personal preferences together |
| **Unpredictable Crowding** | Commuters board overcrowded buses/metros with no advance warning |
| **Fragmented Last Mile** | No integration between metro/bus and e-rickshaws/autos for last-mile connectivity |
| **No Personalization** | Every commuter gets the same information regardless of their priorities (time vs cost vs comfort) |
| **No Proactive Alerts** | Disruptions, delays, and weather impacts are discovered only upon arrival |
| **No Authority Intelligence** | Transport authorities lack data-driven tools for fleet optimization and demand prediction |

---

## 2. Solution Overview

SaarthiAI is an **AI-powered intelligent mobility ecosystem** that doesn't just show information — it thinks, predicts, and recommends.

*Inspired by global intelligent mobility practices (Japan's integrated transit, Singapore's crowd analytics, London's Oyster ecosystem), SaarthiAI is designed around India's unique multimodal and last-mile transportation ecosystem.*

### Core Innovation Pipeline

```
    RAW DATA                    AI ENGINE                     USER ACTION
    ─────────                   ──────────                    ───────────
    Traffic feeds        →      Crowd Prediction        →     "Board Bus 127 now"
    Weather data         →      Route Scoring           →     "Take Route B today"
    Crowd sensors        →      Disruption Prediction   →     "Switch to alternative"
    Transport schedules  →      Personalization         →     "Save ₹170 with pass"
    User history         →      Fare Optimization       →     "Wait 7 min for comfort"
```

### Three-Tier User System

| User Role | What They Get |
|-----------|---------------|
| **Commuter** | AI-powered route recommendations, crowd predictions, wallet, safety mode, green tracking |
| **Transport Operator** | Fleet analytics, vehicle occupancy monitoring, revenue dashboards |
| **City Admin / Authority** | Demand prediction, bus deployment optimization, crowd heatmaps, city analytics |

---

## 3. Key Differentiator

> [!IMPORTANT]
> SaarthiAI proposes an **integrated AI intelligence layer** that combines prediction, personalization, recommendation, and action for India's fragmented multimodal commuting ecosystem.

### What Existing Apps Do vs What SaarthiAI Does

| Existing Apps | SaarthiAI |
|---------------|-----------|
| "Bus arrives in 5 minutes." | "Bus arrives in 5 min, but predicted to reach **90% occupancy**. Next bus in 12 min at **55% occupancy**. **Wait 7 min for a better journey.**" |
| Show routes | Score and **rank** routes using 6 personalized factors |
| Static fare display | "A **monthly metro pass saves ₹170** based on your travel pattern" |
| No crowd info | "Bus 42 is at **90% capacity**. Bus 127 on Route B is at **55%**. Take Route B." |
| No mid-journey help | Auto-detect metro disruption → AI suggests alternative → "**Switch route?**" |
| No authority tools | "Route 423 needs **3 more buses**. Route 112 can **reduce 4 buses**, saving **₹48,000/day**." |

### The Innovation Formula

```
Existing Apps = Information + Booking + Ticketing
SaarthiAI     = Prediction + Personalization + Recommendation + Action
```

---

## 4. System Architecture

```
┌─────────────────────────────────────────────────────┐
│                   USER LAYER                         │
│   Commuter App  ·  Operator Dashboard  ·  Admin      │
└──────────────────────┬──────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────┐
│              APPLICATION LAYER                       │
│   React 18 + Vite + Tailwind CSS + Zustand           │
│   25 Screens · 13 Components · Dark/Light Mode       │
└──────────────────────┬──────────────────────────────┘
                       │ REST API (18 route groups)
┌──────────────────────▼──────────────────────────────┐
│              INTELLIGENCE LAYER                      │
│   Node.js + Express.js                               │
│   ┌─────────────┐ ┌─────────────┐ ┌──────────────┐  │
│   │ Route Score  │ │ Crowd Pred  │ │ Disruption   │  │
│   │ Engine       │ │ Service     │ │ Prediction   │  │
│   └─────────────┘ └─────────────┘ └──────────────┘  │
│   ┌─────────────┐ ┌─────────────┐ ┌──────────────┐  │
│   │ AI Chat     │ │ Fare Optim  │ │ Last-Mile    │  │
│   │ Assistant   │ │ Service     │ │ Intelligence │  │
│   └─────────────┘ └─────────────┘ └──────────────┘  │
│   ┌─────────────┐ ┌─────────────┐                    │
│   │ Green Score │ │ Weather     │  + 3 more services │
│   │ Service     │ │ Service     │                    │
│   └─────────────┘ └─────────────┘                    │
└──────────────────────┬──────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────┐
│              DATA LAYER                              │
│   MongoDB · 22 Collections · Mongoose ODM            │
└──────────────────────┬──────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────┐
│         TRANSPORT INTEGRATION LAYER (Future)         │
│   GTFS Feeds · ONDC Mobility · Weather APIs          │
│   NCMC Payment · GPS Tracking · IoT Sensors          │
└─────────────────────────────────────────────────────┘
```

---

## 5. Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React 18 + Vite 5 | Single Page Application with lazy-loaded routes |
| **Styling** | Tailwind CSS 3.4 | White + Sky Blue design system with dark mode |
| **State** | Zustand | Lightweight state management (5 stores) |
| **Charts** | Recharts | Analytics visualizations (bar, line, pie) |
| **Maps** | Leaflet + OpenStreetMap | Live bus tracking map with custom markers |
| **Icons** | react-icons (Feather) | 50+ icons across the UI |
| **Backend** | Node.js + Express.js | REST API server with 18 route groups |
| **Database** | MongoDB + Mongoose | 22 document collections with relationships |
| **Auth** | JWT + bcryptjs | Stateless authentication with password hashing |
| **Security** | Helmet + CORS + Rate Limiting | HTTP security headers, origin control, brute-force protection |
| **AI Layer** | Modular Services | Rule-based mock (LLM-ready via `AI_API_KEY` env var) |

---

## 6. Feature Breakdown (26 Modules)

### 6.1 Commuter Features (18 modules)

| # | Feature | Screen | Description |
|---|---------|--------|-------------|
| 1 | **AI Route Planning** | Plan Journey | Enter from/to, select date/time, get scored multimodal routes |
| 2 | **Route Comparison** | Route Results | 3+ routes ranked by CommuteScore with AI explanation |
| 3 | **Route Details** | Route Details | Segment-by-segment timeline, score breakdown, fare table |
| 4 | **Live Journey Tracking** | Live Journey | Auto-advancing journey simulation with real-time ETA |
| 5 | **Mid-Journey Replanning** | Live Journey | Metro disruption detected → AI suggests alternative → "Switch route?" |
| 6 | **Crowd Intelligence** | Crowd Details | Occupancy gauge, boarding recommendation, trend chart |
| 7 | **Live Bus Tracking** | Live Buses | Real-time Leaflet map with 12+ buses, crowd level per bus |
| 8 | **AI Crowd Prediction** | Live Buses | "Expected 90% in 15 min" / "Good time to board" per bus |
| 9 | **Last-Mile Options** | Last Mile | 6 last-mile options compared (auto, e-rickshaw, walk, bike, cab, shared) |
| 10 | **AI Commute Assistant** | AI Assistant | Chat interface with contextual responses (route, crowd, spend, safety, weather) |
| 11 | **Saarthi Card** | Saarthi Card | Digital mobility card, balance, add money, freeze/unfreeze |
| 12 | **Unified Wallet** | Wallet | Balance management, spending charts (bar/pie/line), AI fare insights |
| 13 | **Transaction History** | Transactions | Filterable transaction list with status badges |
| 14 | **Green Score** | Green Score | CO₂ savings tracking, achievements, sustainability gamification |
| 15 | **Safety Mode** | Safety Mode | SOS button, emergency contacts, journey sharing |
| 16 | **Accessibility Mode** | Accessibility | Needs checkboxes, route filtering by accessibility |
| 17 | **Community Reports** | Reports | Report incidents, track status, view community reports |
| 18 | **Smart Notifications** | Notifications | Disruption alerts, journey updates, wallet alerts |

### 6.2 Operator Features (1 dashboard)

| Feature | Description |
|---------|-------------|
| Fleet Management | Vehicle list with status (running/idle/maintenance) |
| Occupancy Analytics | Real-time passenger counts per vehicle |
| Revenue Dashboard | Daily/weekly revenue charts |
| Incident Monitoring | Delay and disruption tracking |

### 6.3 Admin / Authority Features (1 dashboard, 7 sections)

| Section | Description |
|---------|-------------|
| **Overview KPIs** | 45,230 commuters, 3,847 active journeys, 892 buses, ₹12.4L transactions |
| **AI Bus Deployment Optimizer** | Routes needing more buses (4) + routes to reduce (3) |
| **Route Performance Analytics** | Top 10 busiest routes bar chart |
| **Hourly Demand Pattern** | 24-hour demand line chart (peaks at 8-10 AM, 5-7 PM) |
| **Crowd Heatmap** | 10 Delhi areas colored by crowd level |
| **Recent Incidents** | Type, location, severity, status table |
| **Fleet Utilization** | Pie chart: Running 65%, Idle 20%, Maintenance 10%, Delayed 5% |

---

## 7. AI Intelligence Layer (8 Modules)

### Module 1: Route Scoring Engine

The core algorithm that makes SaarthiAI different. Every route is scored on 6 weighted dimensions:

$$\text{CommuteScore} = (w_t \times S_{time}) + (w_c \times S_{cost}) + (w_{cr} \times S_{crowd}) + (w_s \times S_{safety}) + (w_a \times S_{access}) + (w_e \times S_{env})$$

**Default Weights:**

| Factor | Weight | Score Calculation |
|--------|--------|-------------------|
| Time | 30% | $\max(0, 100 - \frac{duration}{120} \times 100)$ |
| Cost | 15% | $\max(0, 100 - \frac{fare}{200} \times 100)$ |
| Crowd | 20% | LOW=95, MODERATE=60, HIGH=25 |
| Safety | 20% | Heuristic-based (default: 85) |
| Accessibility | 10% | Heuristic-based (default: 80) |
| Environment | 5% | WALK=100, METRO=85, BUS=50 |

**Personalization:** Users can adjust weights via preference sliders (e.g., "I care more about crowd than cost").

### Module 2: Crowd Prediction Service

Predicts vehicle and station occupancy using time-of-day modeling:

- **Base Occupancy**: 40%
- **Peak Hours** (8-10 AM, 5-7 PM): Base + 40% → **80% base**
- **Late Night** (10 PM - 5 AM): Multiplier 0.3 → **12% base**
- **Noise Injection**: Random ±10% for realism, clamped to [0, 100]%
- **Thresholds**: LOW ≤50%, MODERATE 50-80%, HIGH >80%
- **Outputs**: `predictedOccupancy`, `crowdLevel`, `seatProbability`, `confidence` (85%)
- **Boarding Recommendation**: Compares current vs next vehicle occupancy

### Module 3: Disruption Prediction

- Monitors weather, events, incidents for delay probability
- Generates severity-based alerts (low/medium/high/critical)
- Triggers mid-journey replanning when disruption detected

### Module 4: Fare Optimization

- Analyzes historical spending patterns
- Compares daily spending vs available passes (weekly/monthly metro pass)
- Example: "You spent ₹820 this month. Monthly pass costs ₹650. **Save ₹170.**"

### Module 5: AI Commute Assistant (Chat)

Keyword-driven conversational AI with contextual transit responses:

| User Query | AI Response |
|------------|-------------|
| "Best route to office?" | Recommends Route B with score 88, comparison table |
| "Is my bus crowded?" | Shows occupancy for Bus 42 (90%) vs Bus 127 (55%) |
| "How much did I spend?" | Today ₹55, This week ₹320, This month ₹820 |
| "Is my route safe?" | Safety score 91/100 with segment-wise assessment |
| "Weather impact?" | Rain till 2 PM, Route B avoids waterlogging areas |

### Module 6: Smart Boarding Recommendation

- Compares current arriving vehicle (95% capacity) vs next vehicle (45% in 7 min)
- Recommends: "Wait 7 minutes for a significantly more comfortable ride"

### Module 7: Last-Mile Intelligence

- Ranks 6 last-mile options by time, cost, and availability
- Connects transit stops to final destination via auto, e-rickshaw, walk, bike, cab, shared

### Module 8: Green Score Calculation

- Estimates CO₂ saved by using public transport vs private vehicle
- Gamification: Achievements, monthly targets, leaderboard-ready
- Example: "82/100 score — 18 kg CO₂ saved this month 🌱"

---

## 8. Database Architecture (22 Collections)

| # | Collection | Key Fields | Purpose |
|---|-----------|------------|---------|
| 1 | **Users** | name, email, password (bcrypt), role, city | Authentication & profiles |
| 2 | **Routes** | name, type, stops, baseFare, perKmFare | Transport route definitions |
| 3 | **Stops** | name, coordinates, type, accessibility | Station/stop master data |
| 4 | **Vehicles** | vehicleId, route, capacity, currentOccupancy, status | Fleet tracking |
| 5 | **Journeys** | user, route, segments, status, startTime, endTime | Journey lifecycle |
| 6 | **SavedPlaces** | user, name, coordinates, type (home/work/custom) | User's saved locations |
| 7 | **CrowdData** | route, stop, occupancy, timestamp | Historical crowd records |
| 8 | **CrowdPredictions** | route, predictedOccupancy, confidence, timeSlot | AI crowd forecasts |
| 9 | **TrafficData** | segment, congestionLevel, speed, timestamp | Traffic conditions |
| 10 | **Disruptions** | type, severity, affectedRoutes, description | Service disruptions |
| 11 | **Reports** | user, type, severity, location, description, status | Community reports |
| 12 | **Transactions** | user, amount, type (debit/credit), mode, timestamp | Payment records |
| 13 | **Wallets** | user, balance, currency | Digital wallet |
| 14 | **Cards** | user, cardNumber, status, expiryDate | Saarthi Card |
| 15 | **Notifications** | user, title, message, type, read | Push notifications |
| 16 | **Preferences** | user, weights, accessibility, language | User preferences |
| 17 | **AccessibilityProfiles** | user, needs, assistiveDevices | Accessibility settings |
| 18 | **SafetyEvents** | user, type, location, contacts, timestamp | SOS events |
| 19 | **Operators** | user, fleet, routes, revenue | Operator profiles |
| 20 | **GreenScores** | user, co2Saved, trips, score, achievements | Sustainability tracking |
| 21 | **Analytics** | type, data, city, date | Aggregated analytics |
| 22 | **DemoSimulations** | type, parameters, state | Demo mode state |

---

## 9. API Architecture (18 Route Groups)

| # | Endpoint Group | Auth | Key Operations |
|---|---------------|------|----------------|
| 1 | `POST /api/auth/*` | Public | Register, Login, Forgot/Reset Password |
| 2 | `GET/PUT /api/users/*` | User | Profile, Preferences, Accessibility |
| 3 | `GET/POST /api/routes/*` | Mixed | CRUD routes, Search |
| 4 | `GET /api/stops/*` | Public | List stops, Nearby stops |
| 5 | `GET/PUT /api/vehicles/*` | Mixed | List vehicles, Update occupancy |
| 6 | `POST /api/journeys/*` | User | **Plan (core AI endpoint)**, Start, Active, Replan |
| 7 | `GET /api/crowd/*` | Public | Route/stop/vehicle crowd data |
| 8 | `POST /api/predictions/*` | Public | **Crowd, Traffic, Disruption predictions** |
| 9 | `GET /api/traffic/*` | Public | Status, Route traffic |
| 10 | `GET/POST /api/disruptions/*` | Mixed | List, Create, Update disruptions |
| 11 | `GET/POST /api/reports/*` | Mixed | CRUD community reports |
| 12 | `GET/POST /api/wallet/*` | User | Balance, Add money, Spending summary |
| 13 | `GET/PUT /api/card/*` | User | Card info, Freeze/Unfreeze |
| 14 | `GET /api/transactions/*` | User | List, Summary |
| 15 | `GET/PUT /api/notifications/*` | User | List, Mark read |
| 16 | `POST /api/ai/*` | User | **Chat, Fare optimize, Daily briefing** |
| 17 | `GET /api/admin/*` | Admin | **Overview, Analytics, Heatmaps, Deployment** |
| 18 | `GET /api/operator/*` | Operator | Dashboard, Vehicles, Revenue |

**Middleware Pipeline**: Request → Rate Limiter → Helmet → CORS → JSON Parser → Auth (JWT) → Role Check → Controller → Error Handler

---

## 10. Frontend Architecture (25 Screens)

### Screen Inventory

| Category | Screens | Count |
|----------|---------|-------|
| Auth | Splash, Login, Register, Forgot Password | 4 |
| Main | Home (app dashboard), Profile, Settings | 3 |
| Journey | Plan Journey, Route Results, Route Details, Live Journey | 4 |
| Intelligence | Crowd Details, Last Mile Options, AI Assistant, **Live Bus Tracking** | 4 |
| Finance | Saarthi Card, Wallet, Transactions | 3 |
| Impact | Green Score, Safety Mode, Accessibility Mode | 3 |
| Community | Community Reports, Notifications | 2 |
| Dashboards | **Admin Dashboard** (with AI Deployment Optimizer), Operator Dashboard | 2 |
| **Total** | | **25** |

### Component Library (13 Reusable Components)

| Component | Purpose |
|-----------|---------|
| `AppLayout` | Main layout with Sidebar + Navbar + BottomNav + Outlet |
| `Navbar` | Top bar with logo, dark mode toggle, notifications, profile |
| `Sidebar` | Desktop navigation with 5 sections + dark/light toggle + logout |
| `BottomNav` | Mobile bottom tab bar (5 tabs) |
| `ProtectedRoute` | Auth guard with role-based access control |
| `RouteCard` | Journey route display card |
| `CrowdBadge` | Color-coded crowd level badge (🟢🟡🔴) |
| `TrafficBadge` | Traffic condition badge |
| `ScoreDisplay` | Commute score circle visualization |
| `StatCard` | Dashboard stat card with icon, value, change |
| `JourneyTimeline` | Step-by-step journey segment display |
| `LoadingSpinner` | Suspense fallback spinner |

### State Management (5 Zustand Stores)

| Store | State | Purpose |
|-------|-------|---------|
| `authStore` | user, token, isAuthenticated | Login/register/logout with localStorage persistence |
| `journeyStore` | currentJourney, segments | Active journey tracking |
| `walletStore` | balance, transactions | Wallet state |
| `notificationStore` | notifications, unreadCount | Notification management |
| `uiStore` | darkMode, sidebarOpen, demoMode, currentCity | UI preferences with dark mode toggle |

---

## 11. Dark Mode Implementation

SaarthiAI supports full dark mode across all 25 screens:

**Strategy**: Tailwind CSS `darkMode: 'class'` with global CSS overrides.

| Component | Implementation |
|-----------|---------------|
| **Tailwind Config** | `darkMode: 'class'` enabled |
| **State** | `uiStore.darkMode` with localStorage persistence |
| **DOM** | `document.documentElement.classList.add('dark')` |
| **CSS Overrides** | Global rules transform `.dark .bg-white → slate-800`, `.dark .text-slate-900 → slate-100`, etc. |
| **Toggle Locations** | Navbar (☀️/🌙), Sidebar bottom, Settings → Appearance section |
| **Initialization** | `main.jsx` reads localStorage before first render (no flash) |
| **Transitions** | `transition-colors duration-300` for smooth switching |

---

## 12. Complete Demo Scenario

### Scenario: Aryan's Daily Commute (Home → Office)

This is the primary demo flow that showcases every differentiator:

**Step 1 — Splash Screen**
- App opens with sky-blue gradient: "SaarthiAI — Plan smarter → Predict better → Travel easier"
- Auto-redirects to login after 2.5 seconds

**Step 2 — Login**
- Click **"Login as Commuter (Aryan)"** demo button
- Instant login via Zustand auth store → navigate to Home

**Step 3 — Home Dashboard**
- Time-based greeting: "Good Morning, Aryan 👋"
- Weather alert: "🌧️ Rain expected · 🔴 Heavy Traffic · 🟡 Moderate Crowd"
- **Daily Route AI Briefing Card** shows:
  - Normal time: 42 min → **Today's prediction: 61 min (+19 min)**
  - Traffic: 🔴 Heavy | Crowd: 🔴 High | Weather: 🌧️ Rain | Safety: 🟢 Good
  - Commute Score: **58/100** (red — poor conditions today)
  - ⚠️ Alert: "Your normal route is predicted to be 19 minutes slower today"

**Step 4 — AI Recommendation**
- ⭐ "Take Route B. Bus 42 is predicted at 90% occupancy. Bus 127 is at 55%."
- Comparison table:

| Metric | Normal Route | Route B ⭐ |
|--------|-------------|-----------|
| Route | E-rickshaw → Bus 42 → Metro → Walk | E-rickshaw → Bus 127 → Metro → Walk |
| Time | 61 min (predicted) | 46 min |
| Cost | ₹35 | ₹42 |
| Crowd | 🔴 High (90%) | 🟡 Moderate (55%) |
| Score | 58/100 | **88/100** |

- Explanation: 15 min faster, 35% less crowded, ₹7 extra for significantly better comfort
- Click **"Start Recommended Journey →"**

**Step 5 — Live Journey**
- Journey begins with 5 segments auto-advancing every 5 seconds:
  1. 🚶 Walk (Home → Stand) — 5 min
  2. 🛺 E-rickshaw (Stand → Bus Stop) — 8 min, ₹15
  3. 🚌 Bus 127 (Bus Stop → Metro) — 15 min, ₹10
  4. 🚇 Metro Blue Line (Station → Destination) — 12 min, ₹30
  5. 🚶 Walk (Station → Office) — 6 min

**Step 6 — Disruption Alert (at Segment 4)**
- ⚠️ **"Metro Blue Line Disruption"**
- "Service delayed ~15 min due to signal failure at Rajiv Chowk"
- AI suggests: Bus 56 → Bus 78 → E-rickshaw (+8 min, +₹12)
- Two buttons: **"Switch Route"** / "Continue Current"
- Click Switch → segments update to alternative route

**Step 7 — Journey Complete**
- Summary modal: Total time, total cost, segments completed
- **"Fare deducted from Saarthi Card: ₹55"**
- **"New Balance: ₹795"**

---

## 13. Transaction Flow Demo

| Step | Event | Amount | Balance |
|------|-------|--------|---------|
| Start | Saarthi Card balance | — | ₹850 |
| Segment 2 | E-rickshaw (Home → Bus Stop) | -₹15 | ₹835 |
| Segment 3 | Bus 127 (Bus Stop → Metro) | -₹10 | ₹825 |
| Segment 4 | Metro Blue Line (Station → Destination) | -₹30 | ₹795 |
| **Total** | **Journey fare** | **-₹55** | **₹795** |

**After Journey**: Transaction added to history → Spending analytics updated → Green score recalculated

---

## 14. Live Bus Tracking System

### Overview
Real-time bus tracking page with interactive Leaflet map showing 12 Delhi buses with AI crowd predictions.

### Tracked Buses (12)

| Bus ID | Route | Type | Initial Occupancy |
|--------|-------|------|-------------------|
| DTC-423 | Rajiv Chowk → Nehru Place | DTC | 78% 🔴 |
| DTC-522 | ISBT → Mehrauli | DTC | 45% 🟡 |
| DTC-604 | Anand Vihar → Dwarka | DTC | 32% 🟢 |
| CL-721 | Lajpat Nagar → CP | Cluster | 88% 🔴 |
| DTC-181 | Noida → Kashmere Gate | DTC | 62% 🟡 |
| CL-534 | Rohini → Badarpur | Cluster | 55% 🟡 |
| DTC-764 | Vasant Kunj → Old Delhi | DTC | 91% 🔴 |
| CL-990 | Saket → AIIMS | Cluster | 25% 🟢 |
| DTC-347 | Mundka → ISBT | DTC | 40% 🟢 |
| DTC-429 | IIT Delhi → Chandni Chowk | DTC | 72% 🔴 |
| CL-815 | Janakpuri → Nehru Place | Cluster | 50% 🟡 |
| DTC-112 | Narela → ISBT | DTC | 35% 🟢 |

### Real-Time Simulation
- **Update frequency**: Every 3 seconds
- **Position**: Buses move based on heading + speed (small lat/lng deltas)
- **Occupancy**: Fluctuates ±3% per tick
- **Crowd Level**: Auto-recalculated: LOW (<40%), MODERATE (40-70%), HIGH (>70%)

### AI Crowd Predictions per Bus
| Condition | Prediction |
|-----------|-----------|
| Occupancy > 70% | "Crowd expected to remain high until [next stop]. Consider waiting." |
| 40-70% during peak hours | "Occupancy predicted to increase. Board now for better comfort." |
| < 40% | "Good time to board. Crowd expected to remain low for 3 stops." |
| Delay > 5 min | "Significant delay detected. Alternative buses available." |

---

## 15. AI Bus Deployment Optimizer

### Routes Needing MORE Buses

| Route | Current | Occupancy | Recommendation | Impact | Priority |
|-------|---------|-----------|----------------|--------|----------|
| 423 (Rajiv Chowk → Nehru Place) | 8 buses | 92% | +3 buses | 92% → 65% | 🔴 Critical |
| 764 (Vasant Kunj → Old Delhi) | 6 buses | 88% | +2 buses | 88% → 62% | 🟠 High |
| 721 (Lajpat Nagar → CP) | 5 buses | 85% | +2 buses (evening) | 85% → 58% | 🟠 High |
| 429 (IIT Delhi → Chandni Chowk) | 7 buses | 78% | +1 bus | 78% → 65% | 🟡 Medium |

### Routes to REDUCE Buses

| Route | Current | Occupancy | Recommendation | Daily Savings |
|-------|---------|-----------|----------------|---------------|
| 112 (Narela → ISBT) | 10 buses | 22% | Keep 6 (-4) | ₹48,000 |
| 347 (Mundka → ISBT) | 8 buses | 30% | Keep 6 (-2) | ₹24,000 |
| 990 (Saket → AIIMS) | 6 buses | 18% | Keep 3 (-3) | ₹36,000 |

### Net Optimization Summary
- Deploy: **+8 buses** | Reduce: **-9 buses** | Net: **Free 1 bus**
- **Daily savings: ₹1,08,000**
- **Expected impact: Reduce overcrowding by 28% on high-demand routes**

---

## 16. Implementation Plan

### Phase 1: MVP (Current — Completed ✅)

| Step | Component | Files | Status |
|------|-----------|-------|--------|
| 1 | Project setup (Vite, Tailwind, Express, MongoDB schemas) | 10 | ✅ |
| 2 | Backend models (22 Mongoose schemas) | 22 | ✅ |
| 3 | Backend middleware (auth, roles, errors, rate limiter, validation) | 5 | ✅ |
| 4 | AI/Intelligence services (11 services) | 11 | ✅ |
| 5 | API controllers (21 controllers) | 21 | ✅ |
| 6 | API routes (18 route groups) | 18 | ✅ |
| 7 | Seed data generator (Delhi, 3 demo accounts) | 1 | ✅ |
| 8 | Frontend components (13 reusable) | 13 | ✅ |
| 9 | Frontend pages (25 screens) | 25 | ✅ |
| 10 | Zustand state stores (5 stores) | 5 | ✅ |
| 11 | API service layer (15 services) | 15 | ✅ |
| 12 | Dark mode (CSS + Zustand + localStorage) | 4 | ✅ |
| 13 | Live Bus Tracking (Leaflet + simulation) | 1 | ✅ |
| 14 | AI Bus Deployment Optimizer | 1 | ✅ |
| 15 | Documentation (6 docs + README) | 7 | ✅ |
| 16 | Build verification (927 modules, 0 errors) | — | ✅ |
| 17 | GitHub deployment | — | ✅ |
| **Total** | | **~160 files** | **✅** |

---

## 17. Project Structure

```
SaarthiAI/
├── backend/                          # Node.js + Express API
│   ├── config/                       # db.js, env.js, constants.js
│   ├── controllers/                  # 21 API controllers
│   ├── middleware/                    # auth, roleAuth, errorHandler, rateLimiter, validate
│   ├── models/                       # 22 Mongoose schemas
│   ├── routes/                       # 18 Express route files
│   ├── services/                     # 11 AI/intelligence services
│   ├── seed/                         # seedData.js (Delhi, 3 users)
│   ├── server.js                     # Express entry point
│   ├── package.json                  # Dependencies
│   └── .env                          # Environment config
├── frontend/                         # React 18 + Vite SPA
│   ├── src/
│   │   ├── components/               # 13 reusable UI components
│   │   ├── pages/                    # 25 page components
│   │   ├── store/                    # 5 Zustand state stores
│   │   ├── services/                 # 15 API service modules
│   │   ├── utils/                    # constants, formatters, mockData
│   │   ├── App.jsx                   # Router with 25 lazy-loaded routes
│   │   ├── main.jsx                  # React root + dark mode init
│   │   └── index.css                 # Tailwind + dark mode CSS overrides
│   ├── tailwind.config.js            # Dark mode: 'class'
│   ├── vite.config.js                # Vite configuration
│   └── package.json                  # Dependencies
├── docs/                             # Project documentation
│   ├── ARCHITECTURE.md               # System architecture
│   ├── DATABASE.md                   # 22-collection schema docs
│   ├── API.md                        # Complete API documentation
│   ├── AI_ARCHITECTURE.md            # 8 AI module specs
│   ├── USER_FLOWS.md                 # Commuter/Operator/Admin flows
│   └── DEMO_GUIDE.md                 # Step-by-step demo walkthrough
├── README.md                         # Comprehensive project README
└── .gitignore                        # Excludes node_modules, .env, dist
```

---

## 18. Simulated vs Real Features

| Component | Phase 1 (Current) | Future Integration |
|-----------|-------------------|-------------------|
| Transport data | Demo data (Delhi) | GTFS feeds, ONDC Mobility APIs |
| Crowd data | Time-based algorithm | IoT sensors, CCTV analytics |
| Traffic data | Time-based simulation | Google Maps / Mapbox APIs |
| Weather | Simulated alerts | OpenWeather API |
| Payment | Simulated Saarthi Card | NCMC, UPI, payment gateways |
| Maps | Leaflet + OpenStreetMap | Google Maps / Mapbox |
| AI Chat | Keyword-based mock | LLM (GPT / Gemini via `AI_API_KEY`) |
| Vehicle tracking | Simulated movement | GPS / GTFS-RT real-time feeds |
| Bus deployment | Static recommendations | ML demand forecasting model |

> [!NOTE]
> All Phase 1 features are **fully functional with mock data**. The architecture is designed so that each simulated service can be replaced with a real API by setting the corresponding environment variable — zero code changes needed in the frontend.

---

## 19. India-First Design Principles

SaarthiAI is NOT a generic Western ride-sharing application. It is designed for Indian conditions:

| Principle | Implementation |
|-----------|---------------|
| **High-density public transport** | Supports buses, metro, local trains, e-rickshaws, autos |
| **Multimodal journeys** | Every route is a combination of 3-5 transport modes |
| **Last-mile connectivity** | E-rickshaws and autos integrated as first-class modes |
| **₹ pricing** | Indian Rupee throughout, realistic Indian fare structures |
| **Indian cities** | Delhi (primary), Mumbai, Bengaluru, Pune, Hyderabad, Lucknow, Nashik |
| **Indian commuting patterns** | Morning peak 8-10 AM, evening peak 5-7 PM |
| **Festival disruptions** | Disruption prediction handles events and festivals |
| **Monsoon scenarios** | Weather-aware routing, waterlogging avoidance |
| **Accessibility challenges** | Indian infrastructure reality (ramp access, elevator availability) |
| **NCMC compatibility** | Saarthi Card designed as NCMC-compatible digital transit card |

---

## 20. Future Roadmap (8 Phases)

| Phase | Focus | Key Deliverables |
|-------|-------|-----------------|
| **Phase 1** ✅ | **MVP** | Full-stack app, AI services, demo mode, 25 screens |
| **Phase 2** | Real-time Transport APIs | GTFS integration, live vehicle tracking, real schedules |
| **Phase 3** | Real Crowd Sensors | IoT integration, CCTV crowd analytics, real-time occupancy |
| **Phase 4** | Payment Integration | NCMC card, UPI payments, fare collection |
| **Phase 5** | Operator Partnerships | Bus/metro operator APIs, real fleet data |
| **Phase 6** | Mobility Digital Twin | City-scale simulation, demand modeling, what-if analysis |
| **Phase 7** | Multi-City Deployment | Mumbai, Bengaluru, Pune, Hyderabad, Lucknow expansion |
| **Phase 8** | Nationwide Ecosystem | Pan-India intelligent mobility platform |

---

## 21. Conclusion

SaarthiAI demonstrates that the future of Indian public transportation is not just about digitizing existing services — it's about adding an **AI intelligence layer** that transforms raw mobility data into personalized, predictive, actionable guidance for every commuter.

### What Makes SaarthiAI Different

1. **Not another booking app** — It's a decision-making AI companion
2. **Prediction before information** — Tells you what WILL happen, not just what IS happening
3. **Personalized to YOU** — Your priorities, your preferences, your commute score
4. **Helps authorities too** — AI-powered bus deployment optimization saves ₹1,08,000/day
5. **India-first, not India-adapted** — Built for Indian transit reality from day one

### Project Statistics

| Metric | Value |
|--------|-------|
| Total source files | ~160 |
| Frontend screens | 25 |
| Backend API routes | 18 groups |
| Database collections | 22 |
| AI service modules | 11 |
| Vite build modules | 927 |
| Build errors | 0 |
| Build time | 17 seconds |
| Lines of code | ~15,000+ |

---

> **SaarthiAI — Your Intelligent Mobility Companion**
>
> *Plan smarter → Predict better → Travel easier*
>
> Built with ❤️ for Indian commuters | © 2026

---

**Repository**: [github.com/aryan-2006-max/SaarthiAI](https://github.com/aryan-2006-max/SaarthiAI)

**Demo Accounts**:
| Role | Email | Password |
|------|-------|----------|
| 👤 Commuter (Aryan) | user@saarthi.ai | password123 |
| 🚌 Operator | operator@saarthi.ai | password123 |
| 🔧 Admin | admin@saarthi.ai | password123 |
