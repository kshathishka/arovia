import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const en = {
    translation: {
        title: "Arovia Health",
        nav: {
            dashboard: "Dashboard",
            voice: "Voice Input",
            facilities: "Facilities",
            results: "Results"
        },

        // Landing Page
        landing: {
            badge: "Arovia Health Logic v1.0 Live",
            heroTitle: "Intelligent Triage for Every Citizen",
            heroSubtitle: "Revolutionizing first-point healthcare access in India. AI-powered assessments, multilingual voice support, and instant facility matching.",
            startButton: "Start Assessment",
            learnMoreButton: "Learn More",
            stat1Value: "1:1,445",
            stat1Title: "Doctor-to-Patient Ratio",
            stat1Desc: "Well below the WHO recommendation of 1:1,000, leading to severe access gaps.",
            stat2Value: "2-4 hrs",
            stat2Title: "Average Wait Time",
            stat2Desc: "For basic consultations in public facilities, delaying critical care.",
            stat3Value: "10 min",
            stat3Title: "Door-to-Triage",
            stat3Desc: "Manual processes slow down identification of emergency cases.",
            featuresTitle: "Healthcare Intelligence at Scale",
            featuresSubtitle: "Arovia combines clinical protocols with advanced AI to bridge the gap between patients and care.",
            feature1Title: "Symptom Triage",
            feature1Desc: "Advanced NLP analyzes symptoms to assess urgency (1-10 scale) and identify potential conditions instantly.",
            feature2Title: "Red Flag Detection",
            feature2Desc: "Real-time identification of life-threatening emergencies (Cardiac, Stroke, Trauma) for immediate escalation.",
            feature3Title: "Multilingual Voice",
            feature3Desc: "Speak naturally in Hindi, English, or regional languages. Powered by Whisper for high-accuracy transcription.",
            feature4Title: "Smart Matching",
            feature4Desc: "Geolocation-based search connects patients to the nearest appropriate facilities (Govt, NGO, Private).",
            feature5Title: "Referral Notes",
            feature5Desc: "Generates structured medical summaries for seamless handoffs to doctors, reducing administrative burden.",
            feature6Title: "Ready to try?",
            feature6Subtitle: "Experience the future of triage today.",
            feature6Button: "Launch Dashboard",
            footerTitle: "Arovia",
            footerSubtitle: "AI-Powered Health Triage Agent",
            footerPrivacy: "Privacy",
            footerTerms: "Terms",
            footerContact: "Contact",
            footerCopyright: "Arovia Health. All rights reserved."
        },

        // Triage Form
        triageForm: {
            heading: "Symptom Assessment",
            subheading: "Describe your symptoms in detail for AI analysis",
            symptomsLabel: "Describe your symptoms",
            required: "*",
            symptomsPlaceholder: "Example: I have a severe headache on the left side, sensitivity to light, and nausea for the past 4 hours...",
            symptomsHint: "Be as specific as possible about the pain, duration, and any triggers.",
            locationLabel: "Your Location (Optional)",
            locationPlaceholder: "City, State OR Click to Detect",
            quickSelectLabel: "Quick Select Examples",
            cancelButton: "Cancel",
            submitButton: "Start Triage Analysis",
            analyzingButton: "Analyzing...",
            example1: "I have chest pain and shortness of breath",
            example2: "I have a high fever and headache",
            example3: "I have severe abdominal pain",
            example4: "I have difficulty breathing",
            example5: "I have a persistent cough"
        },

        // Voice Input
        voiceInput: {
            heading: "Voice Input",
            subheading: "Speak your symptoms in your preferred language",
            selectLanguage: "Select Language",
            recordingTime: "Recording...",
            recordingComplete: "Recording completed",
            recordingStop: "Click stop when finished",
            tipsTitle: "Recording Tips:",
            tip1: "• Speak clearly and at a normal pace",
            tip2: "• Describe your symptoms in detail",
            tip3: "• Include when symptoms started",
            tip4: "• Mention severity and any associated symptoms",
            tip5: "• Recording will automatically stop after 30 seconds",
            backButton: "Back to Dashboard",
            submitButton: "Analyze Recording",
            processingButton: "Processing..."
        },

        // Results
        results: {
            loading: "Analyzing Symptoms",
            loadingDesc: "Our AI is processing your symptoms...",
            errorTitle: "Analysis Error",
            tryAgainButton: "Try Again",
            noResultsTitle: "No Results",
            noResultsDesc: "Please submit symptoms for analysis",
            startButton: "Start Assessment",
            heading: "Triage Results",
            subheading: "AI-powered medical assessment",
            downloadButton: "Download Note",
            newAssessment: "New Assessment",
            urgencyScore: "Urgency Score",
            recommendedSpecialty: "Recommended Specialty",
            emergencyDetected: "Emergency Detected",
            yes: "YES",
            no: "NO",
            chiefComplaint: "Chief Complaint",
            redFlagsTitle: "Red Flags Detected",
            action: "Action",
            potentialRisks: "Potential Risks",
            specialty: "Specialty",
            highProbability: "high probability",
            mediumProbability: "medium probability",
            lowProbability: "low probability",
            recommendations: "Recommendations",
            emergencyTitle: "EMERGENCY DETECTED",
            emergencyCall: "🚨 CALL 108 IMMEDIATELY",
            emergencyTip1: "Do NOT drive yourself",
            emergencyTip2: "Call emergency services (108)",
            emergencyTip3: "Proceed to nearest Emergency Room",
            nearbyFacilities: "Nearby Healthcare Facilities",
            immediate: "IMMEDIATE",
            urgent: "URGENT",
            standard: "STANDARD"
        },

        // Facilities
        facilities: {
            heading: "Healthcare Facilities",
            subheading: "Find nearby medical centers and hospitals",
            searchPlaceholder: "Enter city, state (e.g., Mumbai, Maharashtra)",
            searchButton: "Search",
            loadingTitle: "Finding Facilities",
            loadingDesc: "Searching for nearby healthcare centers...",
            foundFacilities: "Found {{count}} facilities",
            sortedBy: "Sorted by distance",
            recommended: "⭐ Recommended",
            servicesAvailable: "Services Available:",
            viewOnMap: "View on Map →",
            saveButton: "Save",
            directionsButton: "Get Directions",
            noFacilitiesTitle: "No Facilities Found",
            noFacilitiesDesc: "Try searching for a different location or check your spelling.",
            clearButton: "Clear Search",
            priority: "Priority",
            kmAway: "km away"
        },

        // Disclaimer
        disclaimer: {
            title: "Medical Disclaimer",
            textFull: "This application uses Artificial Intelligence to provide preliminary health triage recommendations. It is NOT a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. If you think you may have a medical emergency, call your doctor or emergency services immediately.",
            textShort: "AI-powered assistant. Not a substitute for professional medical advice.",
            accept: "I Understand & Enter",
            readMore: "Read Full Disclaimer"
        }
    }
};

