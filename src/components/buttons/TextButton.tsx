import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const TextButton = ({
    size = 'medium',
    text,
    className,
    ...props
}: {
    size?: 'small' | 'medium' | 'large';
    text: string;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
    const getStyleSize = () => {
        if (size === 'small') return 'btn-text-small';
        else if (size === 'medium') return 'btn-text-medium';
        else return 'btn-text-large';
    };

    return (
        <button
            {...props}
            className={twMerge('text-primary-light', getStyleSize(), className)}
        >
            {text}
        </button>
    );
};

export default TextButton;
