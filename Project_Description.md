Thanks for the details. I’ll now create a comprehensive markdown document that outlines the goals and implementation plan for Phase 1 of the Baali Bigyan mobile application using React Native, including endpoint integration with mock responses, UI and animation priorities, and screen functionalities.

# Baali Bigyan Mobile App – Phase 1: Goals & Requirements

## Project Overview
Baali Bigyan is an AI-powered mobile application designed to help Nepalese farmers quickly identify crop diseases and find treatment recommendations. The app analyzes photos of plants (e.g. tomato, potato, rice) using a machine learning model on the backend to detect issues such as pests or nutrient deficiencies. It provides a clear diagnosis along with information on plant type, symptoms, suggested treatments, and related educational videos. The goal is to improve crop health and productivity for farmers in Nepal by leveraging technology and local agricultural knowledge.

**Core features of Phase 1 include:**
- **AI-powered Disease Detection:** Users take or upload photos of plants; the system returns a predicted disease and care guidance.  
- **User and Doctor Roles:** Support for two login roles (farmer/user or doctor/agro-veterinarian) with corresponding interfaces and permissions.  
- **Prediction History:** A record of past image analyses and results, enabling farmers to review and track previous issues.  
- **Product Recommendations:** A catalog of agricultural products (e.g., seeds, fertilizers, pesticides) relevant to specific crops.  
- **Ticketing System:** A communication channel where farmers can raise questions or concerns and doctors/agrovets can review and respond.  

## Phase 1 Objectives
- **Build a Functional React Native App:** Develop a responsive, well-structured front-end using React Native that runs on both Android and iOS. Focus on an optimized, visually appealing interface and smooth performance.  
- **Implement Core Features:**  
  - **Login/Authentication:** Screen with role selection (farmer or doctor) that authenticates via the `/login` endpoint.  
  - **Image Capture & Upload:** Camera integration allowing users to take or select crop photos and upload them to the `/predict` endpoint.  
  - **Prediction Display:** Screen that shows the mock disease prediction result including plant type, disease name, notes, treatment, and a video link.  
  - **History Page:** Screen listing past predictions (from mock data) with options to view details or raise a support ticket.  
  - **Product List Page:** Static catalog of agri-products (filtered by crop type) presented as cards. This includes images, names, and descriptions.  
- **Backend Integration (Mocked):** Connect each frontend feature to predefined backend endpoints. Use simulated or hardcoded JSON responses for all API calls during Phase 1, to ensure smooth integration later.  
- **Modern UI/UX Design:** Apply a clean and intuitive design style. Use consistent color themes, readable fonts, and a coherent layout. Incorporate smooth animations and transitions (e.g., with Lottie or React Native Animated) to improve user engagement.  
- **Optimized Performance:** Ensure the camera and image upload functionality has minimal lag. Optimize assets (images, animations) for fast loading. Test on mid/low-end devices to ensure acceptable performance.  

## Key Screens and Functionalities

### Login Screen
- **Role Selection:** Allow the user to choose between “Farmer/User” or “Doctor/Agro-Vet” before logging in. The selected role determines the post-login navigation and available features.  
- **Authentication Form:** Include fields for username/email and password. On form submission, POST the credentials and role to the `/login` endpoint of the Django backend.  
- **Login Logic:** Handle the mock response. On success, navigate to the appropriate Home or Dashboard screen. On failure, display an error message such as “Invalid username or password.”  
- **Mock Credentials:** For Phase 1, you can use hardcoded or dummy login validation (e.g., accept any non-empty input) since the backend is not fully implemented.

### Home/Landing Screen
- **Dashboard Overview:** After a successful login, display a welcome message (e.g., “Namaste, [User]!”) and quick access icons or buttons. Typical options include **Check Disease (Camera)**, **History**, **Products**, and **Tickets**.  
- **Role-Specific View:** For farmer users, show options relevant to crop diagnostics. For doctor users, include a summary of open tickets or a link to a ticket review screen.  
- **Navigation:** Use a bottom tab navigator or a side drawer for global navigation. All main features (Camera, History, Products, Tickets) should be easily reachable. Display the current page title in the header.  
- **Visual Design:** Keep the layout clean with agricultural imagery and icons. Use the Baali Bigyan logo on this screen or app header. Ensure buttons are large and clearly labeled in English or Nepali as needed.

