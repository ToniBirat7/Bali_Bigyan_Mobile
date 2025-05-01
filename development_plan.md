# Baali Bigyan Mobile App - Phase 1 Development Plan

## Project Overview
Baali Bigyan is an AI-powered mobile application helping Nepalese farmers identify crop diseases and receive treatment recommendations. The app analyzes plant photos using a machine learning model to detect issues such as pests or nutrient deficiencies, then provides diagnoses and treatment recommendations.

## Core Features (Phase 1)
- **Login/Authentication:** User/Doctor role selection with mock authentication
- **Image Capture & Upload:** Camera integration for capturing plant photos
- **Prediction Display:** Show mock disease prediction results
- **History Page:** Display past predictions from mock data
- **Product List:** Static catalog of agricultural products
- **Ticketing System:** Communication channel between farmers and experts

## Tech Stack
- **Framework:** React Native with Expo
- **State Management:** Redux with Redux Toolkit
- **Navigation:** React Navigation v6
- **HTTP Requests:** Axios
- **UI Components:** React Native Paper
- **Camera Integration:** Expo Camera
- **Animations:** Lottie React Native for rich animations
- **Local Storage:** AsyncStorage
- **Form Handling:** Formik with Yup validation

## Folder Structure
```
src/
├── assets/             # Images, animations, fonts
├── components/         # Reusable UI components
│   ├── common/         # Buttons, cards, loaders, etc.
│   ├── forms/          # Form components
│   └── screens/        # Screen-specific components
├── constants/          # App constants, colors, dimensions
├── hooks/              # Custom hooks
├── navigation/         # Navigation configuration
├── redux/              # Redux store, slices, and actions
│   ├── slices/         # Feature-specific reducers
│   ├── store.js        # Redux store configuration
│   └── thunks/         # Async actions
├── screens/            # App screens
│   ├── auth/           # Login screens
│   ├── camera/         # Camera and prediction screens
│   ├── history/        # History screens
│   ├── products/       # Product catalog screens
│   └── tickets/        # Ticketing system screens
├── services/           # API calls and mock data
├── utils/              # Helper functions
└── App.js              # Entry point
```

## UI Design Inspiration
1. **Color Palette:** 
   - Primary: `#2E7D32` (Forest Green) - representing agriculture and growth
   - Secondary: `#FFC107` (Amber) - representing crops and harvest
   - Accent: `#1565C0` (Blue) - representing technology and innovation
   - Neutrals: `#F5F5F5` (Light Gray) to `#212121` (Dark Gray)

