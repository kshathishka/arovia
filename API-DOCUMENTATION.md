# 📘 Arovia API Documentation

This document describes the REST API endpoints for the **Arovia – AI Health Desk Agent**.

Base URL (Local Development):

```
http://localhost:8000
```

When deployed, replace with your production URL.

---

# 🩺 Overview

Arovia provides AI-powered medical triage through text and voice input.  
The backend is built using **FastAPI** and integrates:

- Groq Cloud (Llama 3.3 70B)
- Whisper Large (Speech-to-Text)
- OpenStreetMap (Facility Matching)

---

# 🔐 Authentication

Currently, no authentication is required for local usage.

Future versions may include:
- API key-based authentication
- Rate limiting

---

# 📍 Endpoints

---

## 1️⃣ Root Endpoint

### `GET /`

### Description
Returns API status information.

### Response

```json
{
  "message": "Arovia API is running",
  "version": "1.0.0"
}
```

---

## 2️⃣ Health Check

### `GET /health`

### Description
Checks if API services are operational.

### Response

```json
{
  "status": "healthy"
}
```

---

## 3️⃣ Text Triage

### `POST /triage/text`

### Description
Analyzes patient symptoms provided as text and returns structured triage results.

### Request Body

```json
{
  "symptoms": "Severe chest pain for 30 minutes",
  "location": "Hyderabad",
  "coordinates": {
    "latitude": 17.3850,
    "longitude": 78.4867
  }
}
```

### Response

```json
{
  "chief_complaint": "Severe chest pain",
  "urgency_score": 10,
  "triage_category": "Immediate",
  "red_flags": ["Chest pain with radiation"],
  "potential_risks": ["Myocardial Infarction"],
  "recommended_specialty": "Cardiology",
  "facilities": [
    {
      "name": "AIIMS Emergency",
      "distance_km": 2.3
    }
  ]
}
```

---

## 4️⃣ Voice Triage

### `POST /triage/voice`

### Description
Processes audio input, converts it to text, and performs medical triage.

### Request (multipart/form-data)

- `audio_file` → Audio file
- `language` → Language code (e.g., "en", "hi")

### Response

```json
{
  "voice_result": {
    "transcription": "I have fever and cough"
  },
  "triage_result": {
    "urgency_score": 5,
    "triage_category": "Urgent"
  }
}
```

---

## 5️⃣ Facility Matching

### `POST /facilities`

### Description
Returns nearby healthcare facilities based on user location.

### Request Body

```json
{
  "location": "Hyderabad",
  "coordinates": {
    "latitude": 17.3850,
    "longitude": 78.4867
  }
}
```

### Response

```json
[
  {
    "name": "Government Hospital",
    "distance_km": 1.2,
    "specialty": "General Medicine"
  }
]
```

---

## 6️⃣ Supported Languages

### `GET /languages`

### Description
Returns list of supported languages for voice input.

### Response

```json
{
  "supported_languages": [
    "English",
    "Hindi",
    "Telugu",
    "Tamil"
  ]
}
```

---

## 7️⃣ Model Information

### `GET /models`

### Description
Returns information about the AI models currently loaded.

### Response

```json
{
  "llm_model": "Llama 3.3 70B",
  "speech_model": "Whisper Large V3"
}
```

---

# 🧠 Error Handling

All endpoints return structured error responses.

Example:

```json
{
  "error": "Invalid input format",
  "status_code": 400
}
```

Common HTTP Status Codes:

- 200 → Success
- 400 → Bad R
