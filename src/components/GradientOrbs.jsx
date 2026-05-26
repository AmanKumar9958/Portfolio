const GradientOrbs = ({ variant = 'default' }) => {
    const orbSets = {
        default: (
            <>
                <div
                    className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-30"
                    style={{
                        background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
                        animation: 'orb-drift-1 20s ease-in-out infinite',
                    }}
                />
                <div
                    className="pointer-events-none absolute top-1/3 -right-40 w-[400px] h-[400px] rounded-full opacity-20"
                    style={{
                        background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)',
                        animation: 'orb-drift-2 25s ease-in-out infinite',
                    }}
                />
                <div
                    className="pointer-events-none absolute -bottom-20 left-1/4 w-[350px] h-[350px] rounded-full opacity-15"
                    style={{
                        background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
                        animation: 'orb-drift-3 18s ease-in-out infinite',
                    }}
                />
            </>
        ),
        hero: (
            <>
                <div
                    className="pointer-events-none absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full opacity-25"
                    style={{
                        background: 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 65%)',
                        animation: 'orb-drift-1 22s ease-in-out infinite',
                    }}
                />
                <div
                    className="pointer-events-none absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full opacity-20"
                    style={{
                        background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 65%)',
                        animation: 'orb-drift-2 28s ease-in-out infinite',
                    }}
                />
                <div
                    className="pointer-events-none absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full opacity-20"
                    style={{
                        background: 'radial-gradient(circle, rgba(167,139,250,0.25) 0%, transparent 70%)',
                        animation: 'orb-drift-3 15s ease-in-out infinite',
                    }}
                />
            </>
        ),
        subtle: (
            <>
                <div
                    className="pointer-events-none absolute -top-20 right-0 w-[350px] h-[350px] rounded-full opacity-15"
                    style={{
                        background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)',
                        animation: 'orb-drift-1 24s ease-in-out infinite',
                    }}
                />
                <div
                    className="pointer-events-none absolute bottom-10 -left-16 w-[300px] h-[300px] rounded-full opacity-10"
                    style={{
                        background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)',
                        animation: 'orb-drift-2 20s ease-in-out infinite',
                    }}
                />
            </>
        ),
    };

    return orbSets[variant] || orbSets.default;
};

export default GradientOrbs;
