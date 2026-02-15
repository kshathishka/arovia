
# Arovia - AI Health Desk Agent Documentation

This document provides a comprehensive overview of the Arovia project, its features, architecture, and setup instructions.

## 1. Project Overview

**Arovia** is an AI-powered Health Desk Agent designed to be the intelligent first point of contact in India's overburdened public health system. Named after the fusion of "AI" and "Rovia" (Sanskrit for healing), Arovia combines cutting-edge language models with medical protocols to provide safe, accurate, and accessible health triage.

### 1.1. The Problem

India faces a critical healthcare access crisis:
- Doctor-to-patient ratio: **1:1,445** (WHO recommends 1:1,000)
- Average wait time: **2-4 hours** for basic consultations
- Non-clinical front-desk staff making critical triage decisions
- Patients arriving at facilities that can't treat their condition
- 10+ minutes average door-to-triage time at Primary Health Centers

Arovia bridges this gap by providing instant, intelligent triage that:
1. Identifies emergency symptoms requiring immediate care
2. Assesses urgency levels with medical accuracy
3. Matches patients to appropriate nearby facilities
4. Generates structured referral notes for healthcare providers

## 2. Features

### 2.1. Intelligent Symptom Triage
- Natural language understanding of patient symptoms
- Context-aware follow-up questions
- Urgency scoring (1-10 scale) using validated medical protocols
- Identification of potential conditions and risks

### 2.2. Emergency Detection System
- Real-time red flag identification for life-threatening conditions
- Immediate escalation protocols for cardiac, neurological, and trauma cases
- Built-in safety rails to prevent misdiagnosis

### 2.3. Multilingual Voice Interface
- Speech-to-text using Whisper-Large model
- Support for Hindi, English, and other Indic languages
- Accessible for low-literacy populations

### 2.4. Smart Facility Matching
- Real-time geolocation using OpenStreetMap
- Search for nearby clinics within customizable radius
- Filter by specialty and service availability
- Distance calculation and map links

### 2.5. Structured Referral Notes
- Medical-compliant documentation format
- Comprehensive symptom summary
- Urgency assessment and red flags
- Recommended facilities with contact information
- Downloadable for easy handoff to healthcare providers

## 3. System Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                        AROVIA INTERFACE                          │
│                   Streamlit Web Application                       │
│         [💬 Text Input]  OR  [🎤 Voice Recording]                │
└─────────────────────────┬────────────────────────────────────────┘
                          │
                          ▼
┌──────────────────────────────────────────────────────────────────┐
│                    VOICE PROCESSING LAYER                         │
│                                                                   │
│  ╔══════════════════════════════════════════════════════════╗   │
│  ║          Whisper-Large Speech Recognition                ║   │
│  ║  • Transcribes patient voice input to text              ║   │
│  ║  • Supports Hindi, English, Telugu, Tamil               ║   │
│  ║  • Handles accents and background noise                 ║   │
│  ╚══════════════════════════════════════════════════════════╝   │
└─────────────────────────┬────────────────────────────────────────┘
                          │
                          ▼
┌──────────────────────────────────────────────────────────────────┐
│                   AROVIA INTELLIGENCE CORE                        │
│                     Powered by LangChain                          │
│                                                                   │
│  ╔══════════════════════════════════════════════════════════╗   │
│  ║              Llama 3.3 70B (Groq Cloud)                  ║   │
│  ║                                                           ║   │
│  ║  🧠 Medical Reasoning Engine:                            ║   │
│  ║     ├─ Extract: Chief complaint & symptoms               ║   │
│  ║     ├─ Analyze: Severity, duration, progression          ║   │
│  ║     ├─ Score: Urgency level (1-10)                       ║   │
│  ║     ├─ Identify: Red flag symptoms                       ║   │
│  ║     └─ Assess: Potential conditions & risks              ║   │
│  ║                                                           ║   │
│  ║  📝 Structured Output (Pydantic Model):                  ║   │
│  ║     {                                                     ║   │
│  ║       "chief_complaint": "...",                          ║   │
│  ║       "symptoms": [...],                                 ║   │
│  ║       "urgency_score": 8,                                ║   │
│  ║       "red_flags": [...],                                ║   │
│  ║       "potential_risks": [...],                          ║   │
│  ║       "recommended_specialty": "..."                     ║   │
│  ║     }                                                     ║   │
│  ╚══════════════════════════════════════════════════════════╝   │
│                          │                                        │
│              ┌───────────┴───────────┐                           │
│              │                       │                            │
│              ▼                       ▼                            │
│   ┏━━━━━━━━━━━━━━━┓       ┏━━━━━━━━━━━━━━━┓                     │
│   ┃  🚨 RED FLAG  ┃       ┃   ✅ NORMAL   ┃                     │
│   ┃   DETECTOR    ┃       ┃    TRIAGE     ┃                     │
│   ┗━━━━━┯━━━━━━━━━┛       ┗━━━━━┯━━━━━━━━━┛                     │
│         │                        │                               │
│         │ Emergency Keywords     │                               │
│         ▼                        │                               │
│   ┌─────────────┐               │                               │
│   │  IMMEDIATE  │               │                               │
│   │ ESCALATION  │               │                               │
│   │   ⚠️ 108    │               │                               │
│   └─────────────┘               │                               │
└─────────────────────────────────┼───────────────────────────────┘
                                  │
                                  ▼
