import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center">
        <svg
          className="w-32 h-32 mx-auto mb-8"
          viewBox="0 0 100 100"
          fill="none"
        >
          <rect
            x="20"
            y="30"
            width="60"
            height="50"
            rx="8"
            stroke="white"
            strokeWidth="3"
            fill="none"
          />
          <circle cx="50" cy="55" r="8" fill="white" />
          <path
            d="M30 25 L50 15 L70 25"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-blue-200 mb-8">Page not found</p>

        <Link
          href="/"
          className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all transform hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
