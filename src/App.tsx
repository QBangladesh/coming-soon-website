import React from 'react'
import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex flex-col flex-1 items-center justify-center text-center p-4 fade-in-up space-y-4">

        {/* Logo as background image for better social media compatibility */}
        <div
          className="w-56 md:w-64 lg:w-72 max-w-full h-56 md:h-64 lg:h-72 bg-center bg-contain bg-no-repeat mx-auto pulse hover-scale"
          style={{ backgroundImage: 'url(/qbangladesh-logo.png)' }}
          role="img"
          aria-label="QBangladesh logo"
        >
          <span className="sr-only">QBangladesh logo</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black  ">
          COMING
          <br />
          SOON
        </h1>

        <p className="text-gray-800 text-lg md:text-xl max-w-xl mt-8">
          "Beyond 0 and 1, a new world of possibility awaits.<br /> We're just getting started."
        </p>
      </main>

      <footer className="w-full py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="h-px w-1/2 lg:w-1/4 bg-gray-200" />
          <div className="flex items-center gap-10">
            <a
              href="https://discord.gg/EWQJEJx7Rx"
              aria-label="Join us on Discord"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-indigo-600 transition-all duration-300 transform hover:scale-125"
            >
              <FaDiscord size={28} />
            </a>

            <a
              href="https://www.facebook.com/qbangladesh25"
              aria-label="Follow us on Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:scale-125"
            >
              <FaFacebook size={28} />
            </a>

            <a
              href="https://www.linkedin.com/company/qbangladesh"
              aria-label="Connect with us on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-700 transition-all duration-300 transform hover:scale-125"
            >
              <FaLinkedin size={28} />
            </a>

            <a
              href="https://github.com/QBangladesh/QBangladesh"
              aria-label="View us on GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-all duration-300 transform hover:scale-125"
            >
              <FaGithub size={28} />
            </a>
          </div>
          <p className="text-gray-600 text-sm">Connect with us on our social platforms</p>
        </div>
      </footer>
    </div>
  )
}

export default App
