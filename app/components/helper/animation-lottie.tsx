"use client"

import dynamic from 'next/dynamic';

interface AnimationLottieProps {
    animationPath: any;
    width?: string | number;
}

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const AnimationLottie = ({ animationPath, width }: AnimationLottieProps) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationPath,
        style: {
            width: width || '95%',
        }
    };

    return (
        <Lottie {...defaultOptions} />
    );
};

export default AnimationLottie;