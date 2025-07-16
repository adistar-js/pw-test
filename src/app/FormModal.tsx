"use client";
"use client";
import React, { useState } from 'react';

interface FormModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (data: {
    fullName: string;
    address: string;
    mobile: string;
    email: string;
    gender: 'male' | 'female';
  }) => void;
}

const FormModal: React.FC<FormModalProps> = ({ open, onClose, onConfirm }) => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/pi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, address, mobile, email, gender })
      });
      const result = await res.json();
      if (result.success) {
        setLoading(false);
        onConfirm({ fullName, address, mobile, email, gender });
      } else {
        setError(result.error || 'Something went wrong');
        setLoading(false);
      }
    } catch (err) {
      setError('Network error');
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80">
          <div className="flex flex-col items-center">
            <svg className="animate-spin h-12 w-12 text-white mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" /></svg>
            <span className="text-white text-lg">Submitting...</span>
          </div>
        </div>
      )}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80">
          <div className="bg-white rounded-2xl px-8 py-6 shadow-xl flex flex-col items-center">
            <svg className="h-12 w-12 text-green-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className="text-xl font-semibold text-green-600">Order Submitted!</span>
          </div>
        </div>
      )}
      {open && !loading && !showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="bg-gray-900 rounded-3xl p-8 w-full max-w-md mx-4 relative">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-white text-2xl font-medium">Details</h2>
              <button 
                onClick={onClose} 
                className="text-white text-2xl hover:text-gray-300 transition-colors"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <input 
                    type="text" 
                    required 
                    value={fullName} 
                    onChange={e => setFullName(e.target.value)} 
                    placeholder="Full Name"
                    className="w-full px-4 py-4 bg-gray-700 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 border-none"
                  />
                </div>

                {/* Address */}
                <div>
                  <input 
                    type="text" 
                    required 
                    value={address} 
                    onChange={e => setAddress(e.target.value)} 
                    placeholder="Address"
                    className="w-full px-4 py-4 bg-gray-700 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 border-none"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <input 
                    type="tel" 
                    required 
                    value={mobile} 
                    onChange={e => setMobile(e.target.value)} 
                    placeholder="Mobile Number"
                    className="w-full px-4 py-4 bg-gray-700 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 border-none"
                  />
                </div>

                {/* Email ID */}
                <div>
                  <input 
                    type="email" 
                    required 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="Email ID"
                    className="w-full px-4 py-4 bg-gray-700 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 border-none"
                  />
                </div>

                {/* Gender Selection */}
                <div className="flex gap-3 pt-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="relative">
                      <input 
                        type="radio" 
                        name="gender" 
                        value="male" 
                        checked={gender === 'male'} 
                        onChange={() => setGender('male')} 
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full border-2 ${gender === 'male' ? 'border-white bg-white' : 'border-gray-400'} flex items-center justify-center`}>
                        {gender === 'male' && <div className="w-2 h-2 bg-gray-900 rounded-full"></div>}
                      </div>
                    </div>
                    <span className="text-white text-lg">Male</span>
                  </label>
                  
                  <label className="flex items-center gap-3 cursor-pointer ml-6">
                    <div className="relative">
                      <input 
                        type="radio" 
                        name="gender" 
                        value="female" 
                        checked={gender === 'female'} 
                        onChange={() => setGender('female')} 
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full border-2 ${gender === 'female' ? 'border-white bg-white' : 'border-gray-400'} flex items-center justify-center`}>
                        {gender === 'female' && <div className="w-2 h-2 bg-gray-900 rounded-full"></div>}
                      </div>
                    </div>
                    <span className="text-white text-lg">Female</span>
                  </label>
                </div>

                {/* Confirm Button */}
                <div className="pt-6">
                  <button 
                    type="submit" 
                    className="w-full bg-gray-300 text-gray-800 py-4 rounded-xl font-medium text-lg hover:bg-gray-200 transition-colors flex items-center justify-center"
                    disabled={loading}
                  >
                    Confirm
                  </button>
                </div>
                {error && <div className="text-red-400 text-center mt-2">{error}</div>}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;