┌──────────────────────────────────────────────────────────────────┐
│                   FACILITY MATCHING ENGINE                        │
│                  OpenStreetMap Integration                        │
│                                                                   │
│  📍 Location Services:                                           │
│     ├─ Geocode user location (lat/lon)                          │
│     ├─ Search clinics within radius (default: 10km)             │
│     ├─ Filter by required specialty                             │
│     ├─ Calculate distances                                      │
│     └─ Generate map links                                       │
│                                                                   │
│  🏥 Output: Top 3 Nearest Facilities                            │
│     [Clinic Name | Distance | Services | Map Link]              │
└─────────────────────────┬────────────────────────────────────────┘
                          │
                          ▼
┌──────────────────────────────────────────────────────────────────┐
│                    AROVIA REFERRAL NOTE                          │
│                   (Medical-Grade Output)                          │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  📋 PATIENT REFERRAL DOCUMENTATION                         │ │
│  │  ══════════════════════════════════════════════════════════│ │
│  │                                                             │ │
│  │  🩺 CLINICAL SUMMARY:                                      │ │
│  │     Chief Complaint: [Primary symptom description]         │ │
│  │     Duration: [Onset timeline]                             │ │
│  │     Severity: [Mild/Moderate/Severe]                       │ │
│  │     Associated Symptoms: [Secondary symptoms]              │ │
│  │                                                             │ │
│  │  ⚡ URGENCY ASSESSMENT:                                    │ │
│  │     Score: [X/10] 🔴🟡🟢                                   │ │
│  │     Red Flags: [YES/NO - List if present]                  │ │
│  │     Triage Category: [Immediate/Urgent/Standard]           │ │
│  │                                                             │ │
│  │  ⚠️ POTENTIAL RISKS:                                       │ │
│  │     • [Condition 1]                                        │ │
│  │     • [Condition 2]                                        │ │
│  │                                                             │ │
│  │  🏥 RECOMMENDED FACILITIES:                                │ │
│  │     1. [Primary Recommendation]                            │ │
│  │        📍 [Distance] • [Specialty] • [Map Link]           │ │
│  │     2. [Alternative Option 1]                              │ │
│  │        📍 [Distance] • [Specialty] • [Map Link]           │ │
│  │     3. [Alternative Option 2]                              │ │
│  │        📍 [Distance] • [Specialty] • [Map Link]           │ │
│  │                                                             │ │
│  │  ⏰ Generated: [Timestamp]                                 │ │
│  │  🤖 Powered by Arovia v1.0                                 │ │
│  │                                                             │ │
│  │  ⚠️ DISCLAIMER: This is a triage support tool, not a      │ │
│  │  medical diagnosis. Please consult a healthcare            │ │
│  │  professional for definitive medical advice.               │ │
│  └────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────┘
```

## 4. Technology Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **🧠 LLM** | Llama 3.3 70B via Groq Cloud | Medical reasoning, symptom analysis, urgency assessment |
| **🔗 Orchestration** | LangChain | Agent coordination, structured outputs, prompt management |
| **🗣️ Speech-to-Text** | Whisper-Large | Voice input processing for Indic languages |
| **📍 Geolocation** | OpenStreetMap API | Clinic search, distance calculation, mapping |
| **🎨 Frontend** | Streamlit | Rapid web interface development |
| **📦 Package Manager** | uv | Lightning-fast dependency management |
| **✅ Validation** | Pydantic | Structured medical data models |

## 5. Setup and Installation

### 5.1. Prerequisites
- Python 3.11 or higher
- `uv` package manager (`curl -LsSf https://astral.sh/uv/install.sh | sh`)

