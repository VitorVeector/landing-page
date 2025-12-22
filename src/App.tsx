import { useRef } from 'react';
import { Banner } from './components/Banner';
import { Content } from './components/Content';
import { Unidades } from './components/Unidades';
import { Navigation } from './components/Navigation';
import { Modalidades } from './components/Modalidades';
import { About } from './components/About';

function App() {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Navigation />
            
            <Banner
                onScrollToContent={() => contentRef.current?.scrollIntoView({ behavior: 'smooth' })}
            />
            {/* SENTINELA */}
            <div ref={contentRef}>
                <Content />
            </div>
            <div id="nav-trigger" className="h-0" />
            <Modalidades />
            <Unidades />
            <About />
        </>
    );
}

export default App;
