
import sys
import os
import time

# Add parent directory to path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

try:
    from utils.whisper_client import WhisperClient, transcribe_voice_input
except ImportError as e:
    print(f"Error importing WhisperClient: {e}")
    sys.exit(1)

def test_whisper_repro():
    print("🚀 Starting Whisper Reproduction Test (CPU/Medium)")
    
    # 1. Initialize Client
    try:
        print("Initializing WhisperClient...")
        start = time.time()
        client = WhisperClient(model_size="medium")
        print(f"✅ Client initialized in {time.time() - start:.2f}s")
        print(f"📍 Device: {client.device}")
        
    except Exception as e:
        print(f"❌ Initialization Failed: {e}")
        import traceback
        traceback.print_exc()
        return

    # 2. Check FFmpeg (simulated check)
    import shutil
    ffmpeg_path = shutil.which("ffmpeg")
    if ffmpeg_path:
        print(f"✅ FFmpeg found at: {ffmpeg_path}")
    else:
        print("❌ FFmpeg NOT found in PATH! This will cause Whisper to fail.")
    
    # 3. Create Dummy Audio File
    print("Creating dummy audio file...")
    import wave
    import struct
    import math

    dummy_file = "debug_audio.wav"
    try:
        sample_rate = 16000
        duration = 2.0 # seconds
        frequency = 440.0 # Hz
        
        with wave.open(dummy_file, 'w') as obj:
            obj.setnchannels(1) # mono
            obj.setsampwidth(2) # 2 bytes
            obj.setframerate(sample_rate)
            
            for i in range(int(duration * sample_rate)):
                value = int(32767.0 * math.sin(2.0 * math.pi * frequency * i / sample_rate))
                data = struct.pack('<h', value)
                obj.writeframesraw(data)
                
        print(f"✅ Dummy audio created: {dummy_file}")
        
    except Exception as e:
        print(f"❌ Failed to create dummy audio: {e}")
        return

    # 4. Transcribe
    print("Attempting transcription...")
    try:
        result = client.transcribe_audio(dummy_file, language="en")
        print("✅ Transcription result type:", type(result))
        print("✅ Transcribed Text:", result.transcribed_text)
        print("✅ Confidence:", result.confidence)
        
    except Exception as e:
        print(f"❌ Transcription Failed: {e}")
        import traceback
        traceback.print_exc()
    finally:
        if os.path.exists(dummy_file):
            os.remove(dummy_file)

if __name__ == "__main__":
    test_whisper_repro()
