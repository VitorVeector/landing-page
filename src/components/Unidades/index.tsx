import { useEffect, useState } from "react";

export const Unidades = () => {
    const [visibleUnidades, setVisibleUnidades] = useState(false);

    useEffect(() => {
        const triggerUnidades = document.getElementById("trigger-unidades");
        if (!triggerUnidades) return;

        const observer = new IntersectionObserver(([entry]) => {
            setVisibleUnidades(entry.isIntersecting);
        }, { threshold: .3 });

        
        observer.observe(triggerUnidades);
        return () => {
            observer.disconnect();
            
            console.log('Apareci')
        }
    }, []);

    return (
        <section
            id="unidades-component"
            className="
                min-h-dvh w-full
                bg-gray-500/10
                px-6 md:px-32
                py-24 md:py-32
                flex flex-col
            "
        >
            {/* Título */}
            <div className="mb-12 text-center md:text-left">
                <p className="text-sm uppercase tracking-widest text-white mb-2">
                    Nossas Unidades
                </p>
                <h3 className="text-3xl md:text-4xl font-light text-gray-400">
                    Conheça onde estamos
                </h3>
            </div>

            {/* Grid das unidades */}
            <div
                className={`
                    grid grid-cols-1 md:grid-cols-2
                    gap-8
                    w-full
                    transition-discrete duration-700 ease-out
                    ${
                    visibleUnidades
                    ? 'opacity-100 -translate-y-10 pointer-events-auto'
                    : 'opacity-0 translate-y-0 pointer-events-none'
                    }
                `}
            >
                {/* Unidade 1 */}
                <div
                    className="
                        bg-white/70 backdrop-blur
                        rounded-2xl
                        p-8
                        shadow-sm
                        hover:shadow-md
                        transition
                        flex flex-col gap-4
                    "
                >
                    {/* Logo (placeholder) */}
                    <div
                        className="
                            w-20 h-20
                            rounded-xl
                            bg-gray-100
                            flex items-center justify-center
                            text-gray-400 text-sm
                        "
                    >
                        Logo
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Cambuí - MG
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            R. João Moreira Salles, 680 <br />
                            Cambuí - MG <br />
                            CEP 37600-000
                        </p>
                    </div>
                </div>

                {/* Unidade 2 */}
                <div
                    className="
                        bg-white/70 backdrop-blur
                        rounded-2xl
                        p-8
                        shadow-sm
                        hover:shadow-md
                        transition
                        flex flex-col gap-4
                    "
                >
                    {/* Logo (placeholder) */}
                    <div
                        className="
                            w-20 h-20
                            rounded-xl
                            bg-gray-100
                            flex items-center justify-center
                            text-gray-400 text-sm
                        "
                    >
                        Logo
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Mauá - SP
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Av. Washington Luiz, 3135 <br />
                            Vila Magini - Mauá - SP <br />
                            CEP 09390-140
                        </p>
                    </div>
                </div>
                <span id="trigger-unidades"></span>
            </div>
        </section>
    );
};
