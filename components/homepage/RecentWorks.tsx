import { ArrowRight } from "lucide-react";
import Link from "next/link";
import RecentImages from "../gallery/RecentImages";

export default function RecentWorks() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Recent{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            See the magic we create at every event
          </p>
        </div>

        <RecentImages />

        <div className="text-center mt-12 animate-fade-in">
          <Link
            href="/gallery"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors text-lg group"
          >
            View Full Gallery
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
