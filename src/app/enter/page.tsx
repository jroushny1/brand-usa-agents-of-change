onChange={(e) => setCode(e.target.value)}
placeholder="Enter your partner code"
className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition ${
                  error ? 'border-red-500 shake' : 'border-gray-300'
                  error ? 'border-red-500' : 'border-gray-300'
               }`}
required
autoFocus
/>
{error && (
                <p className="mt-2 text-sm text-red-600 animate-fade-in">
                <p className="mt-2 text-sm text-red-600">
That's not the right code. Try again! 💪
</p>
)}
@@ -116,27 +116,6 @@ export default function EnterPage() {
🚀 Ready to transform tourism with AI? You got this!
</p>
</div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        .shake {
          animation: shake 0.3s ease-in-out;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
</div>
)
}