### 5.2. Installation
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-team/arovia.git
    cd arovia
    ```
2.  **Install dependencies:**
    ```bash
    uv pip install -r requirements.txt
    ```
3.  **Configure environment variables:**
    ```bash
    cp .env.example .env
    ```
    Edit the `.env` file and add your `GROQ_API_KEY`.

### 5.3. Running the Application
-   **Streamlit Web App:**
    ```bash
    streamlit run app.py
    ```
-   **FastAPI Backend:**
    ```bash
    uvicorn api.main:app --host 0.0.0.0 --port 8000 --reload
    ```

## 6. API Endpoints

The FastAPI backend provides the following endpoints:

-   `GET /`: Root endpoint with API status.
-   `GET /health`: Health check for API services.
-   `POST /triage/text`: Analyzes symptoms from text input.
    -   **Request Body:** `{"symptoms": "...", "location": "...", "coordinates": {"latitude": ..., "longitude": ...}}`
    -   **Response Body:** A `TriageResult` object.
-   `POST /triage/voice`: Analyzes symptoms from voice input.
    -   **Request Body:** `multipart/form-data` with `audio_file` and `language`.
    -   **Response Body:** A dictionary containing `voice_result` and `triage_result`.
-   `POST /facilities`: Get nearby healthcare facilities.
    -   **Request Body:** `{"location": "...", "coordinates": {"latitude": ..., "longitude": ...}}`
    -   **Response Body:** A list of facility information dictionaries.
-   `GET /languages`: Get a list of supported languages for voice input.
-   `GET /models`: Get information about the loaded AI models.

## 7. Demo Scenarios

### Scenario 1: 🚨 Emergency Case (Red Flag Detection)

**Patient Input:**
> "I've been having severe chest pain for the last 30 minutes. The pain is radiating to my left arm and I'm feeling short of breath."

**Arovia Output:**
```
╔════════════════════════════════════════════════════════╗
║              🚨 EMERGENCY DETECTED 🚨                  ║
╚════════════════════════════════════════════════════════╝

URGENCY SCORE: 10/10 🔴

RED FLAGS IDENTIFIED:
• Chest pain with radiation
• Shortness of breath
• Acute onset (<1 hour)

POTENTIAL RISKS:
• Acute Myocardial Infarction (Heart Attack)
• Unstable Angina
• Pulmonary Embolism

⚠️ IMMEDIATE ACTION REQUIRED
→ Call 108 (Emergency Services) NOW
→ Do NOT drive yourself
→ Proceed to nearest Emergency Room immediately

NEAREST EMERGENCY FACILITIES:
1. AIIMS Cardiac Emergency Unit
   📍 2.3 km • 7 min drive • [View Map]
   24/7 Cardiac Care Available

2. Apollo Hospital ER
   📍 4.1 km • 12 min drive • [View Map]
   Cardiology Specialist On-Call
```

### Scenario 2: 🟡 Urgent Case (Non-Emergency)

**Patient Input:**
> "मुझे 3 दिन से बुखार है और खांसी भी हो रही है। सांस लेने में थोड़ी तकलीफ हो रही है।"
> (Hindi: I've had fever for 3 days and cough. Having slight breathing difficulty.)

**Arovia Output:**
```
╔════════════════════════════════════════════════════════╗
║            URGENT MEDICAL ATTENTION NEEDED             ║
╚════════════════════════════════════════════════════════╝

URGENCY SCORE: 6/10 🟡

CHIEF COMPLAINT:
Fever and cough for 3 days with breathing difficulty

SYMPTOMS IDENTIFIED:
• Fever (duration: 3 days)
• Persistent cough
• Mild dyspnea (breathing difficulty)

RED FLAGS: None detected

POTENTIAL RISKS:
• Lower Respiratory Tract Infection
• Pneumonia (requires chest X-ray evaluation)
• COVID-19 or Influenza

RECOMMENDED ACTION:
Visit Primary Health Center or General Physician within 24 hours

