import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t px-2 md:px-20 border-gray-200 dark:border-white/5 pt-8 pb-12 w-full transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-text-primary dark:text-white">
          <Image
            src="/logo.png"
            alt="logo"
            width={1000}
            height={1000}
            className="w-20"
          />
          <span className="font-display font-bold text-lg">SmilinShack</span>
        </div>
        <div className="flex gap-8 text-sm font-bold text-text-secondary dark:text-text-secondary-dark">
          <a
            className="hover:text-primary dark:hover:text-secondary transition-colors"
            href="#"
          >
            Privacy
          </a>
          <a
            className="hover:text-primary dark:hover:text-secondary transition-colors"
            href="#"
          >
            Terms
          </a>
          <a
            className="hover:text-primary dark:hover:text-secondary transition-colors"
            href="#"
          >
            Instagram
          </a>
        </div>
        <p className="text-sm text-text-secondary dark:text-text-secondary-dark font-medium">
          © {new Date().getFullYear()} SmilinShack Toronto.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