### Camera Integration & Prediction Display
- **Image Capture:** Integrate the device camera so that users can take a photo of a crop. Offer an option to pick an existing photo from the gallery as well. The camera preview should cover most of the screen with a clear shutter button.  
- **Photo Submission:** After capturing or selecting an image, immediately send it to the `/predict` endpoint using a POST request. Implement this with Axios or Fetch and FormData. Show a loading indicator (or animation) while waiting for a response.  
- **Mock Prediction Response:** Use a dummy JSON response. For example:
  ```json
  {
    "plant": "Tomato",
    "disease": "Late Blight",
    "notes": "Dark spots on older leaves, rapid spread in humid weather.",
    "treatment": "Use copper-based fungicide and remove infected leaves.",
    "video_url": "https://youtu.be/fZ_BA2PBfY4"
  }
  ```
- **Results Screen:** Display the prediction details in a readable format. Show the plant name and disease prominently, then list notes and treatment steps. Include a button or thumbnail linking to the `video_url` (educational tutorial). Allow users to save this result to their history or share it.  
- **Animations and Feedback:** Upon receiving the prediction, animate the transition to the results screen. Ensure the UI smoothly shows each piece of information (e.g., fade-in of text, sliding panels). Provide clear UI feedback if the upload fails.

### History Screen
- **List Past Predictions:** Show a scrollable list of past diagnosis records. Each item displays a thumbnail (e.g., the cropped plant image or disease icon), the date of analysis, the plant name, and diagnosed disease. Use mock data objects for this list.  
- **Detail View:** When a user taps on a history item, navigate to a detail screen showing all information from that prediction (similar to the Results Screen). Include the ability to watch the associated video again.  
- **Raise Ticket:** On the history detail screen, include a **"Consult Expert"** or **"Raise Ticket"** button. Pressing it opens the Ticket Submission form with context (the crop type and disease can be pre-filled or referenced).  
- **Clear and Sortable:** Ensure the history list has separators and legible text. (Optional) Include a filter dropdown to show history for a specific crop, or a search field to find a particular date/entry.

### Ticketing System
- **Ticket Submission (Farmer Side):** Provide a form for farmers to submit questions or issues to experts. Fields should include **Subject/Title**, **Description**, and optionally attach an image of the affected plant. The form data is sent via POST to `/ticket`.  
- **Confirmation:** After submission, display a confirmation message (e.g., a modal or toast saying “Ticket submitted successfully”). Clear the form fields for a new ticket.  
- **Ticket List (Doctor Side):** For users logged in as doctors, provide a **"Tickets"** screen showing incoming tickets. Each entry should list the farmer’s name, subject, date, and status (Open/Closed). This list can use static data for Phase 1.  
- **Ticket Detail & Response:** Doctors can tap a ticket to view full details (including attached images). Include a text field for writing a response or advice. A **"Send Response"** button can POST to a `/ticket/response` endpoint or simply simulate sending.  
- **Status Updates:** Show ticket status on both sides (e.g., unresolved vs. resolved). Allow doctors to mark a ticket as resolved, which can update the status icon/color (static behavior).

### Product Page
- **Product Catalog:** Present a grid or list of product cards relevant to the selected crop type. Each card includes an image (e.g., seed packet or fertilizer bag), product name, price, and brief description.  
- **Category Filter:** Include a dropdown or segmented control to select a crop (e.g., **Tomato**, **Potato**). When a crop is selected, filter the static product list to those for that crop.  
- **Static Data:** For Phase 1, use hardcoded JSON or arrays for product information. Example fields: `{ name, image_url, price, description, crop_type }`.  
- **Product Detail:** (Optional) Tapping a product card can open a modal or new screen with more detailed information, usage instructions, and a purchase link (URL) if available.  
- **Visual Style:** Ensure product cards are well-spaced and styled consistently. Use images with rounded corners and a clean card layout. Use color accents from the overall theme.

