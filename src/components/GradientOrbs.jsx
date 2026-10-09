const GradientOrbs = ({ variant = 'default' }) => {
    // Subtle, restrained warm ambient lighting (no purple or blue gradients)
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
            <div
                className="pointer-events-none absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.03]"
                style={{
                    background: 'radial-gradient(circle, rgba(255, 85, 0, 0.4) 0%, transparent 70%)',
                }}
            />
            <div
                className="pointer-events-none absolute bottom-10 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.02]"
                style={{
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, transparent 70%)',
                }}
            />
        </div>
    );
};

export default GradientOrbs;
