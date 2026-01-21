import Link from "next/link";
import { Home, AlertTriangle } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] my-2 flex items-center justify-center px-4 sm:px-10">
      <div className="w-full max-w-[720px]">
        <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-background-card-dark border border-white/60 dark:border-white/5 shadow-soft dark:shadow-soft-dark transition-colors duration-300">
          <div className="relative z-10 flex items-center justify-center pt-8">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="logo"
                width={1000}
                height={1000}
                className="w-20"
              />
              <span className="text-xl font-display font-bold tracking-tight hidden sm:block text-text-primary dark:text-white">
                SmilinShack
              </span>
            </Link>
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-linear-to-r from-transparent via-pink-200 dark:via-primary/30 to-transparent" />

          <div className="relative p-10 sm:p-14 text-center">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-secondary/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen dark:opacity-40" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-accent-blue/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen dark:opacity-40" />

            <div className="relative z-10 flex flex-col items-center gap-6">
              <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-pink-50 dark:bg-primary/10 border border-pink-100 dark:border-primary/20 text-secondary">
                <AlertTriangle className="h-10 w-10" />
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="text-5xl sm:text-6xl font-display font-black tracking-tight text-text-primary dark:text-white">
                  404
                </h1>
                <p className="text-lg font-bold text-text-primary dark:text-white">
                  Page not found
                </p>
                <p className="text-text-secondary dark:text-text-secondary-dark max-w-md">
                  The route does not exist or was moved. Nothing is broken. You
                  are just in the wrong place.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link
                  href="/"
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-secondary hover:bg-yellow-400 px-8 text-base font-bold text-text-primary shadow-lg shadow-yellow-500/20 transition-all hover:scale-105 active:scale-95"
                >
                  <Home className="h-5 w-5" />
                  Go to Home
                </Link>

                <Link
                  href="/gallery"
                  className="flex h-12 items-center justify-center rounded-full border-2 border-primary/20 dark:border-white/10 bg-transparent px-8 text-base font-bold text-primary dark:text-white hover:bg-primary/5 dark:hover:bg-white/5 transition-colors"
                >
                  View Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
