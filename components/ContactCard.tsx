import Link from "next/link";

const ContactCard = () => {
  return (
    <div className="mt-16 mb-10 w-full overflow-hidden rounded-3xl bg-pink-gradient relative shadow-xl shadow-pink-500/25 dark:shadow-pink-900/40">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl mix-blend-overlay" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
      <div className="relative z-10 flex flex-col items-center justify-center p-12 text-center gap-6">
        <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight max-w-xl text-white">
          Ready to Make Your Event Unforgettable?
        </h2>
        <p className="text-white/95 max-w-md text-lg font-medium">
          Book your date now and let us handle the fun. Spots fill up fast!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link
            href="/contact"
            className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-lg border-2 border-transparent"
          >
            Book Now
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
