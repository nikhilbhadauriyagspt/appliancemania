const Signup = () => {
  return (
    <div className="min-h-screen pt-32 pb-12 flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        <h2 className="text-3xl font-black text-gray-900 mb-2 text-center">Join Us</h2>
        <p className="text-gray-500 text-center mb-8">Get your appliances fixed by experts.</p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
          </div>
          <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black transition-all shadow-lg shadow-blue-600/20 mt-4">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
