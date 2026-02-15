import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MicrophoneIcon, StopIcon, PlayIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

interface VoiceInputProps {
  onSubmit: (audioBlob: Blob, language: string) => void;
  loading: boolean;
  error: string | null;
}

const VoiceInput: React.FC<VoiceInputProps> = ({ onSubmit, loading, error }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'Hindi' },
    { code: 'bn', name: 'Bengali' },
    { code: 'te', name: 'Telugu' },
    { code: 'mr', name: 'Marathi' },
    { code: 'ta', name: 'Tamil' },
    { code: 'gu', name: 'Gujarati' },
    { code: 'ur', name: 'Urdu' },
    { code: 'kn', name: 'Kannada' },
    { code: 'or', name: 'Odia' },
  ];

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        setAudioBlob(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);

      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);

    } catch (err) {
      console.error('Error accessing microphone:', err);
      alert('Please allow microphone access to use voice input');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const handleSubmit = () => {
    if (audioBlob) {
      onSubmit(audioBlob, selectedLanguage);
      navigate('/results');
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="card">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
            <MicrophoneIcon className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{t('voiceInput.heading')}</h1>
            <p className="text-gray-600">{t('voiceInput.subheading')}</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Language Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('voiceInput.selectLanguage')}
            </label>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="input-field"
              disabled={isRecording}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          {/* Recording Interface */}
          <div className="text-center">
            <div className="mb-6">
              {!isRecording ? (
                <button
                  onClick={startRecording}
                  disabled={loading}
                  className="w-20 h-20 bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center mx-auto transition-colors duration-200"
                >
                  <MicrophoneIcon className="w-8 h-8 text-white" />
                </button>
              ) : (
                <button
                  onClick={stopRecording}
                  className="w-20 h-20 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center mx-auto transition-colors duration-200"
                >
                  <StopIcon className="w-8 h-8 text-white" />
                </button>
              )}
            </div>

            {isRecording && (
              <div className="mb-4">
                <div className="text-2xl font-mono text-red-600">
                  {formatTime(recordingTime)}
                </div>
                <p className="text-sm text-gray-600">{t('voiceInput.recordingStop')}</p>
              </div>
            )}

            {audioBlob && !isRecording && (
              <div className="mb-4">
                <div className="flex items-center justify-center space-x-2 text-green-600">
                  <PlayIcon className="w-5 h-5" />
                  <span>{t('voiceInput.recordingComplete')} ({formatTime(recordingTime)})</span>
                </div>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-medium text-blue-900 mb-2">{t('voiceInput.tipsTitle')}</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>{t('voiceInput.tip1')}</li>
              <li>{t('voiceInput.tip2')}</li>
              <li>{t('voiceInput.tip3')}</li>
              <li>{t('voiceInput.tip4')}</li>
              <li>{t('voiceInput.tip5')}</li>
            </ul>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={() => navigate('/')}
              className="btn-secondary flex-1"
            >
              {t('voiceInput.backButton')}
            </button>
            <button
              onClick={handleSubmit}
              disabled={!audioBlob || loading}
              className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {t('voiceInput.processingButton')}
                </div>
              ) : (
                t('voiceInput.submitButton')
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceInput;
