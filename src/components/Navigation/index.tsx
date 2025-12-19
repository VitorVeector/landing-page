import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export const Navigation = () => {
    const [visible, setVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const trigger = document.getElementById('nav-trigger');
        if (!trigger) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            { threshold: 0.6 }
        );

        observer.observe(trigger);
        return () => observer.disconnect();
    }, []);

    return (
        <header
            className={`
                z-50
                w-full
                bg-gray-500/60
                rounded-b-3xl
                shadow-[0_10px_16px_4px_rgba(0,0,0,0.45)]
                transition-all
                fixed top-0 left-0 backdrop-blur-sm duration-700 ease-out
                ${
                visible
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-10 pointer-events-none'
                }
            `}
        >
            <div
                className="
                    flex
                    h-16
                    px-4
                    items-center justify-between
                    md:justify-center
                "
            >
                {/* Logo / Nome */}
                <span
                    className="
                        text-white font-semibold
                        left-6
                        md:absolute
                    "
                >
                    <h2 className='text-3xl md:text-5xl'>Arete</h2>
                </span>

                {/* Desktop menu */}
                <nav
                    className="
                        hidden
                        md:block
                    "
                >
                    <ul
                        className="
                            flex
                            text-white font-light text-shadow-lg/30
                            gap-10
                        "
                    >
                        <li>Início</li>
                        <li>Muay Thai</li>
                        <li>Feminino</li>
                        <li>Kids</li>
                        <li>Unidades e Contato</li>
                        <li>Sobre</li>
                    </ul>
                </nav>

                {/* Mobile button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menu"
                    className="
                        text-white text-2xl
                        md:hidden
                    "
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            <div
                className={`
                    overflow-hidden
                    transition-all
                    duration-1500
                    ease-[cubic-bezier(.2.5,.4,.4,.1.5)]
                    md:hidden
                    ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}
            >
                <nav
                    className="
                        px-6 pb-4
                    "
                >
                    <ul
                        className="
                            hover:cursor
                            flex flex-col
                            text-white
                            gap-4
                        "
                    >
                        <li onClick={() => setMenuOpen(false)}>Início</li>
                        <li onClick={() => setMenuOpen(false)}>Muay Thai</li>
                        <li onClick={() => setMenuOpen(false)}>Feminino</li>
                        <li onClick={() => setMenuOpen(false)}>Kids</li>
                        <li onClick={() => setMenuOpen(false)}>Unidades e Contato</li>
                        <li onClick={() => setMenuOpen(false)}>Sobre</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
