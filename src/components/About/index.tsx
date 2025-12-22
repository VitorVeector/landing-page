export const About = () => {
    return (
        <section
            id="sobre-component"
            className="
        w-full
        bg-black
        px-6 md:px-32
        py-20 md:py-28
        flex flex-col gap-12
      "
        >
            {/* Conteúdo principal */}
            <div
                className="
          max-w-4xl
          flex flex-col gap-6
        "
            >
                <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
                    Sobre a Arete
                </p>

                <h3 className="text-3xl md:text-4xl font-light text-white leading-tight">
                    Excelência como princípio
                </h3>

                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                    A <span className="text-white font-medium">Arete Jiu-Jitsu</span> nasceu
                    com o propósito de desenvolver pessoas através da arte suave.
                    Mais do que formar atletas, buscamos formar indivíduos disciplinados,
                    confiantes e preparados para os desafios dentro e fora do tatame.
                </p>

                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                    Nosso método une técnica, respeito e evolução constante, criando
                    um ambiente acolhedor para crianças, adultos e atletas de alto
                    rendimento.
                </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10" />

            {/* Footer */}
            <footer
                className="
          w-full
          flex flex-col md:flex-row
          items-center justify-between
          gap-4
          text-sm text-gray-500
        "
            >
                <span>
                    © {new Date().getFullYear()} Arete Jiu-Jitsu
                </span>

                <span className="text-gray-500">
                    Desenvolvido por{" "}
                    <strong className="text-gray-300 font-medium">
                        Vitor Hugo
                    </strong>
                </span>
            </footer>
        </section>
    );
};
