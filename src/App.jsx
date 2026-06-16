import React, { useState, useEffect } from 'react';
import { Shield, Coins, Users, Zap, CheckCircle, Smartphone, Laptop, Gamepad2, Info, Loader2, RefreshCw, Lock } from 'lucide-react';

function App() {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [platform, setPlatform] = useState('PC');
  const [amount, setAmount] = useState(800);
  const [isGenerating, setIsGenerating] = useState(false);
  const [status, setStatus] = useState('');
  const [progress, setProgress] = useState(0);
  const [recentActivity, setRecentActivity] = useState([]);

  const robuxAmounts = [400, 800, 1700, 4500, 10000];
  const platforms = [
    { id: 'PC', icon: Laptop },
    { id: 'Mobile', icon: Smartphone },
    { id: 'Console', icon: Gamepad2 }
  ];

  // Generate fake activity
  useEffect(() => {
    const names = ['EliteGamer', 'RobloxPro', 'NinjaKing', 'BuildMaster', 'SwiftPlayer', 'MegaBlox', 'CoolKid', 'Legendary', 'Shadow', 'Dragon'];
    const interval = setInterval(() => {
      const newActivity = {
        id: Date.now(),
        user: names[Math.floor(Math.random() * names.length)] + Math.floor(Math.random() * 999),
        amount: robuxAmounts[Math.floor(Math.random() * robuxAmounts.length)],
        time: 'Just now'
      };
      setRecentActivity(prev => [newActivity, ...prev].slice(0, 5));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleGenerate = () => {
    if (!username) return alert('Please enter your username');
    setIsGenerating(true);
    setStep(2);

    const messages = [
      'Connecting to Roblox API...',
      `Searching for user "${username}"...`,
      'User found! Establishing secure tunnel...',
      `Generating ${amount} Robux packets...`,
      'Encrypting data transfer...',
      'Finalizing transaction...',
      'Human verification required!'
    ];

    let currentMsgIndex = 0;
    const interval = setInterval(() => {
      if (currentMsgIndex < messages.length) {
        setStatus(messages[currentMsgIndex]);
        setProgress((prev) => Math.min(prev + (100 / messages.length), 100));
        currentMsgIndex++;
      } else {
        clearInterval(interval);
        setStep(3);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-yellow-500/30">
      {/* Header */}
      <header className="border-b border-white/5 bg-neutral-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-500 p-1.5 rounded-lg">
              <Coins className="text-black w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">ROBUX<span className="text-yellow-500">GEN</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#" className="hover:text-yellow-500 transition-colors">Home</a>
            <a href="#features" className="hover:text-yellow-500 transition-colors">Features</a>
            <a href="#reviews" className="hover:text-yellow-500 transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-yellow-500 transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/80">Server Online</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-4 py-2 rounded-full border border-yellow-500/20 mb-6">
            <Lock className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Secure 256-bit Encryption</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent leading-tight">
            Get Robux Securely and Fast
          </h1>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            The most advanced and professional Robux generation simulation tool. Trusted by millions of players worldwide.
          </p>
        </div>

        {/* Generator Main Card */}
        <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 p-4">
            <Shield className="text-white/5 w-32 h-32 -mr-12 -mt-12" />
          </div>

          {step === 1 && (
            <div className="space-y-8 relative z-10">
              <div>
                <label className="block text-sm font-semibold uppercase tracking-wider text-white/40 mb-3">Roblox Username</label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-xl px-6 py-4 text-xl focus:outline-none focus:border-yellow-500 transition-colors placeholder:text-white/10"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold uppercase tracking-wider text-white/40 mb-3">Select Platform</label>
                <div className="grid grid-cols-3 gap-4">
                  {platforms.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPlatform(p.id)}
                      className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all ${
                        platform === p.id ? 'bg-yellow-500 border-yellow-500 text-black' : 'bg-white/5 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <p.icon className="w-6 h-6" />
                      <span className="text-xs font-bold">{p.id}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold uppercase tracking-wider text-white/40 mb-3">Select Robux Amount</label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {robuxAmounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setAmount(amt)}
                      className={`relative overflow-hidden p-4 rounded-xl border transition-all ${
                        amount === amt ? 'bg-yellow-500 border-yellow-500 text-black scale-105 shadow-lg shadow-yellow-500/20' : 'bg-white/5 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <Coins className="w-4 h-4 mb-1" />
                        <span className="text-lg font-black">{amt.toLocaleString()}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleGenerate}
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black py-5 rounded-2xl text-xl shadow-xl shadow-yellow-500/20 transition-all hover:-translate-y-1 active:translate-y-0"
              >
                GENERATE ROBUX
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="text-center py-12 space-y-8 relative z-10">
              <div className="relative inline-block">
                <Loader2 className="w-24 h-24 text-yellow-500 animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <span className="text-xs font-bold">{Math.round(progress)}%</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{status}</h3>
                <div className="w-full bg-white/5 h-2 rounded-full max-w-md mx-auto overflow-hidden">
                  <div
                    className="h-full bg-yellow-500 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-12 space-y-8 relative z-10">
              <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl max-w-md mx-auto">
                 <Info className="w-12 h-12 text-red-500 mx-auto mb-4" />
                 <h3 className="text-2xl font-bold mb-2">Verification Required</h3>
                 <p className="text-white/60">To prevent abuse and bot activity, we require a quick manual verification to release your <strong>{amount.toLocaleString()} Robux</strong>.</p>
              </div>
              <button
                className="w-full max-w-md mx-auto bg-green-500 hover:bg-green-400 text-black font-black py-5 rounded-2xl text-xl shadow-xl shadow-green-500/20 transition-all hover:-translate-y-1"
                onClick={() => alert('Redirecting to secure verification...')}
              >
                VERIFY NOW
              </button>
              <p className="text-xs text-white/20 uppercase tracking-widest font-bold">Verification ID: RX-{Math.floor(Math.random() * 1000000)}</p>
            </div>
          )}
        </div>

        {/* Live Activity Feed */}
        <div className="max-w-2xl mx-auto mb-20">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <RefreshCw className="w-5 h-5 text-yellow-500 animate-spin-slow" />
                    Live Activity
                </h2>
                <div className="flex items-center gap-2 text-xs font-medium text-white/40">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                    REAL-TIME UPDATES
                </div>
            </div>
            <div className="space-y-3">
                {recentActivity.map((activity) => (
                    <div key={activity.id} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center font-bold text-yellow-500">
                                {activity.user.charAt(0)}
                            </div>
                            <div>
                                <p className="font-bold">{activity.user}</p>
                                <p className="text-xs text-white/40">{activity.time}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full border border-yellow-500/20">
                            <Coins className="w-4 h-4" />
                            <span className="font-black text-sm">+{activity.amount.toLocaleString()}</span>
                        </div>
                    </div>
                ))}
                {recentActivity.length === 0 && (
                    <p className="text-center text-white/20 py-8 italic tracking-wide">Connecting to activity feed...</p>
                )}
            </div>
        </div>

        {/* Features Section */}
        <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
                { title: 'Anti-Ban Protection', desc: 'Our proxy system ensures your account remains safe and undetectable.', icon: Shield },
                { title: 'Fast Generation', desc: 'Robux are processed and delivered in under 5 minutes.', icon: Zap },
                { title: 'Safe & Secure', desc: 'We never ask for your password. Only your username is required.', icon: Lock }
            ].map((f, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <f.icon className="w-8 h-8 text-yellow-500 mb-4" />
                    <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
                </div>
            ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-neutral-900/50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
                <Coins className="text-yellow-500 w-5 h-5" />
                <span className="text-lg font-bold tracking-tight">ROBUX<span className="text-yellow-500">GEN</span></span>
            </div>
            <p className="text-white/20 text-xs mb-8 leading-relaxed max-w-2xl mx-auto italic">
                DISCLAIMER: This website is a simulation and prank tool designed for educational and entertainment purposes only. It does not generate real Robux or any other virtual currency. All images and trademarks belong to their respective owners. We are not affiliated with, authorized, maintained, sponsored or endorsed by Roblox Corporation or any of its affiliates or subsidiaries.
            </p>
            <div className="flex justify-center gap-6 text-white/40 text-xs font-semibold tracking-widest uppercase">
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Contact Support</a>
            </div>
            <div className="mt-8 text-white/10 text-[10px] uppercase tracking-[0.2em]">
                &copy; 2024 ROBUXGEN. All Rights Reserved.
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
