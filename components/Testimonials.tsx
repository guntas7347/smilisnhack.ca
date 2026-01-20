import getGoogleReviews from "@/lib/googleReviews";
import { timeAgo } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import StarRating from "./StarRating";

const Testimonials = async () => {
  const testimonials = await getGoogleReviews();

  return (
    <div className="flex flex-col gap-8 pt-6">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-2xl font-display font-bold text-text-primary dark:text-white">
          What Our Clients Say
        </h2>
        <div className="flex gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-background-card-dark hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary dark:hover:text-primary text-text-primary dark:text-white transition-colors shadow-sm">
            <ArrowLeft className=" " />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-text-primary hover:bg-yellow-400 transition-colors shadow-sm">
            <ArrowRight className=" " />
          </button>
        </div>
      </div>
      <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory">
        {testimonials?.map((t, i) => {
          return (
            <a
              key={i}
              href={t.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="snap-start min-w-[300px] max-w-[340px] flex-1 flex flex-col p-6 rounded-2xl bg-white dark:bg-background-card-dark border border-white/50 dark:border-white/5 shadow-card dark:shadow-card-dark transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                {t.authorAvatarUrl ? (
                  <div
                    className="h-12 w-12 rounded-full bg-cover bg-center border border-gray-100 dark:border-gray-700"
                    style={{
                      backgroundImage: `url("${t.authorAvatarUrl}")`,
                    }}
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20 text-accent-blue font-bold border border-blue-100 dark:border-blue-800">
                    {t.authorInitials}
                  </div>
                )}

                <div>
                  <p className="font-bold text-sm text-text-primary dark:text-white">
                    {t.authorName}
                  </p>
                  <p className="text-xs text-text-secondary dark:text-text-secondary-dark font-medium">
                    {timeAgo(t.publishedAt)}
                  </p>
                </div>

                <div className="ml-auto flex">
                  <StarRating score={t.score} />
                  <span className="text-sm font-bold ml-1 text-text-primary dark:text-white">
                    {t.score}
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-1">
                {/* Text */}
                <div
                  className={
                    "relative " +
                    (t.mediaUrl ? "max-h-[6.5rem]" : "max-h-[11rem]") +
                    " overflow-hidden"
                  }
                >
                  <p className="text-text-secondary dark:text-text-secondary-dark text-sm leading-relaxed pr-2">
                    {t.content}
                  </p>

                  {/* Fade overlay */}
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white dark:from-background-card-dark to-transparent" />
                </div>

                {/* Image */}
                {t.mediaUrl && (
                  <div
                    className="mt-4 h-32 w-full rounded-xl bg-cover bg-center opacity-90"
                    style={{ backgroundImage: `url("${t.mediaUrl}")` }}
                  />
                )}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