## Backend Communication
During Phase 1 development, the app will communicate with a Django REST backend via these endpoints. All responses are mocked (hardcoded) for now:

- **POST `/login`:** Authenticate a user or doctor.  
  - *Request Body:* `{ "username": "ram", "password": "pwd", "role": "farmer" }`  
  - *Mock Response:* `{ "status": "success", "user_id": 123, "role": "farmer" }` or `{ "status": "error", "message": "Invalid credentials" }`.  
- **POST `/predict`:** Submit an image for analysis.  
  - *Request:* FormData with an image file under the key `image`.  
  - *Mock Response:* JSON object with fields `plant`, `disease`, `notes`, `treatment`, and `video_url` (as shown above).  
- **GET `/history`:** Retrieve the list of past predictions for the logged-in user.  
  - *Request:* May include an auth token or user ID.  
  - *Mock Response:* An array of history objects, e.g.:  
    ```json
    [
      {"date":"2025-05-01","plant":"Potato","disease":"Leaf Curl Virus"},
      {"date":"2025-04-28","plant":"Rice","disease":"Blast"}
    ]
    ```  
- **POST `/ticket`:** Submit a new support ticket/question.  
  - *Request Body:* `{ "user_id":123, "title":"Weed problem", "message":"Leaves have small spots on the leaves.", "image": <file> }`  
  - *Mock Response:* `{ "status": "success", "ticket_id": 456 }`.  
- **GET `/tickets`:** (Doctor only) Fetch a list of tickets needing attention.  
  - *Mock Response:*  
    ```json
    [
      {"ticket_id":456,"user":"Ram","title":"Leaf spots","status":"Open"},
      {"ticket_id":457,"user":"Sita","title":"Drooping plants","status":"Open"}
    ]
    ```  
- **POST `/ticket/response`:** (Doctor only) Send a response to a ticket.  
  - *Request Body:* `{ "ticket_id":456, "response":"Apply a nitrogen-rich fertilizer.", "status":"Closed" }`  
  - *Mock Response:* `{ "status": "success" }`.  
- **GET `/products`:** Retrieve the product catalog.  
  - *Mock Response:*  
    ```json
    [
      {"name":"Tomato Seed - Hybrid","price":"Rs. 500","description":"High-yield variety with disease resistance.","crop":"Tomato"},
      {"name":"Potato Fertilizer","price":"Rs. 800","description":"Boosts tuber growth and nutrient uptake.","crop":"Potato"}
    ]
    ```  

All API calls should use dummy data in Phase 1. Structure service calls using Axios or Fetch so that integrating these with real endpoints later will be straightforward.

## UI/UX Requirements
- **Clean, Intuitive Design:** Use a simple and consistent layout across all screens. Leverage a color palette inspired by agriculture (greens, browns, golds). Maintain high contrast and readable fonts. Include text in Nepali where appropriate to increase accessibility for local farmers.  
- **Smooth Animations:** Incorporate subtle animations for key interactions and screen transitions. For example, animate the camera shutter, fade in results, and use a Lottie animation or spinner while loading predictions. Ensure animations are not distracting but add polish.  
- **Consistent Navigation:** Implement a navigation structure that makes it easy to switch between main sections. For instance, use a bottom tab navigator with icons for Home, Camera, History, Products, and Tickets. Keep the navigation UI elements (headers, tabs) in the same position on every screen for familiarity.  
- **Responsive Layout:** Design layouts that adapt to different device sizes (phones/tablets). Use Flexbox and percentage-based dimensions so components scale. Test the UI on both portrait and landscape modes.  
- **Optimized Camera UX:** Make the camera view full-screen with a high-resolution preview. After snapping a photo, immediately show a preview with clear “Submit” and “Retake” buttons. If the device camera is slow, pre-warm or use a lower preview resolution to reduce lag.  
- **Visual Feedback:** Provide instant visual cues. Change button styles when pressed, show progress bars or spinners during network requests, and display confirmation dialogs for actions like “Ticket Submitted” or errors like “Network Unavailable.”  
- **Accessibility:** Ensure touch targets (buttons, form fields) are large enough for all users. Use descriptive labels and, if possible, support screen readers for form inputs. Maintain a logical tab order and focus.  
- **Branding Elements:** Feature the Baali Bigyan logo on the splash screen and possibly in the app header. Keep a consistent theme (colors, fonts, icon style) that aligns with the brand identity (focus on agriculture, trust, and technology).

