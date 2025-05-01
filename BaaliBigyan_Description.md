# Baali Bigyan: Revolutionizing Agricultural Disease Detection in Nepal

Baali Bigyan is an AI-driven mobile application developed to address agricultural challenges in Nepal, with a primary focus on plant disease detection. Originating as a second-semester project at Sunway College Kathmandu, Baali Bigyan was born out of a passion to tackle critical problems in the farming sector through innovative technology. Initially focused on paddy, it now supports tomato and money plant disease detection and is evolving to integrate advanced technologies such as satellite and drone imagery for precision agriculture.

## What is Baali Bigyan?

Baali Bigyan is a mobile-based intelligent system that empowers farmers and urban agriculturalists by providing fast, accurate, and reliable plant disease diagnostics. It leverages machine learning (ML) and image processing to analyze plant leaf images and identify diseases. The system then offers tailored treatment solutions, educational resources, expert consultations, and e-commerce functionalities—all in a single app.

The name "Baali Bigyan" is derived from Nepali words, where "Baali" means crops and "Bigyan" means science, together reflecting the app’s mission to bridge agriculture with modern science and technology.

## Features of Baali Bigyan

### 1. **Plant Disease Detection via Image Analysis**

- **How it Works**: Users upload an image of the affected plant leaf through the app. The image is processed through a pre-trained ML model (Convolutional Neural Network-based) that classifies the disease.
- **Supported Crops**: Paddy, Tomato, and Money Plant (with plans to expand).
- **Accuracy**: The model has been trained on thousands of curated disease images and provides high accuracy through fine-tuning.
- **Technology Used**: Python, TensorFlow/Keras, OpenCV for preprocessing, and a Flask/FastAPI backend to handle inference requests.

### 2. **Treatment Recommendations**

- Post-diagnosis, the app provides organic and chemical treatment recommendations.
- Includes step-by-step instructions and precautions.
- Treatment is dynamically fetched from a disease-treatment database.

### 3. **Video Tutorials & Educational Resources**

- Curated content that helps farmers learn how to prevent and manage common plant diseases.
- Videos are categorized by crop and disease.
- Resources are updated regularly based on user queries and agro-vet feedback.

### 4. **Agro-Vet Consultation Ticketing System**

- Allows farmers to raise tickets and consult with certified agricultural veterinarians.
- Communication occurs via in-app messaging or scheduled video calls.
- Experts can review submitted images and queries to offer personalized advice.

### 5. **E-Commerce for Agricultural Inputs**

- Users can purchase fertilizers, pesticides, tools, and seeds recommended for the diagnosed disease.
- Secure payment gateway integration (Khalti/esewa planned).
- Smart cart that recommends products based on diagnosis.

### 6. **Expansion to Urban Farming Sectors**

- Targets terrace farming, tunnel farming, and indoor plantations.
- Disease detection features and tutorials are adapted for indoor light conditions and pot-based cultivation.
- Helps urban growers adopt scientific practices in limited spaces.

---

## Technical Architecture of Baali Bigyan

### 📱 Frontend (Mobile App)

- **Built With**: React Native
- **Functionality**:
  - Image capture and upload
  - User dashboard for history tracking
  - Consultation and order management
  - Push notifications for updates & recommendations
  - E-commerce section for medicine shopping, medicine recommendation, Agri product shopping
- **Communication**: REST API calls to backend

### 🧠 Machine Learning Model

- **Architecture**: CNN model trained using TensorFlow/Keras
- **Input**: Leaf images (256x256 or dynamically resized)
- **Output**: Predicted class (disease label)

### 🌐 Backend

- **Framework**: Django Rest API
- **Microservices**:
  - Image handling and forwarding to ML server
  - Authentication and user management
  - Order and ticket management
  - Content and video management service
- **Database**: DbSQLite
  - Stores users, diagnosis records, product catalog, ticket history, and learning content metadata

### 🔗 Communication Flow

1. User opens app and captures/upload image.
2. Image sent via REST API to backend server.
3. Backend server forwards it to ML inference endpoint.
4. Result (disease class) returned and stored in database.
5. Result will include the prediction, symptoms that is relied on, measure and other
6. Backend fetches appropriate treatment, videos, and product list.
7. Frontend renders the full diagnosis result with options to act (consult, buy, learn).

## Conclusion

Baali Bigyan is more than an app—it’s a movement to digitally empower farmers and transform the way Nepal approaches agriculture. By merging artificial intelligence with accessible design and localized content, we aim to uplift livelihoods, improve food security, and inspire a generation of agri-tech innovators.

_"Baali Bigyan: Cultivating smarter farms, one pixel at a time."_
