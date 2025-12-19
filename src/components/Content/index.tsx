export const Content = () => {
    return (
        <div
            id="content-component"
            className="
                flex
                flex-col
                md:flex-row
                h-dvh
                w-full
                overflow-hidden
            "
        >
            {/* CARD 1 */}
            <div
                className="
                    group
                    relative
                    h-1/2
                    md:h-full
                    w-full
                    md:w-1/2
                    bg-[url('/images/Arete1.png')]
                    bg-cover
                    bg-center
                    transition-transform
                    duration-700
                    md:hover:scale-105
                "
            >
                {/* Overlay */}
                <div
                    className="
                        absolute inset-0
                        bg-black/40
                        opacity-0
                        transition-opacity
                        duration-500
                        md:group-hover:opacity-100
                    "
                />

                {/* Conteúdo */}
                <div
                    className="
                        absolute bottom-8 left-8
                        text-white
                        opacity-100
                        md:opacity-0
                        md:translate-y-6
                        transition-all
                        duration-500
                        md:group-hover:opacity-100
                        md:group-hover:translate-y-0
                    "
                >
                    <h3 className="text-3xl md:text-4xl font-normal">
                        Arete Jiu-Jitsu
                    </h3>
                    <p className="mt-2 text-lg opacity-80">
                        Disciplina, respeito e evolução
                    </p>
                </div>
            </div>

            {/* CARD 2 */}
            <div
                className="
                    group
                    relative
                    h-1/2
                    md:h-full
                    w-full
                    md:w-1/2
                    bg-[url('/images/Arete2.png')]
                    bg-cover
                    bg-center
                    transition-transform
                    duration-700
                    md:hover:scale-105
                "
            >
                {/* Overlay */}
                <div
                    className="
                        absolute inset-0
                        bg-black/40
                        opacity-0
                        transition-opacity
                        duration-500
                        md:group-hover:opacity-100
                    "
                />

                {/* Conteúdo */}
                <div
                    className="
                        absolute bottom-8 left-8
                        text-white
                        opacity-100
                        md:opacity-0
                        md:translate-y-6
                        transition-all
                        duration-500
                        md:group-hover:opacity-100
                        md:group-hover:translate-y-0
                    "
                >
                    <h3 className="text-3xl md:text-4xl font-normal">
                        Formação desde cedo
                    </h3>
                    <p className="mt-2 text-lg opacity-80">
                        Corpo forte, mente equilibrada
                    </p>
                </div>
            </div>
        </div>
    )
}
