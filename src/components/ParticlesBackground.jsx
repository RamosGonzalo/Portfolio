import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: { enable: true, mode: "push" },
                        onHover: { enable: true, mode: "repulse" },
                    },
                },
                particles: {
                    color: { value: "#3b82f6" },
                    links: { color: "#60a5fa", distance: 150, enable: true },
                    move: { enable: true, speed: 2 },
                    number: { density: { enable: true }, value: 80 },
                    opacity: { value: 0.5 },
                    size: { value: { min: 1, max: 3 } },
                },
            }}
        />
    );
};