// Hindi translations
const hi = {
    translation: {
        title: "एरोविया हेल्थ",
        nav: {
            dashboard: "डैशबोर्ड",
            voice: "वॉयस इनपुट",
            facilities: "सुविधाएं",
            results: "परिणाम"
        },

        landing: {
            badge: "एरोविया हेल्थ लॉजिक v1.0 लाइव",
            heroTitle: "हर नागरिक के लिए बुद्धिमान ट्राइएज",
            heroSubtitle: "भारत में प्रथम-बिंदु स्वास्थ्य सेवा पहुंच में क्रांति। AI-संचालित मूल्यांकन, बहुभाषी आवाज समर्थन, और त्वरित सुविधा मिलान।",
            startButton: "मूल्यांकन शुरू करें",
            learnMoreButton: "और जानें",
            stat1Value: "1:1,445",
            stat1Title: "डॉक्टर-से-मरीज अनुपात",
            stat1Desc: "WHO की 1:1,000 की सिफारिश से काफी नीचे, जिससे गंभीर पहुंच अंतराल होता है।",
            stat2Value: "2-4 घंटे",
            stat2Title: "औसत प्रतीक्षा समय",
            stat2Desc: "सार्वजनिक सुविधाओं में बुनियादी परामर्श के लिए, महत्वपूर्ण देखभाल में देरी।",
            stat3Value: "10 मिनट",
            stat3Title: "दरवाजे-से-ट्राइएज",
            stat3Desc: "मैनुअल प्रक्रियाएं आपातकालीन मामलों की पहचान को धीमा करती हैं।",
            featuresTitle: "बड़े पैमाने पर स्वास्थ्य सेवा बुद्धिमत्ता",
            featuresSubtitle: "एरोविया रोगियों और देखभाल के बीच की खाई को पाटने के लिए नैदानिक प्रोटोकॉल को उन्नत AI के साथ जोड़ता है।",
            feature1Title: "लक्षण ट्राइएज",
            feature1Desc: "उन्नत NLP तुरंत तात्कालिकता (1-10 स्केल) का आकलन करने और संभावित स्थितियों की पहचान करने के लिए लक्षणों का विश्लेषण करता है।",
            feature2Title: "रेड फ्लैग डिटेक्शन",
            feature2Desc: "तत्काल वृद्धि के लिए जीवन-धमकी देने वाली आपात स्थितियों (कार्डियक, स्ट्रोक, आघात) की वास्तविक समय पहचान।",
            feature3Title: "बहुभाषी आवाज",
            feature3Desc: "हिंदी, अंग्रेजी या क्षेत्रीय भाषाओं में स्वाभाविक रूप से बोलें। उच्च-सटीकता प्रतिलेखन के लिए Whisper द्वारा संचालित।",
            feature4Title: "स्मार्ट मैचिंग",
            feature4Desc: "भू-स्थान-आधारित खोज रोगियों को निकटतम उपयुक्त सुविधाओं (सरकारी, NGO, निजी) से जोड़ती है।",
            feature5Title: "रेफरल नोट्स",
            feature5Desc: "डॉक्टरों को निर्बाध हस्तांतरण के लिए संरचित चिकित्सा सारांश उत्पन्न करता है, प्रशासनिक बोझ कम करता है।",
            feature6Title: "कोशिश करने के लिए तैयार?",
            feature6Subtitle: "आज ट्राइएज के भविष्य का अनुभव करें।",
            feature6Button: "डैशबोर्ड लॉन्च करें",
            footerTitle: "एरोविया",
            footerSubtitle: "AI-संचालित हेल्थ ट्राइएज एजेंट",
            footerPrivacy: "गोपनीयता",
            footerTerms: "नियम",
            footerContact: "संपर्क",
            footerCopyright: "एरोविया हेल्थ। सर्वाधिकार सुरक्षित।"
        },

        triageForm: {
            heading: "लक्षण मूल्यांकन",
            subheading: "AI विश्लेषण के लिए अपने लक्षणों का विस्तार से वर्णन करें",
            symptomsLabel: "अपने लक्षणों का वर्णन करें",
            required: "*",
            symptomsPlaceholder: "उदाहरण: मुझे पिछले 4 घंटों से बाईं ओर गंभीर सिरदर्द, प्रकाश के प्रति संवेदनशीलता और मतली है...",
            symptomsHint: "दर्द, अवधि और किसी भी ट्रिगर के बारे में यथासंभव विशिष्ट रहें।",
            locationLabel: "आपका स्थान (वैकल्पिक)",
            locationPlaceholder: "शहर, राज्य या पता लगाने के लिए क्लिक करें",
            quickSelectLabel: "त्वरित चयन उदाहरण",
            cancelButton: "रद्द करें",
            submitButton: "ट्राइएज विश्लेषण शुरू करें",
            analyzingButton: "विश्लेषण कर रहे हैं...",
            example1: "मुझे सीने में दर्द और सांस लेने में तकलीफ है",
            example2: "मुझे तेज बुखार और सिरदर्द है",
            example3: "मुझे गंभीर पेट दर्द है",
            example4: "मुझे सांस लेने में कठिनाई है",
            example5: "मुझे लगातार खांसी है"
        },

        voiceInput: {
            heading: "वॉयस इनपुट",
            subheading: "अपनी पसंदीदा भाषा में अपने लक्षण बोलें",
            selectLanguage: "भाषा चुनें",
            recordingTime: "रिकॉर्डिंग...",
            recordingComplete: "रिकॉर्डिंग पूर्ण",
            recordingStop: "समाप्त होने पर स्टॉप क्लिक करें",
            tipsTitle: "रिकॉर्डिंग टिप्स:",
            tip1: "• स्पष्ट रूप से और सामान्य गति से बोलें",
            tip2: "• अपने लक्षणों का विस्तार से वर्णन करें",
            tip3: "• लक्षण कब शुरू हुए शामिल करें",
            tip4: "• गंभीरता और किसी भी संबंधित लक्षण का उल्लेख करें",
            tip5: "• रिकॉर्डिंग 30 सेकंड के बाद स्वचालित रूप से बंद हो जाएगी",
            backButton: "डैशबोर्ड पर वापस जाएं",
            submitButton: "रिकॉर्डिंग विश्लेषण करें",
            processingButton: "प्रसंस्करण..."
        },

        results: {
            loading: "लक्षणों का विश्लेषण",
            loadingDesc: "हमारी AI आपके लक्षणों को संसाधित कर रही है...",
            errorTitle: "विश्लेषण त्रुटि",
            tryAgainButton: "पुनः प्रयास करें",
            noResultsTitle: "कोई परिणाम नहीं",
            noResultsDesc: "कृपया विश्लेषण के लिए लक्षण सबमिट करें",
            startButton: "मूल्यांकन शुरू करें",
            heading: "ट्राइएज परिणाम",
            subheading: "AI-संचालित चिकित्सा मूल्यांकन",
            downloadButton: "नोट डाउनलोड करें",
            newAssessment: "नया मूल्यांकन",
            urgencyScore: "तात्कालिकता स्कोर",
            recommendedSpecialty: "अनुशंसित विशेषता",
            emergencyDetected: "आपातकाल का पता चला",
            yes: "हाँ",
            no: "नहीं",
            chiefComplaint: "मुख्य शिकायत",
            redFlagsTitle: "रेड फ्लैग का पता चला",
            action: "कार्रवाई",
            potentialRisks: "संभावित जोखिम",
            specialty: "विशेषता",
            highProbability: "उच्च संभावना",
            mediumProbability: "मध्यम संभावना",
            lowProbability: "कम संभावना",
            recommendations: "सिफारिशें",
            emergencyTitle: "आपातकाल का पता चला",
            emergencyCall: "🚨 तुरंत 108 कॉल करें",
            emergencyTip1: "स्वयं गाड़ी न चलाएं",
            emergencyTip2: "आपातकालीन सेवाओं को बुलाएं (108)",
            emergencyTip3: "निकटतम आपातकालीन कक्ष में जाएं",
            nearbyFacilities: "निकटवर्ती स्वास्थ्य सेवा सुविधाएं",
            immediate: "तत्काल",
            urgent: "जरूरी",
            standard: "मानक"
        },

        facilities: {
            heading: "स्वास्थ्य सुविधाएं",
            subheading: "निकटवर्ती चिकित्सा केंद्र और अस्पताल खोजें",
            searchPlaceholder: "शहर, राज्य दर्ज करें (उदा., मुंबई, महाराष्ट्र)",
            searchButton: "खोजें",
            loadingTitle: "सुविधाएं ढूंढ रहे हैं",
            loadingDesc: "निकटवर्ती स्वास्थ्य सेवा केंद्रों की खोज...",
            foundFacilities: "{{count}} सुविधाएं मिलीं",
            sortedBy: "दूरी के अनुसार क्रमबद्ध",
            recommended: "⭐ अनुशंसित",
            servicesAvailable: "उपलब्ध सेवाएं:",
            viewOnMap: "मानचित्र पर देखें →",
            saveButton: "सहेजें",
            directionsButton: "दिशा-निर्देश प्राप्त करें",
            noFacilitiesTitle: "कोई सुविधा नहीं मिली",
            noFacilitiesDesc: "किसी भिन्न स्थान के लिए खोजें या अपनी वर्तनी जांचें।",
            clearButton: "खोज साफ़ करें",
            priority: "प्राथमिकता",
            kmAway: "किमी दूर"
        },

        disclaimer: {
            title: "चिकित्सा अस्वीकरण",
            textFull: "यह एप्लिकेशन प्रारंभिक स्वास्थ्य ट्राइएज सिफारिशें प्रदान करने के लिए कृत्रिम बुद्धिमत्ता का उपयोग करता है। यह पेशेवर चिकित्सा सलाह, निदान या उपचार का विकल्प नहीं है। किसी चिकित्सा स्थिति के बारे में आपके किसी भी प्रश्न के साथ हमेशा अपने चिकित्सक या अन्य योग्य स्वास्थ्य प्रदाता की सलाह लें। यदि आपको लगता है कि आपके पास चिकित्सा आपातकाल हो सकता है, तो तुरंत अपने डॉक्टर या आपातकालीन सेवाओं को बुलाएं।",
            textShort: "AI-संचालित सहायक। पेशेवर चिकित्सा सलाह का विकल्प नहीं।",
            accept: "मैं समझता हूं और प्रवेश करें",
            readMore: "पूर्ण अस्वीकरण पढ़ें"
        }
    }
};

