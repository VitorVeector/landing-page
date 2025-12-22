import { useEffect, useRef, useState } from "react";
import {
  GiKimono,
  GiBabyFace,
  GiFemale,
  GiBoxingGlove
} from "react-icons/gi";

export const Modalidades = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      {
        threshold: 0.2,
        // 🔑 dispara antes do card chegar no centro da tela
        rootMargin: "0px 0px -15% 0px"
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const modalidades = [
    {
      title: "Fundamentos",
      desc: "Treinamento de base do Jiu-Jitsu, com e sem kimono.",
      icon: <GiKimono className="size-12" />
    },
    {
      title: "Kids & Jiu Jitsu Bilíngue",
      desc: "Desenvolvimento físico, mental e aprendizado do inglês desde cedo.",
      icon: <GiBabyFace className="size-12" />
    },
    {
      title: "Feminino",
      desc: "Ambiente focado em técnica, confiança, força e defesa pessoal.",
      icon: <GiFemale className="size-12" />
    },
    {
      title: "Muay Thai",
      desc: "Condicionamento físico intenso, técnica e potência nos golpes.",
      icon: <GiBoxingGlove className="size-12" />
    }
  ];

  return (
    <section
      id="modalidades-component"
      className="
        min-h-dvh w-full
        bg-black/95
        px-6 md:px-32
        py-28 md:py-40
        flex flex-col
      "
    >
      {/* Título */}
      <div className="mb-20 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-3">
          Modalidades
        </p>
        <h3 className="text-3xl md:text-4xl font-light text-white">
          Treinos para todos os níveis
        </h3>
      </div>

      {/* Grid */}
      <div
        className="
          grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4
          gap-10 xl:gap-14
          w-full
        "
      >
        {modalidades.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            data-index={index}
            className={`
              relative
              bg-white/5 backdrop-blur-lg
              border border-white/10
              rounded-3xl
              p-10
              min-h-[320px]
              flex flex-col justify-between
              transition-all duration-[1200ms] ease-out
              ${
                visibleCards[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-24"
              }
            `}
          >
            {/* Ícone */}
            <div
              className="
                w-16 h-16
                rounded-2xl
                bg-white/10
                flex items-center justify-center
                text-white
              "
            >
              {item.icon}
            </div>

            {/* Texto */}
            <div>
              <h4 className="text-2xl font-semibold text-white mb-4">
                {item.title}
              </h4>
              <p className="text-gray-400 leading-relaxed text-base">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
