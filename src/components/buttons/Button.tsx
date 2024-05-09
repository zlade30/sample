import { IconChevronDown } from '@tabler/icons-react';
import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const Button = ({
    size = 'medium',
    isActive,
    icon,
    text,
    hasSubmenu,
    className,
    ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
    const getActiveStyle = () => {
        if (isActive)
            return 'bg-gradient-to-r from-primary-main to-primary-300 text-white';
        return 'bg-white text-gray-light-text-primary';
    };

    const getStyleSize = () => {
        if (size === 'small')
            return 'btn-text-small w-min-[70px] h-[30px] p-[20px]';
        else if (size === 'medium')
            return 'btn-text-medium w-min-[88px] h-[38px] p-[24px]';
        else return 'btn-text-large w-min-[107px] h-[48px] p-[30px]';
    };

    return (
        <button
            {...props}
            className={twMerge(
                'flex items-center justify-center gap-2 rounded-lg hover:bg-gray-light-extra-action-hover',
                getActiveStyle(),
                getStyleSize(),
                className
            )}
        >
            {icon}
            <p>{text}</p>
            {hasSubmenu && <IconChevronDown className="size-[18px]" />}
        </button>
    );
};

export default Button;
