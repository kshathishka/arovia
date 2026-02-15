# 📘 Changelog

All notable changes to the **Arovia – AI Health Desk Agent** project are documented in this file.

This project follows:
- **Keep a Changelog** formatting
- **Semantic Versioning (SemVer)**

---

## [Unreleased] - 2026-02-14

### 🧠 Improvements
- Enhanced facility matching responsiveness
- Expanded medical prompt templates and follow-up logic
- Refined urgency scoring thresholds based on clinical edge cases
- Better fallback and error handling in voice transcription

### 🛠 Fixes
- Addressed rare API crash with invalid geolocation coordinates
- Corrected TypeScript type mismatch in TriageForm component
- Fixed intermittent UI re-rendering glitch on language switch

---

## [1.1.0] - 2026-01-28

### 🚀 Added
- 📊 **Frontend Dashboard Enhancements**
  - New Status and System Health monitor
  - Improved facility results UI with dynamic ranking

- 🩺 **Medical Logic Upgrades**
  - Dynamic emergency follow-up question flow
  - Additional red-flag keyword categories (respiratory/neurological)

- 🧪 **Testing Enhancements**
  - Golden dataset expanded with new edge cases
  - New test suite for high-load API behavior

### 🔄 Changed
- Refactored TriageAgent logic to separate emergency detection module
- Simplified Pydantic models for easier extensibility

### 🐛 Fixed
- Resolved intermittent hanging in `/triage/voice` endpoint when user audio is silent
- Fixed mis-aligned facilities list on mobile device layouts

---

## [1.0.0] - 2025-10-26

### 🚀 Initial Public Release

**Frontend:**
- Complete React + TypeScript app  
- Tailwind CSS UI components  
- Multilingual support, including voice input

**Backend (FastAPI):**
- REST API triage endpoints (`/triage/text`, `/triage/voice`, `/facilities`)
- Swagger/OpenAPI documentation
- Voice processing pipeline with Whisper Large V3
- CORS middleware for frontend support
- Health check + model metadata endpoints

**AI & ML Integration:**
- Groq Cloud with Llama 3.3 70B for medical reasoning
- Pydantic data models for structured medical results
- 22 Indian languages supported for voice input

**Core Features:**
- Symptom triage and urgency scoring
- Real-time facility matching (OpenStreetMap)
- Structured referral generation
- Comprehensive error validation and fallback logic

**Testing & Infrastructure:**
- Backend testing framework
- Voice demo script
- Environment configuration scripts

---

## [0.1.0] - 2025-10-25

### 🎉 MVP Launch

- Basic AI core with Llama 3.3 70B  
- Whisper 22-language voice input  
- Streamlit interface for text + voice triage  
- Emergency detection and red flag alerts
- Facility matching prototype with mock dataset
- PDF report generation for triage outputs

---

## [Initial Release] - 2025-10-24

### 📦 Project Foundation

- Repository and project structure setup
- README, documentation, and implementation guidelines
- Preliminary triage logic and prototype

---

## 📌 Versioning

This project uses **Semantic Versioning**:

- **MAJOR** version: Breaking API changes
- **MINOR** version: New backward-compatible features
- **PATCH** version: Backward-compatible bug fixes

---