// Telugu translations
const te = {
    translation: {
        title: "అరోవియా హెల్త్",
        nav: {
            dashboard: "డాష్‌బోర్డ్",
            voice: "వాయిస్ ఇన్‌పుట్",
            facilities: "సౌకర్యాలు",
            results: "ఫలితాలు"
        },

        landing: {
            badge: "అరోవియా హెల్త్ లాజిక్ v1.0 లైవ్",
            heroTitle: "ప్రతి పౌరుడికి తెలివైన ట్రయేజ్",
            heroSubtitle: "భారతదేశంలో మొదటి-పాయింట్ ఆరోగ్య సంరక్షణ ప్రాప్యతను విప్లవాత్మకంగా మార్చడం। AI-ఆధారిత అంచనాలు, బహుభాషా వాయిస్ సపోర్ట్, మరియు తక్షణ సౌకర్య సరిపోలిక.",
            startButton: "అంచనా ప్రారంభించండి",
            learnMoreButton: "మరింత తెలుసుకోండి",
            stat1Value: "1:1,445",
            stat1Title: "డాక్టర్-నుండి-పేషెంట్ నిష్పత్తి",
            stat1Desc: "WHO సిఫారసు చేసిన 1:1,000 కంటే చాలా తక్కువ, తీవ్రమైన యాక్సెస్ అంతరాలకు దారితీస్తుంది.",
            stat2Value: "2-4 గంటలు",
            stat2Title: "సగటు వేచి ఉండే సమయం",
            stat2Desc: "ప్రభుత్వ సౌకర్యాలలో ప్రాథమిక సంప్రదింపుల కోసం, క్లిష్టమైన సంరక్షణను ఆలస్యం చేస్తుంది.",
            stat3Value: "10 నిమిషాలు",
            stat3Title: "డోర్-టు-ట్రయేజ్",
            stat3Desc: "మాన్యువల్ ప్రక్రియలు అత్యవసర కేసుల గుర్తింపును నెమ్మదిస్తాయి.",
            featuresTitle: "స్కేల్‌లో ఆరోగ్య సంరక్షణ తెలివితేటలు",
            featuresSubtitle: "అరోవియా రోగులు మరియు సంరక్షణ మధ్య అంతరాన్ని తగ్గించడానికి క్లినికల్ ప్రోటోకాల్‌లను అధునాతన AI తో మిళితం చేస్తుంది.",
            feature1Title: "లక్షణ ట్రయేజ్",
            feature1Desc: "అధునాతన NLP తక్షణమే తీవ్రతను (1-10 స్కేల్) అంచనా వేయడానికి మరియు సంభావ్య పరిస్థితులను గుర్తించడానికి లక్షణాలను విశ్లేషిస్తుంది.",
            feature2Title: "రెడ్ ఫ్లాగ్ గుర్తింపు",
            feature2Desc: "తక్షణ పెంపు కోసం ప్రాణాంతక అత్యవసర పరిస్థితుల (కార్డియాక్, స్ట్రోక్, ట్రామా) రియల్-టైమ్ గుర్తింపు.",
            feature3Title: "బహుభాషా వాయిస్",
            feature3Desc: "తెలుగు, హిందీ, ఇంగ్లీష్ లేదా ప్రాంతీయ భాషలలో సహజంగా మాట్లాడండి। అధిక-ఖచ్చితత్వ ట్రాన్స్క్రిప్షన్ కోసం Whisper ద్వారా శక్తివంతం.",
            feature4Title: "స్మార్ట్ మ్యాచింగ్",
            feature4Desc: "జియో-లొకేషన్ ఆధారిత శోధన రోగులను సమీప తగిన సౌకర్యాలతో (ప్రభుత్వం, NGO, ప్రైవేట్) కనెక్ట్ చేస్తుంది.",
            feature5Title: "రిఫరల్ నోట్స్",
            feature5Desc: "డాక్టర్లకు సజావుగా హ్యాండ్‌ఓవర్ కోసం నిర్మాణాత్మక వైద్య సారాంశాలను రూపొందిస్తుంది, పరిపాలనా భారాన్ని తగ్గిస్తుంది.",
            feature6Title: "ప్రయత్నించడానికి సిద్ధంగా ఉన్నారా?",
            feature6Subtitle: "ఈరోజు ట్రయేజ్ యొక్క భవిష్యత్తును అనుభవించండి.",
            feature6Button: "డాష్‌బోర్డ్ లాంచ్ చేయండి",
            footerTitle: "అరోవియా",
            footerSubtitle: "AI-ఆధారిత హెల్త్ ట్రయేజ్ ఏజెంట్",
            footerPrivacy: "గోప్యత",
            footerTerms: "నిబంధనలు",
            footerContact: "సంప్రదించండి",
            footerCopyright: "అరోవియా హెల్త్. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి."
        },

        triageForm: {
            heading: "లక్షణ అంచనా",
            subheading: "AI విశ్లేషణ కోసం మీ లక్షణాలను వివరంగా వివరించండి",
            symptomsLabel: "మీ లక్షణాలను వివరించండి",
            required: "*",
            symptomsPlaceholder: "ఉదాహరణ: గత 4 గంటలుగా నాకు ఎడమ వైపున తీవ్రమైన తలనొప్పి, కాంతికి సున్నితత్వం మరియు వికారం ఉన్నాయి...",
            symptomsHint: "నొప్పి, వ్యవధి మరియు ఏవైనా ట్రిగ్గర్‌ల గురించి వీలైనంత నిర్దిష్టంగా ఉండండి.",
            locationLabel: "మీ లొకేషన్ (ఐచ్ఛికం)",
            locationPlaceholder: "నగరం, రాష్ట్రం లేదా గుర్తించడానికి క్లిక్ చేయండి",
            quickSelectLabel: "త్వరిత ఎంపిక ఉదాహరణలు",
            cancelButton: "రద్దు చేయండి",
            submitButton: "ట్రయేజ్ విశ్లేషణ ప్రారంభించండి",
            analyzingButton: "విశ్లేషిస్తోంది...",
            example1: "నాకు ఛాతీ నొప్పి మరియు శ్వాస ఆడకపోవటం ఉంది",
            example2: "నాకు అధిక జ్వరం మరియు తలనొప్పి ఉంది",
            example3: "నాకు తీవ్రమైన పొత్తికడుపు నొప్పి ఉంది",
            example4: "నాకు శ్వాస తీసుకోవడంలో ఇబ్బంది ఉంది",
            example5: "నాకు నిరంతర దగ్గు ఉంది"
        },

        voiceInput: {
            heading: "వాయిస్ ఇన్‌పుట్",
            subheading: "మీకు ఇష్టమైన భాషలో మీ లక్షణాలను మాట్లాడండి",
            selectLanguage: "భాషను ఎంచుకోండి",
            recordingTime: "రికార్డింగ్...",
            recordingComplete: "రికార్డింగ్ పూర్తయింది",
            recordingStop: "పూర్తయినప్పుడు స్టాప్ క్లిక్ చేయండి",
            tipsTitle: "రికార్డింగ్ చిట్కాలు:",
            tip1: "• స్పష్టంగా మరియు సాధారణ వేగంతో మాట్లాడండి",
            tip2: "• మీ లక్షణాలను వివరంగా వివరించండి",
            tip3: "• లక్షణాలు ఎప్పుడు ప్రారంభమయ్యాయో చేర్చండి",
            tip4: "• తీవ్రత మరియు ఏవైన సంబంధిత లక్షణాలను పేర్కొనండి",
            tip5: "• రికార్డింగ్ 30 సెకన్ల తర్వాత స్వయంచాలకంగా ఆగిపోతుంది",
            backButton: "డాష్‌బోర్డ్‌కు తిరిగి వెళ్ళండి",
            submitButton: "రికార్డింగ్ విశ్లేషించండి",
            processingButton: "ప్రాసెస్ చేస్తోంది..."
        },

        results: {
            loading: "లక్షణాలను విశ్లేషిస్తోంది",
            loadingDesc: "మా AI మీ లక్షణాలను ప్రాసెస్ చేస్తోంది...",
            errorTitle: "విశ్లేషణ లోపం",
            tryAgainButton: "మళ్లీ ప్రయత్నించండి",
            noResultsTitle: "ఫలితాలు లేవు",
            noResultsDesc: "దయచేసి విశ్లేషణ కోసం లక్షణాలను సమర్పించండి",
            startButton: "అంచనా ప్రారంభించండి",
            heading: "ట్రయేజ్ ఫలితాలు",
            subheading: "AI-ఆధారిత వైద్య అంచనా",
            downloadButton: "నోట్ డౌన్‌లోడ్ చేయండి",
            newAssessment: "కొత్త అంచనా",
            urgencyScore: "తీవ్రత స్కోరు",
            recommendedSpecialty: "సిఫార్సు చేయబడిన ప్రత్యేకత",
            emergencyDetected: "అత్యవసరం గుర్తించబడింది",
            yes: "అవును",
            no: "కాదు",
            chiefComplaint: "ముఖ్య ఫిర్యాదు",
            redFlagsTitle: "రెడ్ ఫ్లాగ్‌లు గుర్తించబడ్డాయి",
            action: "చర్య",
            potentialRisks: "సంభావ్య ప్రమాదాలు",
            specialty: "ప్రత్యేకత",
            highProbability: "అధిక సంభావ్యత",
            mediumProbability: "మధ్యస్థ సంభావ్యత",
            lowProbability: "తక్కువ సంభావ్యత",
            recommendations: "సిఫార్సులు",
            emergencyTitle: "అత్యవసరం గుర్తించబడింది",
            emergencyCall: "🚨 వెంటనే 108కు కాల్ చేయండి",
            emergencyTip1: "మీరే డ్రైవ్ చేయవద్దు",
            emergencyTip2: "అత్యవసర సేవలకు కాల్ చేయండి (108)",
            emergencyTip3: "సమీప అత్యవసర గదికి వెళ్ళండి",
            nearbyFacilities: "సమీప ఆరోగ్య సంరక్షణ సౌకర్యాలు",
            immediate: "తక్షణ",
            urgent: "అత్యవసరం",
            standard: "ప్రామాణికం"
        },

        facilities: {
            heading: "ఆరోగ్య సౌకర్యాలు",
            subheading: "సమీప వైద్య కేంద్రాలు మరియు ఆసుపత్రులను కనుగొనండి",
            searchPlaceholder: "నగరం, రాష్ట్రాన్ని నమోదు చేయండి (ఉ.దా., ముంబై, మహారాష్ట్ర)",
            searchButton: "శోధించండి",
            loadingTitle: "సౌకర్యాలను కనుగొంటోంది",
            loadingDesc: "సమీప ఆరోగ్య సంరక్షణ కేంద్రాల కోసం శోధిస్తోంది...",
            foundFacilities: "{{count}} సౌకర్యాలు కనుగొనబడ్డాయి",
            sortedBy: "దూరం ద్వారా క్రమబద్ధీకరించబడింది",
            recommended: "⭐ సిఫార్సు చేయబడింది",
            servicesAvailable: "అందుబాటులో ఉన్న సేవలు:",
            viewOnMap: "మ్యాప్‌లో చూడండి →",
            saveButton: "సేవ్ చేయండి",
            directionsButton: "దిశలను పొందండి",
            noFacilitiesTitle: "సౌకర్యాలు కనుగొనబడలేదు",
            noFacilitiesDesc: "వేరే లొకేషన్ కోసం శోధించండి లేదా మీ స్పెల్లింగ్ తనిఖీ చేయండి.",
            clearButton: "శోధనను క్లియర్ చేయండి",
            priority: "ప్రాధాన్యత",
            kmAway: "కి.మీ దూరంలో"
        },

        disclaimer: {
            title: "వైద్య నిరాకరణ",
            textFull: "ఈ అప్లికేషన్ ప్రాథమిక ఆరోగ్య ట్రయేజ్ సిఫార్సులను అందించడానికి కృత్రిమ మేధస్సును ఉపయోగిస్తుంది. ఇది వృత్తిపరమైన వైద్య సలహా, నిర్ధారణ లేదా చికిత్సకు ప్రత్యామ్నాయం కాదు. మీకు వైద్య పరిస్థితి గురించి ఏవైనా ప్రశ్నలు ఉంటే ఎల్లప్పుడూ మీ వైద్యుడు లేదా ఇతర అర్హత కలిగిన ఆరోగ్య సేవా ప్రదాత యొక్క సలహాను తీసుకోండి. మీకు వైద్య అత్యవసరం ఉందని మీరు అనుకుంటే, మీ డాక్టర్ లేదా అత్యవసర సేవలను వెంటనే కాల్ చేయండి.",
            textShort: "AI-ఆధారిత సహాయకుడు. వృత్తిపరమైన వైద్య సలహాకు ప్రత్యామ్నాయం కాదు.",
            accept: "నేను అర్థం చేసుకున్నాను & ప్రవేశించండి",
            readMore: "పూర్తి నిరాకరణను చదవండి"
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: { en, hi, te },
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;
