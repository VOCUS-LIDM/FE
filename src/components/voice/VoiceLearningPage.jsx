import React, { useState, useEffect, useRef } from "react";
import {
  Mic,
  MicOff,
  Send,
  Volume2,
  VolumeX,
  MessageSquare,
  BookOpen,
  ArrowLeft,
} from "lucide-react";

const VoiceLearningPage = ({ course }) => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const [sessionStats, setSessionStats] = useState({
    questionsAsked: 0,
    topicsDiscussed: ["Grammar", "Vocabulary"],
    studyTime: 0,
  });

  const messagesEndRef = useRef(null);
  const audioLevelInterval = useRef(null);
  const studyTimeInterval = useRef(null);

  // Simulasi audio level untuk visualisasi
  useEffect(() => {
    if (isSpeaking || isListening) {
      audioLevelInterval.current = setInterval(() => {
        setAudioLevel(Math.random() * 100);
      }, 100);
    } else {
      setAudioLevel(0);
      if (audioLevelInterval.current) {
        clearInterval(audioLevelInterval.current);
      }
    }

    return () => {
      if (audioLevelInterval.current) {
        clearInterval(audioLevelInterval.current);
      }
    };
  }, [isSpeaking, isListening]);

  // Study time tracker
  useEffect(() => {
    studyTimeInterval.current = setInterval(() => {
      setSessionStats((prev) => ({
        ...prev,
        studyTime: prev.studyTime + 1,
      }));
    }, 60000); // Update every minute

    return () => {
      if (studyTimeInterval.current) {
        clearInterval(studyTimeInterval.current);
      }
    };
  }, []);

  // Auto scroll ke pesan terbaru
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  // Inisialisasi percakapan
  useEffect(() => {
    if (!isInitialized) {
      setTimeout(() => {
        const courseSpecificWelcome = {
          English:
            "Halo! Saya tutor Bahasa Inggris Anda. Mari berlatih percakapan, tata bahasa, dan kosakata bersama. Apa yang ingin Anda pelajari hari ini?",
          Mathematics:
            "Hai! Saya di sini untuk membantu Anda dengan konsep matematika. Kita bisa membahas rumus, menyelesaikan masalah, atau menjelajahi topik baru. Apa yang menarik minat Anda?",
          Physics:
            "Salam! Saya asisten Fisika Anda. Kita bisa menjelajahi dunia fisika yang menarik bersama. Ada konsep tertentu yang ingin Anda diskusikan?",
          Indonesian:
            "Halo! Saya guru Bahasa Indonesia Anda. Mari belajar bersama tentang tata bahasa, kosakata, dan sastra. Apa yang ingin dipelajari hari ini?",
        };

        const welcomeMessage = {
          id: 1,
          type: "ai",
          text:
            courseSpecificWelcome[course?.title] ||
            `Selamat datang di pembelajaran ${course?.title}! Saya tutor AI Anda, siap membantu Anda belajar melalui percakapan interaktif.`,
          timestamp: new Date().toLocaleTimeString(),
        };
        setConversation([welcomeMessage]);
        setIsSpeaking(true);

        // Simulasi AI berbicara
        setTimeout(() => {
          setIsSpeaking(false);
          setIsInitialized(true);
        }, 3000);
      }, 1000);
    }
  }, [isInitialized, course]);

  // Handle voice recording
  const toggleListening = () => {
    if (isListening) {
      setIsListening(false);
      // Simulasi hasil voice recognition
      setTimeout(() => {
        const voiceResponses = [
          "Bisa tolong beri saya latihan soal?",
          "Jelaskan konsep utamanya",
          "Beri saya tips untuk meningkatkan kemampuan",
          "Bagaimana cara terbaik untuk berlatih?",
        ];
        const voiceMessage =
          voiceResponses[Math.floor(Math.random() * voiceResponses.length)];
        handleSendMessage(voiceMessage, "voice");
      }, 1000);
    } else {
      setIsListening(true);
    }
  };

  // Handle send message
  const handleSendMessage = (text = message, inputType = "text") => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      text: text,
      timestamp: new Date().toLocaleTimeString(),
      inputType: inputType,
    };

    setConversation((prev) => [...prev, userMessage]);
    setMessage("");

    // Update stats
    setSessionStats((prev) => ({
      ...prev,
      questionsAsked: prev.questionsAsked + 1,
    }));

    // Simulasi response AI berdasarkan course
    setTimeout(() => {
      const courseResponses = {
        English: [
          "Pertanyaan bagus! Mari saya bantu Anda dengan Bahasa Inggris. Berikut adalah rekomendasi saya...",
          "Itu poin yang bagus tentang pembelajaran Bahasa Inggris. Mari saya jelaskan...",
          "Saya senang sekali bisa membantu siswa dengan Bahasa Inggris! Ini penjelasan detailnya...",
          "Sempurna! Ini adalah konsep dasar dalam Bahasa Inggris. Mari saya uraikan...",
        ],
        Mathematics: [
          "Pemikiran matematis yang luar biasa! Mari kita pecahkan ini selangkah demi selangkah...",
          "Itu pertanyaan matematika yang bagus. Begini cara kita mendekati masalah ini...",
          "Matematika adalah tentang logika dan pola. Mari saya tunjukkan...",
          "Pertanyaan yang sempurna! Konsep matematika ini bekerja seperti ini...",
        ],
        Physics: [
          "Pertanyaan fisika yang menarik! Prinsip di balik ini adalah...",
          "Rasa ingin tahu ilmiah yang hebat! Dalam fisika, fenomena ini terjadi karena...",
          "Itu pertanyaan fisika yang berwawasan. Mari saya jelaskan teorinya...",
          "Luar biasa! Konsep fisika ini sangat mendasar untuk memahami...",
        ],
        Indonesian: [
          "Pertanyaan bagus! Mari saya bantu Anda dengan Bahasa Indonesia. Berikut adalah rekomendasi saya...",
          "Itu poin yang bagus tentang pembelajaran Bahasa Indonesia. Mari saya jelaskan...",
          "Saya senang sekali bisa membantu siswa dengan Bahasa Indonesia! Ini penjelasan detailnya...",
          "Sempurna! Ini adalah konsep dasar dalam Bahasa Indonesia. Mari saya uraikan...",
        ],
      };

      const responses = courseResponses[course?.title] || [
        "Itu pertanyaan yang bagus! Mari saya jelaskan itu untuk Anda...",
        "Saya akan senang membantu Anda dengan itu. Ini yang perlu Anda ketahui...",
        "Luar biasa! Mari saya uraikan ini untuk Anda selangkah demi selangkah...",
      ];

      const aiMessage = {
        id: Date.now() + 1,
        type: "ai",
        text: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date().toLocaleTimeString(),
      };

      setConversation((prev) => [...prev, aiMessage]);
      setIsSpeaking(true);

      // Simulasi durasi AI berbicara
      setTimeout(() => {
        setIsSpeaking(false);
      }, 2500);
    }, 1500);
  };

  // Handle key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Voice visualization dengan multiple orbs
  const renderVoiceOrbs = () => {
    const orbCount = 5;
    const orbs = [];

    for (let i = 0; i < orbCount; i++) {
      const baseSize = 60 + i * 15;
      const intensity = isSpeaking || isListening ? audioLevel : 10;
      const size = baseSize + intensity * 0.3;
      const opacity = 0.1 + intensity * 0.01;
      const delay = i * 0.1;

      orbs.push(
        <div
          key={i}
          className="absolute rounded-full animate-ping"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            background: `linear-gradient(135deg, ${
              course?.gradient?.replace("from-", "").replace("to-", ") 0%, ") ||
              "rgb(59, 130, 246) 0%, rgb(147, 51, 234)"
            }) 100%)`,
            opacity: opacity,
            animationDelay: `${delay}s`,
            transform: "translate(-50%, -50%)",
            animationDuration: "2s",
          }}
        />
      );
    }

    return orbs;
  };

  const formatStudyTime = (minutes) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}j ${mins}m`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div className="flex flex-col items-start mb-4 sm:mb-0">
              {" "}
              {/* Menggunakan flex-col untuk tumpukan vertikal */}
              <button className="text-white hover:text-blue-300 transition-colors flex items-center space-x-2 mb-12">
                {" "}
                {/* Menambahkan margin-bottom */}
              </button>
              <div className="ml-0 sm:ml-0">
                {" "}
                {/* Menghapus margin-left yang tidak perlu */}
                <h1 className="text-3xl font-bold text-white flex items-center space-x-3">
                  <BookOpen className="text-blue-400" size={32} />
                  <span>
                    {course?.title || "Kursus"} - Sesi Belajar Voice AI
                  </span>
                </h1>
                <p className="text-blue-200 mt-1">
                  Belajar suara interaktif bersama VOCUS
                </p>{" "}
                {/* Menambahkan margin-top */}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="glass-effect rounded-lg px-4 py-2">
                <div className="text-white text-sm font-medium">
                  Waktu Belajar
                </div>
                <div className="text-blue-300 text-lg font-bold">
                  {formatStudyTime(sessionStats.studyTime)}
                </div>
              </div>
              <button
                onClick={() => setIsAudioMuted(!isAudioMuted)}
                className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                {isAudioMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Voice Visualization */}
          <div className="xl:col-span-1">
            <div className="glass-effect rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                {renderVoiceOrbs()}
              </div>

              {/* Central AI Avatar */}
              <div
                className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 shadow-2xl ${
                  isSpeaking ? "scale-110 animate-pulse" : "scale-100"
                }`}
                style={{
                  background: `linear-gradient(135deg, ${
                    course?.gradient
                      ?.replace("from-", "")
                      .replace("to-", ") 0%, ") ||
                    "rgb(59, 130, 246) 0%, rgb(147, 51, 234)"
                  }) 100%)`,
                }}
              >
                <img
                  src="/images/Logo Vocus Putih.png"
                  alt="Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Status Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                <div
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isSpeaking
                      ? "bg-green-500/20 text-green-300 animate-pulse"
                      : isListening
                      ? "bg-blue-500/20 text-blue-300 animate-pulse"
                      : "bg-gray-500/20 text-gray-300"
                  }`}
                >
                  {isSpeaking
                    ? "🎙️ Sedang Berbicara..."
                    : isListening
                    ? "👂 Mendengarkan..."
                    : "💭 Siap Membantu"}
                </div>
              </div>
            </div>

            {/* Voice Controls */}
            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={toggleListening}
                disabled={isSpeaking}
                className={`p-4 rounded-full transition-all duration-200 ${
                  isListening
                    ? "bg-red-500 text-white animate-pulse scale-110 shadow-lg shadow-red-500/30"
                    : "bg-blue-500 hover:bg-blue-600 text-white hover:scale-105 shadow-lg shadow-blue-500/30"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isListening ? <MicOff size={24} /> : <Mic size={24} />}
              </button>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="xl:col-span-2">
            <div className="glass-effect rounded-2xl p-6 h-96 flex flex-col">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 mb-4 custom-scrollbar">
                {conversation.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        msg.type === "user"
                          ? "bg-blue-500 text-white shadow-lg"
                          : "bg-white/10 text-white border border-white/20 backdrop-blur-sm"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      <div className="flex items-center justify-between mt-2 text-xs opacity-70">
                        <span>{msg.timestamp}</span>
                        {msg.inputType === "voice" && (
                          <span className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded-full">
                            <Mic size={10} />
                            <span>Suara</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {isSpeaking && (
                  <div className="flex justify-start">
                    <div className="bg-white/10 text-white border border-white/20 backdrop-blur-sm px-4 py-3 rounded-2xl">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                        <span className="text-sm text-blue-300">
                          VOCUS sedang mengetik...
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ketik pesan Anda atau gunakan suara..."
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
                  disabled={isSpeaking}
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!message.trim() || isSpeaking}
                  className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:bg-gray-500 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Learning Resources & Tips */}
          <div className="xl:col-span-1">
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="glass-effect rounded-xl p-4">
                <h3 className="text-white font-semibold mb-3">Aksi Cepat</h3>
                <div className="space-y-2">
                  <button
                    onClick={() =>
                      handleSendMessage("Bisa tolong beri saya latihan soal?")
                    }
                    className="w-full text-left px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors"
                  >
                    🎯 Latihan Soal
                  </button>
                  <button
                    onClick={() =>
                      handleSendMessage("Jelaskan konsep utamanya")
                    }
                    className="w-full text-left px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors"
                  >
                    📖 Jelaskan Konsep
                  </button>
                  <button
                    onClick={() =>
                      handleSendMessage(
                        "Beri saya tips untuk meningkatkan kemampuan"
                      )
                    }
                    className="w-full text-left px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors"
                  >
                    💡 Tips Belajar
                  </button>
                </div>
              </div>

              {/* Learning Tips */}
              <div className="glass-effect rounded-xl p-4">
                <h3 className="text-white font-semibold mb-3">
                  💡 Tips Belajar
                </h3>
                <div className="space-y-2 text-sm text-blue-200">
                  <p>
                    • Ajukan pertanyaan spesifik untuk penjelasan yang lebih
                    baik
                  </p>
                  <p>• Gunakan input suara untuk latihan pengucapan</p>
                  <p>• Minta contoh untuk memahami konsep dengan lebih baik</p>
                  <p>• Latihan secara teratur dengan tutor AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

export default VoiceLearningPage;