NEAREST APPROPRIATE FACILITIES:
1. Government Primary Health Center
   📍 1.2 km • 4 min drive • [View Map]
   Services: X-ray, GP consultation, Basic lab tests

2. Community Health Center - Respiratory Clinic
   📍 3.5 km • 10 min drive • [View Map]
   Services: Pulmonary function tests, Specialist available
```

### Scenario 3: 🟢 Standard Case (Non-Urgent)

**Patient Input:**
> "I have a mild headache since this morning. No other symptoms."

**Arovia Output:**
```
╔════════════════════════════════════════════════════════╗
║             STANDARD CONSULTATION ADVISED              ║
╚════════════════════════════════════════════════════════╝

URGENCY SCORE: 2/10 🟢

CHIEF COMPLAINT:
Mild headache (duration: few hours)

SYMPTOMS IDENTIFIED:
• Tension-type headache (likely)
• No associated symptoms

RED FLAGS: None

POTENTIAL CAUSES:
• Tension headache
• Dehydration
• Eye strain
• Stress-related

RECOMMENDED ACTION:
• Rest and hydration
• OTC pain relief (e.g., Paracetamol)
• Monitor for worsening symptoms
• Consult GP if persists beyond 24 hours

NEARBY GENERAL PRACTITIONERS:
1. City Clinic - General Medicine
   📍 800m • 3 min walk • [View Map]
   Walk-in available, Avg wait: 15 mins
```

## 8. Guardrails and Safety

Arovia is designed with a strong emphasis on safety and includes several guardrails to ensure responsible AI usage in a medical context.

### 8.1. Medical Relevance Check
- **Purpose:** To prevent the system from processing non-medical queries.
- **Implementation:** A `MedicalRelevanceAgent` is used to classify the user's input. If the input is deemed not medically relevant, the system will not proceed with the triage process.
- **Code:** `agents/triage_agent.py` - `_is_relevant()` method.

### 8.2. Emergency Keyword Detection
- **Purpose:** To immediately identify and escalate high-risk medical emergencies.
- **Implementation:** A predefined dictionary of emergency keywords is used to scan the user's input. If a keyword is detected, the urgency score is automatically set to 10, and an emergency alert is triggered.
- **Code:** `agents/triage_agent.py` and `prompts/triage_prompts.py`.

### 8.3. Medical Disclaimers
- **Purpose:** To clearly communicate that Arovia is a support tool and not a substitute for professional medical advice.
- **Implementation:** Every output from the system, including the web interface and downloadable referral notes, includes a prominent medical disclaimer.

### 8.4. Data Privacy
- **Purpose:** To protect user privacy and comply with data protection regulations.
- **Implementation:** Arovia is designed to be privacy-by-design. It does not store any personal health information, and all processing is session-based.

## 9. Evaluation

The performance of the Arovia system is evaluated using both technical and clinical metrics.

### 9.1. Technical Performance

| Metric | Target | Measurement |
|---|---|---|
| **Red Flag Detection Accuracy** | 100% | Tested with a golden dataset of 10 emergency scenarios. |
| **Urgency Scoring Precision** | ±1 point | Compared with medical professional assessment on a set of 20 clinical vignettes. |
| **Facility Matching Speed** | <2 seconds | Average response time for a geolocation query. |
| **Speech Recognition Accuracy** | >85% | Word Error Rate (WER) for Hindi/English on a test set of 50 audio clips. |
| **End-to-End Latency** | <5 seconds | Average time from user input to complete referral note generation. |

### 9.2. Clinical Validation

The system's clinical accuracy is validated against a `golden_dataset.json` file containing a set of test cases with expected outcomes.

| Test Case Type | Sample Size | Expected Accuracy |
|---|---|---|
| Emergency Cases | 10 scenarios | 100% red flag detection |
| Urgent Cases | 10 scenarios | 90% appropriate triage category |
| Standard Cases | 10 scenarios | 85% correct assessment |

- **Testing:** The `test_golden_dataset.py` script is used to run the evaluation against the golden dataset.

## 10. Future Roadmap

-   **Phase 1 (Q1 2025):** Pilot deployment in 5 Primary Health Centers.
-   **Phase 2 (Q2 2025):** Add more Indic languages and integrate with telemedicine platforms.
-   **Phase 3 (Q3 2025):** Implement RAG with ICMR guidelines and add medical history context.
-   **Phase 4 (2026):** Scale to 100+ PHCs and partner with government health programs.
