"use client"
import React from 'react';
import { Check, Camera, Monitor } from 'lucide-react';
import FormModal from './FormModal';



export default function PiBoxUI() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleConfirm = (data: any) => {
    setModalOpen(false);
    console.log('Order Data:', data);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] to-[#414141] px-16 py-8 pt-32 flex items-center justify-center">
      {/* Header */}
      <div className="w-full fixed left-0 top-0 z-50 flex justify-between items-center bg-[#121516] px-8 py-4 rounded-none shadow-lg">
        <div className="flex items-center gap-3">
          <img src="/pw.png" alt="PW Logo" className="w-14 h-14 rounded-full border-2 border-[#6a5af9] shadow-md object-cover bg-white" />
        </div>
        <nav className="flex space-x-10">
          <a href="#" className="text-white font-semibold text-lg px-2 py-1  after:w-full after:mt-1 underline underline-offset-8">Overview</a>
          <a href="#" className="text-gray-300 font-medium text-lg px-2 py-1 hover:text-white hover:underline underline-offset-8 transition-colors duration-200">Key Features</a>
          <a href="#" className="text-gray-300 font-medium text-lg px-2 py-1 hover:text-white hover:underline underline-offset-8 transition-colors duration-200">Get Pi Box Now</a>
        </nav>
      </div>
      <div className="relative w-full max-w-[100vw] min-h-[800px] mx-1 rounded-3xl shadow-2xl overflow-hidden flex flex-col items-center justify-center bg-black" style={{background: 'black'}}>
        {/* Blue effect ellipses */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[400px] bg-[#3F7FC9] opacity-40 rounded-full blur-3xl z-0" style={{filter: 'blur(120px)'}}></div>
        <div className="absolute top-[-12%] right-[-10%] w-[500px] h-[350px] bg-[#943FC9] opacity-40 rounded-full blur-3xl z-0" style={{filter: 'blur(120px)'}}></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[700px] h-[400px] bg-[#00C2FF] opacity-30 rounded-full blur-3xl z-0" style={{filter: 'blur(140px)'}}></div>
        {/* Decorative box image bottom right */}
        <img src="/box.png" alt="Decorative Box" className="absolute bottom-0 right-0 min-w-[100vw] min-h-[100vw] w-[300%] h-auto blur-sm pointer-events-none select-none" style={{transform: 'rotate(45deg)'}} />
        {/* Main Content (centered, above image) */}
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between p-4">
          {/* Left Side - Gradient Box with Product Image */}
          <div className="flex-1 flex justify-center items-center p-12">
            <div className="w-[800px] h-[650px] rounded-[3rem] flex items-center justify-center shadow-2xl relative" style={{background: 'linear-gradient(135deg, #9E56CC 0%, #4B83C5 100%)'}}>
              {/* Horizontal flex row of vertical Pi Box texts, behind the image */}
              <div className="absolute left-10 top-0 h-full w-full flex flex-row items-center justify-start z-10 pl-4">
                <span className="text-white text-8xl font-black tracking-widest opacity-30 mr-2" style={{writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '0.2em', fontFamily: 'Archivo Black, sans-serif'}}>Pi Box</span>
                <span className="text-white text-8xl font-black tracking-widest opacity-40 mr-2" style={{writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '0.2em', fontFamily: 'Archivo Black, sans-serif'}}>Pi Box</span>
                <span className="text-white text-8xl font-black tracking-widest opacity-70" style={{writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '0.2em', fontFamily: 'Archivo Black, sans-serif'}}>Pi Box</span>
              </div>
              <img src="/box.png" alt="Pi Box" className="w-[520px] h-[520px] object-contain drop-shadow-2xl relative z-20" />
            </div>
          </div>
  
          <div className="flex-1 flex flex-col items-start p-8 pl-12"> {/* Increased left padding */}
  <div className="backdrop-blur-lg rounded-[2.5rem] shadow-lg p-8 w-full max-w-lg flex flex-col items-center relative border border-white/20" style={{background: '#36436773'}}> {/* Colored glass effect */}
    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Pi Box Basic</h1>
    <h2 className="text-2xl font-semibold mb-4 text-white">Whats Inside:</h2>
    <ul className="space-y-3 mb-6">
      <li className="flex items-center gap-3 text-white text-lg"><Check className="w-5 h-5 text-blue-200" /> Core Pi Box device</li>
      <li className="flex items-center gap-3 text-white text-lg"><Check className="w-5 h-5 text-blue-200" /> Essential Cables & Power Adapter</li>
      <li className="flex items-center gap-3 text-white text-lg"><Check className="w-5 h-5 text-blue-200" /> Input Devices (Mouse, Keyboard)</li>
      <li className="flex items-center gap-3 text-white text-lg"><Check className="w-5 h-5 text-blue-200" /> Compatible with all Projectors, Monitors & TV's</li>
    </ul>
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-2 text-white">Add Ons</h3>
      <div className="flex gap-4">
        <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2 border border-white/30 text-white font-medium"><Camera className="w-5 h-5 mr-1 text-white" /> Webcam</div>
        <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2 border border-white/30 text-white font-medium"><Monitor className="w-5 h-5 mr-1 text-white" /> LED Monitor <span className="text-xs text-blue-100">(19 Inch)</span></div>
      </div>
    </div>
    <button className="w-full bg-[#121516] text-white py-3 rounded-xl text-lg font-semibold border-2 border-[#23272f] hover:bg-[#23272f] transition-colors" onClick={() => setModalOpen(true)}>
      Buy Now
    </button>
  </div>
</div>

        </div>
      </div>
      <FormModal open={modalOpen} onClose={() => setModalOpen(false)} onConfirm={handleConfirm} />
    </div>
  );
}