## Tech Stack
- **React Native:** Build the mobile application using React Native (JavaScript or TypeScript) for cross-platform support. Structure code into reusable components.  
- **Navigation:** Use React Navigation (version 5 or 6) for managing navigation (stack navigators, tab bars, etc.).  
- **HTTP Requests:** Use Axios (or the Fetch API) to call backend REST endpoints. Centralize API calls in a service module.  
- **State Management:** Use React Context or Redux for global state (user authentication, history data, tickets). For Phase 1, Context might suffice.  
- **UI Libraries (Optional):** Consider using libraries like React Native Paper, NativeBase, or UI Kitten for pre-made UI components (cards, buttons, dialogs) to speed up development.  
- **Camera & Image Handling:** Use `react-native-camera` or `expo-camera` to handle image capture. Use `react-native-image-picker` if allowing gallery selection. Compress or resize images client-side before upload if needed.  
- **Animations:** Use `lottie-react-native` for rich animations (loading spinners, icons) and the built-in Animated API for basic transitions.  
- **Backend:** Django with Django REST Framework to implement the backend APIs. Initially, these can serve static JSON or mock data.  
- **Local Storage:** Use AsyncStorage or a lightweight database (e.g., SQLite) for caching user tokens and history locally.  
- **Version Control & CI:** Use Git for code versioning. Optionally set up a CI pipeline to lint code, run tests, and generate debug builds.  
- **Testing (Basic):** While not mandatory in Phase 1, consider writing basic tests for key components or functions to ensure stability during development.  

## Next Steps & Future Scope
- **Live AI Integration:** Replace the mock `/predict` endpoint with a real inference engine. Deploy a trained model (e.g., using TensorFlow or PyTorch) on the server to analyze images and return real predictions.  
- **User Accounts & Data Storage:** Implement full authentication with Django (or another auth service). Store history and tickets in a database per user.  
- **Doctor Dashboard Expansion:** Develop a dedicated dashboard for doctors. Include filtering and sorting of tickets, user profiles, and possibly a notification system for new tickets.  
- **Additional Screens:** Add more features like a tutorial/video section with agricultural tips, a weather info page, or a community forum.  
- **Regional Expansion:** Support more languages (Nepali, English, etc.) and additional crops/diseases common in different regions of Nepal.  
- **Offline Mode:** Cache essential data (like last predictions or FAQs) for use when the network is unavailable. Allow deferred ticket submission.  
- **Performance Optimization:** Profile the app for performance bottlenecks. Optimize image processing, reduce app bundle size, and leverage lazy loading for assets.  
- **Deployment:** Prepare the app for release. Test and build production APK/IPA, obtain necessary app store certificates, and release the app on Google Play Store and Apple App Store.  
- **Feedback & Iteration:** Gather feedback from real users (farmers and agro-vets). Iterate on the UI/UX and features based on usability studies and data from analytics.  
- **Security & Privacy:** In future phases, ensure data (images, personal info) is handled securely. Implement encryption for sensitive data and secure communication (HTTPS).  
- **Scalability:** Plan for scaling up server infrastructure (e.g., move to cloud hosting, load balancing) as the user base grows and real data is processed.  

By completing these objectives in Phase 1, the Baali Bigyan app will have a solid foundation of core features and a polished user experience. The development team can then build upon this base in later phases, adding real AI capabilities and expanded features to better serve Nepalese farmers.