# User Flows

## Commuter Flow
1. **Registration:** Sign up with email/phone.
2. **Profile Setup:** Set Home and College/Work locations.
3. **Preferences:** Define weightages (e.g., prefer less crowd, prefer cheapest, fastest).
4. **Daily Briefing:** App provides morning notification: "Heavy rain expected, leave 10 mins early."
5. **Plan Journey:** Enter destination.
6. **AI Recommendation:** View ranked routes with explanations. Select a route.
7. **Start Journey:** GPS tracking begins.
8. **Mid-journey alerts:** "Metro disruption ahead. Re-routing to Bus." -> User accepts re-plan.
9. **Complete Journey:** Arrival confirmed.
10. **Transaction:** Automatic fare deduction via Saarthi NCMC Wallet.
11. **Green Score:** Earn points for CO2 saved.
12. **Community Reporting:** Submit a report (e.g., "Broken escalator at station").
13. **AI Assistant:** Chat to ask, "When is the next bus?"

## Operator Flow
1. **Login:** Authenticate as Transit Agency.
2. **Dashboard:** View high-level metrics.
3. **View Fleet:** See live vehicle locations on map.
4. **Vehicle Occupancy:** Monitor which buses are overcrowded.
5. **Route Analytics:** Analyze revenue and ridership per route segment.

## Admin Flow
1. **Login:** Authenticate as System Admin.
2. **City Overview:** View holistic health of city mobility.
3. **Heatmaps:** See demand hotspots and traffic congestion.
4. **Demand Prediction:** View AI insights for the next 24 hours.
5. **User Management:** Handle accounts and permissions.
6. **Report Verification:** Approve or dismiss community-reported issues.

## Saarthi Card Flow
1. **Auto-creation:** Virtual NCMC card generated upon user registration.
2. **Add Money:** Top up wallet via simulated payment gateway.
3. **Journey:** Seamless auto-deduction at the end of a trip.
4. **Transaction History:** View all past spends.
5. **Spending Analytics:** See visual charts of monthly transit costs.
6. **Freeze/Unfreeze:** Security controls for the virtual card.

## Demo Scenario Flow (The Complete Aryan Demo)
This is the primary presentation flow for the platform:
1. **Login** as Aryan (`user@saarthi.ai`).
2. **Dashboard Overview:** Displays dynamic alerts (Rain + High Traffic + Bus Crowding detected).
3. **Plan Journey:** Normal route options appear. Normal route: E-rickshaw → Bus → Metro → Walk (42 min, ₹35, High Crowd).
4. **AI Recommends Route B:** E-rickshaw → Bus B → Metro → Walk (46 min, ₹42, Medium Crowd). The AI explains that avoiding the highly crowded first bus is worth the extra 4 minutes and ₹7.
5. **Start Route B Journey.**
6. **Mid-journey Disruption:** System simulates a sudden Metro breakdown.
7. **AI Re-route Suggestion:** AI suggests an alternative: Bus → Bus → E-rickshaw.
8. **Switch Route:** User accepts, completes journey.
9. **Wallet Action:** Balance dynamically updates (₹850 → deduct ₹55 → ₹795).
10. **Transaction:** New receipt added to history.
11. **Green Score:** Profile updates with newly saved CO2 emissions.
