import React, { useEffect, useRef, useState } from 'react';

const SorryWebsite = () => {
    // State
    const [textElements, setTextElements] = useState([]);
    const [destroyedCount, setDestroyedCount] = useState(0);
    const [currentStage, setCurrentStage] = useState(0);
    const [showSorry, setShowSorry] = useState(false);

    // Refs
    const totalLettersRef = useRef(0);
    const cursorRef = useRef({ x: 0, y: 0 });

    // Multi-stage messages
    const stages = [
        {
            lines: [
                "Hey sakhii , listen na muje pata hai aap ke liye",
                "thoda juldi juldi ha ye sab or me uski respect krta hu ,",
                "or na he kuch over kr ne ki koshish kr raha hu ,",
                "don't know shyad kr bhi raha hu"
            ]
        },
        {
            lines: [
                "kl raat ko me bhi isi over thinking me so gaya tha",
                "ki kahi me jabardasti toh nahi kr raha hu"
            ]
        },
        {
            lines: [
                "sorry mera intention aap ko ignore krne ka nhi tha",
                "me face nhi kr pa raha tha ,us vaja se aap ko hurt hua ho uske liye sorry "
            ]
        }
    ];

    const currentMessageLines = stages[currentStage]?.lines || [];

    // Initialize text elements
    useEffect(() => {
        const elements = [];
        let letterCount = 0;

        currentMessageLines.forEach((line, lineIndex) => {
            for (let i = 0; i < line.length; i++) {
                const char = line[i];
                if (char.trim() !== '') {
                    elements.push({
                        char,
                        lineIndex,
                        charIndex: i,
                        destroyed: false,
                        tx: (Math.random() - 0.5) * 200,
                        ty: Math.random() * 500 + 200,
                        rot: (Math.random() - 0.5) * 720
                    });
                    letterCount++;
                } else {
                    elements.push({
                        char: '\u00a0', // Non-breaking space
                        lineIndex,
                        charIndex: i,
                        destroyed: false,
                        isSpace: true
                    });
                }
            }
        });

        setTextElements(elements);
        totalLettersRef.current = letterCount;
        setDestroyedCount(0);
    }, [currentStage]);

    // Reload text function
    const reloadText = () => {
        const elements = [];
        let letterCount = 0;

        currentMessageLines.forEach((line, lineIndex) => {
            for (let i = 0; i < line.length; i++) {
                const char = line[i];
                if (char.trim() !== '') {
                    elements.push({
                        char,
                        lineIndex,
                        charIndex: i,
                        destroyed: false,
                        tx: (Math.random() - 0.5) * 200,
                        ty: Math.random() * 500 + 200,
                        rot: (Math.random() - 0.5) * 720
                    });
                    letterCount++;
                } else {
                    elements.push({
                        char: '\u00a0',
                        lineIndex,
                        charIndex: i,
                        destroyed: false,
                        isSpace: true
                    });
                }
            }
        });

        setTextElements(elements);
        totalLettersRef.current = letterCount;
        setDestroyedCount(0);
    };

    // Mouse move handler - check for letter destruction
    const handleMouseMove = (e) => {
        cursorRef.current.x = e.clientX;
        cursorRef.current.y = e.clientY;

        // Check if cursor is over any letter
        const letterElements = document.querySelectorAll('.letter:not(.destroyed)');

        letterElements.forEach(letterEl => {
            const rect = letterEl.getBoundingClientRect();
            const isHovering =
                e.clientX >= rect.left &&
                e.clientX <= rect.right &&
                e.clientY >= rect.top &&
                e.clientY <= rect.bottom;

            if (isHovering) {
                const index = parseInt(letterEl.getAttribute('data-index'));
                destroyLetter(index, letterEl);
            }
        });
    };

    // Destroy letter
    const destroyLetter = (index, element) => {
        if (textElements[index]?.destroyed) return;

        element.classList.add('destroyed');
        createParticles(element);

        setTextElements(prev => {
            const newElements = [...prev];
            newElements[index].destroyed = true;
            return newElements;
        });

        setDestroyedCount(prev => {
            const newCount = prev + 1;
            if (newCount >= totalLettersRef.current) {
                // All letters destroyed, move to next stage
                setTimeout(() => {
                    if (currentStage < stages.length - 1) {
                        setCurrentStage(currentStage + 1);
                    } else {
                        setShowSorry(true);
                    }
                }, 1000);
            }
            return newCount;
        });
    };

    // Create particles
    const createParticles = (element) => {
        const rect = element.getBoundingClientRect();
        const particleCount = 5;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.textContent = element.textContent;
            particle.style.left = rect.left + 'px';
            particle.style.top = rect.top + 'px';

            const tx = (Math.random() - 0.5) * 100;
            const ty = Math.random() * 100 + 50;
            const rot = (Math.random() - 0.5) * 360;

            particle.style.setProperty('--tx', tx + 'px');
            particle.style.setProperty('--ty', ty + 'px');
            particle.style.setProperty('--rot', rot + 'deg');

            document.body.appendChild(particle);

            setTimeout(() => particle.remove(), 800);
        }
    };

    // Event listeners
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [textElements]);

    // Handle touch move for scratch/swipe gesture
    const handleTouchMove = (e) => {
        e.preventDefault(); // Prevent scrolling while scratching

        const touch = e.touches[0];
        if (!touch) return;

        // Find element at touch position
        const element = document.elementFromPoint(touch.clientX, touch.clientY);
        if (!element || !element.classList.contains('letter')) return;

        const index = parseInt(element.getAttribute('data-index'));
        if (!isNaN(index)) {
            destroyLetter(index, element);
        }
    };

    // Handle word tap/click (adapted for letter-based destruction)
    const handleLetterTap = (index, element) => {
        // Prevent default touch behavior like scrolling/zooming
        // e.preventDefault(); // This would be on the event object if passed directly

        // Simulate destruction for the tapped letter
        destroyLetter(index, element);
    };

    return (
        <div className="sorry-container">
            {/* Reload Button */}
            {!showSorry && (
                <button className="reload-btn" onClick={reloadText}>
                    ↻ Reload Text
                </button>
            )}

            {/* Text container */}
            <div
                className={`text-container ${showSorry ? 'hidden' : ''}`}
                onTouchMove={handleTouchMove}
            >
                {currentMessageLines.map((line, lineIndex) => (
                    <div key={lineIndex} className="text-line">
                        {textElements
                            .filter(el => el.lineIndex === lineIndex)
                            .map((el, idx) => {
                                const globalIndex = textElements.findIndex(
                                    e => e.lineIndex === lineIndex && e.charIndex === el.charIndex
                                );
                                return (
                                    <span
                                        key={idx}
                                        className={`letter ${el.destroyed ? 'destroyed' : ''}`}
                                        data-index={globalIndex}
                                        style={{
                                            '--tx': `${el.tx}px`,
                                            '--ty': `${el.ty}px`,
                                            '--rot': `${el.rot}deg`
                                        }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleLetterTap(globalIndex, e.currentTarget);
                                        }}
                                        onTouchEnd={(e) => {
                                            e.preventDefault(); // Prevent default touch behavior
                                            e.stopPropagation();
                                            handleLetterTap(globalIndex, e.currentTarget);
                                        }}
                                    >
                                        {el.char}
                                    </span>
                                );
                            })}
                    </div>
                ))}
            </div>

            {/* Sorry message */}
            <div className={`sorry-message ${showSorry ? 'show' : ''}`}>
                <h1>I'M SORRY</h1>
                <p>Please forgive me...</p>
            </div>

            {/* Instructions */}
            <div className="instructions">
                <p className="desktop-instructions">MOVE CURSOR OVER TEXT TO DESTROY</p>
                <p className="mobile-instructions">TAP OR SWIPE TO SCRATCH LETTERS</p>
                <p className="stage-indicator">Stage {currentStage + 1} of {stages.length}</p>
            </div>
        </div>
    );
};

export default SorryWebsite;
