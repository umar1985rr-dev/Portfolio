import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function About() {
  const navigate = useNavigate();
  const text = "About Myself";

  const [displayedText, setDisplayedText] = useState("");
  const [countdown, setCountdown] = useState<number | null>(null);
  const [downloading, setDownloading] = useState(false);
  const RESUME_URL = "/Resume.pdf";

  useEffect(() => {
    let index = 0;
    let interval: number | undefined;

    const startTyping = () => {
      setDisplayedText("");
      interval = window.setInterval(() => {
        index++;
        setDisplayedText(text.slice(0, index));

        if (index === text.length) {
          clearInterval(interval);
          setTimeout(() => {
            index = 0;
            startTyping();
          }, 5000);
        }
      }, 120);
    };

    startTyping();
    return () => {
      if (interval) {
        window.clearInterval(interval);
      }
    };
  }, []);

  const handleDownload = () => {
    if (downloading) return;

    setDownloading(true);
    setCountdown(3);

    let time = 3;

    const timer = setInterval(() => {
      time--;
      setCountdown(time);

      if (time <= 0) {
        clearInterval(timer);

        const link = document.createElement("a");
        link.href = RESUME_URL;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.download = "Resume.pdf";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        window.open(RESUME_URL, "_blank", "noopener,noreferrer");

        setDownloading(false);
        setCountdown(null);
      }
    }, 1000);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white px-4 sm:px-6 py-10">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-20" />
      </div>

      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => navigate(-1)}
        className="
          fixed
          top-5
          left-5
          z-50
          flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          border
          border-white/15
          bg-white/8
          backdrop-blur-xl
          hover:bg-white/15
          hover:border-white/30
          transition-all
          duration-300
          shadow-lg
        "
      >
        <ArrowLeft size={18} />
        <span className="hidden sm:inline">Back</span>
      </motion.button>

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen gap-8">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <img
            src="/assets/prince.png"
            alt="Prince Kumar"
            className="
              w-[200px]
              sm:w-[280px]
              md:w-[320px]
              rounded-2xl
              border
              border-white/15
              object-cover
              shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              hover:border-white/25
              transition-all
              duration-300
            "
          />

          <div
            className="
              mt-6
              h-[1px]
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              w-[90vw]
              sm:w-[400px]
              md:w-[500px]
            "
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="
            relative
            w-full
            max-w-4xl
            h-[500px]
            sm:h-[550px]
            md:h-[600px]
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-3xl
            overflow-hidden
            shadow-[0_20px_70px_rgba(0,0,0,0.5)]
            group
          "
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

          <div
            className="
              relative
              z-20
              flex
              items-center
              justify-center
              px-6
              py-6
              sm:py-8
              border-b
              border-white/10
              bg-black/30
              backdrop-blur-2xl
            "
          >
            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-extrabold
                tracking-tight
              "
            >
              {displayedText}
              <span className="animate-pulse ml-2">|</span>
            </h1>
          </div>

          <div
            className="
              relative
              z-10
              h-[calc(100%-80px)]
              overflow-y-auto
              px-6
              sm:px-10
              md:px-12
              py-8
              scrollbar-thin
              scrollbar-track-transparent
              scrollbar-thumb-white/10
              hover:scrollbar-thumb-white/20
            "
          >
            <div
              className="
                text-white/70
                text-sm
                sm:text-base
                leading-8
                tracking-wide
                space-y-6
              "
            >
              <p>
               I'm currently pursuing my Bachelor's degree in Computer Science and Engineering
  with a specialization in IoT and Cyber Security. When I first started my journey,
  I was curious about technology as a whole, but as I explored different domains,
  I discovered that Data Science and Web Development were the fields that truly
  captured my interest.
              </p>

              <p>
                 As I learned programming, I realized that I enjoy solving real-world problems
  using data and building applications that people can actually use. This motivated
  me to strengthen my skills in Python, SQL, data analysis, and modern web
  technologies while continuously exploring how Artificial Intelligence can make
  applications smarter and more efficient.
              </p>

              <p>
                I believe that data tells a story, and I enjoy uncovering meaningful insights
  through analysis and visualization. At the same time, I like transforming ideas
  into interactive web applications that are both functional and user-friendly.
  Combining these two fields allows me to create solutions that are practical,
  intelligent, and impactful.
              </p>

              <p>
                Beyond academics, I spend a significant amount of my time building projects,
  experimenting with new technologies, and learning from real-world challenges.
  Every project teaches me something new, whether it's writing cleaner code,
  designing better user experiences, or making data-driven decisions.
              </p>

              <p>
                 I'm also fascinated by the rapid growth of Artificial Intelligence. Rather than
  simply using AI tools, I enjoy understanding how they work and integrating them
  into my projects to automate tasks, improve decision-making, and create better
  user experiences.
              </p>

              <p>
                My current focus is on becoming a skilled Data Scientist while also developing
  strong full-stack web development skills. I believe that the future belongs to
  developers who can combine software engineering, data, and AI to build innovative
  products that solve meaningful problems.
              </p>

              <p>
                 I know there's still a long journey ahead, but I'm someone who enjoys learning,
  accepts challenges, and constantly works on improving my skills one step at a
  time. Whether it's mastering a new framework, exploring machine learning, or
  building a complete application from scratch, I always look forward to learning
  something new.
              </p>

              <p>
                For me, technology is more than just a career choice—it's a passion that keeps
  me curious every day. My goal is to contribute to impactful projects, continue
  growing as a developer and data enthusiast, and build solutions that create real
  value for people and businesses.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          onClick={handleDownload}
          disabled={downloading}
          className="
            group
            relative
            overflow-hidden
            flex
            items-center
            justify-center
            gap-3
            px-8
            sm:px-10
            py-3
            sm:py-4
            rounded-2xl
            border
            border-white/15
            bg-white/8
            backdrop-blur-xl
            hover:bg-white/15
            hover:border-white/30
            disabled:opacity-50
            disabled:cursor-not-allowed
            transition-all
            duration-300
            shadow-[0_10px_40px_rgba(0,0,0,0.4)]
            hover:shadow-[0_15px_50px_rgba(255,255,255,0.08)]
          "
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />

          <div className="relative z-10 flex items-center gap-3">
            <Download
              size={20}
              className="
                group-hover:scale-110
                group-hover:-translate-y-1
                transition-all
                duration-300
              "
            />
            <span className="font-semibold tracking-wide">
              {downloading ? `Downloading in ${countdown}s` : "Download Resume"}
            </span>
          </div>
        </motion.button>
      </div>
    </div>
  );
}
