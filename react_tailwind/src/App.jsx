import './App.css'
import {useState} from "react";

function App() {
const [isDark,setIsDark] = useState(false)

    const toggleTheme = () =>{
        setIsDark(!isDark)
    }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        {/* Header with Theme Toggle */}
        <header className="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Tailwind CSS Dark Mode Demo
              </h1>
              <button 
                onClick={toggleTheme}
                className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                {isDark ? '☀️ Light' : '🌙 Dark'}
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-8">
          {/* Color Examples Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Color Variants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-red-100 dark:bg-red-900 p-6 rounded-lg border border-red-200 dark:border-red-700">
                <h3 className="text-red-800 dark:text-red-200 font-semibold mb-2">Red Variant</h3>
                <p className="text-red-600 dark:text-red-400">Background and text colors adapt to theme</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900 p-6 rounded-lg border border-green-200 dark:border-green-700">
                <h3 className="text-green-800 dark:text-green-200 font-semibold mb-2">Green Variant</h3>
                <p className="text-green-600 dark:text-green-400">Automatic color switching</p>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                <h3 className="text-purple-800 dark:text-purple-200 font-semibold mb-2">Purple Variant</h3>
                <p className="text-purple-600 dark:text-purple-400">Smooth transitions</p>
              </div>
            </div>
          </section>

          {/* Interactive Elements */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Interactive Elements
            </h2>
            <div className="space-y-4">
              <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 dark:bg-indigo-600 dark:hover:bg-indigo-700">
                Primary Button
              </button>
              <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 ml-4">
                Secondary Button
              </button>
            </div>
          </section>

          {/* Form Elements */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Form Elements
            </h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                    rows="4"
                    placeholder="Type your message here..."
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Typography Examples */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Typography
            </h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                This is body text that adapts to the current theme. Notice how the color changes between light and dark modes.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Small text with reduced opacity in dark mode for better readability.
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-4 text-gray-700 dark:text-gray-300 italic">
                "Dark mode reduces eye strain and saves battery life on OLED displays."
              </blockquote>
            </div>
          </section>

          {/* Status Cards */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Status Indicators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-green-500">
                <div className="text-green-600 dark:text-green-400 text-sm font-medium">Success</div>
                <div className="text-gray-900 dark:text-white text-2xl font-bold">Active</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
                <div className="text-yellow-600 dark:text-yellow-400 text-sm font-medium">Warning</div>
                <div className="text-gray-900 dark:text-white text-2xl font-bold">Pending</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-red-500">
                <div className="text-red-600 dark:text-red-400 text-sm font-medium">Error</div>
                <div className="text-gray-900 dark:text-white text-2xl font-bold">Failed</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                <div className="text-blue-600 dark:text-blue-400 text-sm font-medium">Info</div>
                <div className="text-gray-900 dark:text-white text-2xl font-bold">Processing</div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