2. **UI Inspiration:**
   - [PlantIn](https://apps.apple.com/us/app/plantin-plant-identifier/id1456250936) - Clean interface for plant identification
   - [iNaturalist](https://www.inaturalist.org/pages/mobile_apps) - Photo capture flow
   - [Apollo Agriculture](https://apolloagriculture.com/) - Agricultural advisory layout
   - [Google Material Design](https://material.io/design) - Card layouts and component design

3. **Typography:**
   - Primary Font: Roboto (clean, modern, readable)
   - Headers: Roboto Medium/Bold
   - Body Text: Roboto Regular
   - Consider adding Nepali font support: Preeti or Kalimati

## Development Milestones & Timeline

### Week 1: Project Setup & Authentication
- Set up Expo project with TypeScript
- Configure folder structure and install dependencies
- Implement Redux store setup and basic slices
- Create login screen with role selection
- Implement mock authentication flow
- Design and implement home dashboard screen

### Week 2: Camera Integration & Prediction Flow
- Implement camera access and photo capture
- Create image upload and processing UI
- Develop prediction results display screen
- Implement mock API service for prediction results
- Add animations for camera capture and loading states

### Week 3: History & Product Catalog
- Implement history list screen
- Create detailed history view
- Design and implement product catalog list
- Add product filtering by crop type
- Implement product detail view
- Connect mock data services

### Week 4: Ticketing System & Polishing
- Implement ticket creation flow for farmers
- Create ticket listing for doctors
- Design ticket detail and response UI
- Implement ticket status management
- Add final animations and transitions
- Perform UI polish and performance optimization
- Complete testing on various devices

## Redux Architecture

### Store Structure
```
{
  auth: {
    isAuthenticated: boolean,
    user: { id, name, role },
    loading: boolean,
    error: string | null
  },
  predictions: {
    current: { plant, disease, notes, treatment, video_url } | null,
    history: Array<PredictionRecord>,
    loading: boolean,
    error: string | null
  },
  products: {
    list: Array<Product>,
    filteredList: Array<Product>,
    selectedCrop: string | null,
    loading: boolean,
    error: string | null
  },
  tickets: {
    list: Array<Ticket>,
    selectedTicket: Ticket | null,
    loading: boolean,
    error: string | null
  }
}
```

### Slices & Actions
1. **Auth Slice:**
   - `login` - Authenticate user with role
   - `logout` - Clear user session
   - `setUser` - Set user information

2. **Predictions Slice:**
   - `submitPrediction` - Submit image for analysis
   - `setPredictionResult` - Store prediction results
   - `fetchHistory` - Get prediction history
   - `addToHistory` - Add new prediction to history

3. **Products Slice:**
   - `fetchProducts` - Get all products
   - `filterProducts` - Filter by crop type
   - `selectProduct` - Select product for detail view

4. **Tickets Slice:**
   - `createTicket` - Create new support ticket
   - `fetchTickets` - Get list of tickets
   - `respondToTicket` - Add response to ticket
   - `updateTicketStatus` - Change ticket status

## Screen Details & Key Components

### Authentication
- **LoginScreen:** Role selection buttons, username/password form
- **Components:** `RoleSelector`, `LoginForm`, `AuthButton`

### Home/Dashboard
- **HomeScreen:** Dashboard with feature buttons and welcome message
- **Components:** `FeatureCard`, `WelcomeHeader`, `QuickAccessButtons`

### Camera & Prediction
- **CameraScreen:** Camera preview with capture button
- **ImageReviewScreen:** Review captured image before submission
- **PredictionResultScreen:** Display disease diagnosis with treatment
- **Components:** `CameraView`, `CaptureButton`, `ImagePreview`, `PredictionCard`, `TreatmentSteps`, `VideoLink`

### History
- **HistoryListScreen:** List of past predictions
- **HistoryDetailScreen:** Detailed view of past prediction
- **Components:** `HistoryItem`, `DateFilter`, `DiagnosisDetails`

### Products
- **ProductListScreen:** Grid of product cards with filter
- **ProductDetailScreen:** Detailed product information
- **Components:** `ProductCard`, `CropFilter`, `ProductDetails`

### Tickets
- **TicketListScreen:** List of tickets (different for user/doctor)
- **TicketCreateScreen:** Form to create new ticket
- **TicketDetailScreen:** View ticket details and responses
- **Components:** `TicketItem`, `StatusBadge`, `TicketForm`, `ResponseForm`

## UI/UX Principles to Follow
1. **Visual Hierarchy:** Important elements (like disease name or treatment) should stand out
2. **Consistent Spacing:** 8px grid system for consistent padding and margins
3. **Feedback & Affordance:** Clear visual feedback for all interactions
4. **Accessibility:** Large touch targets, adequate contrast ratios
5. **Error States:** Friendly error messages with recovery options
6. **Empty States:** Visually appealing placeholders when lists are empty
7. **Loading States:** Lottie animations for engaging loading experiences
8. **Transitions:** Smooth transitions between screens using shared element transitions where appropriate

## Testing Strategy
1. **Component Testing:** Test key components in isolation
2. **Integration Testing:** Test screen flows and navigation
3. **Device Testing:** Test on various screen sizes and OS versions
4. **User Testing:** Collect feedback from sample users if possible

## Future Considerations
1. Integration with real backend API endpoints
2. Adding offline support for key features
3. Performance optimization for low-end devices
4. Multi-language support with focus on Nepali
5. Advanced analytics for tracking app usage

This development plan provides a structured approach to building the Baali Bigyan Mobile App Phase 1. It focuses on creating a solid foundation with mocked backend responses that can be easily integrated with real APIs in future phases. 