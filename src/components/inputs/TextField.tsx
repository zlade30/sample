import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type InputProps = {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    label?: string;
    type?: string;
    name: string;
    formik: Formik;
};

const TextField = ({
    iconLeft,
    iconRight,
    label,
    type = 'text',
    formik,
    name,
    ...props
}: InputProps & InputHTMLAttributes<HTMLInputElement>) => {
    const isError = Boolean(formik.touched[name] && formik.errors[name]);

    const hasIconLeft = () => {
        if (iconLeft) return 'pl-[35px]';
        return '';
    };

    const hasIconRight = () => {
        if (iconRight) return 'pr-[35px]';
        return '';
    };

    const errorStyle = () => {
        if (isError) return 'border-error-main placeholder:text-error-main';
        return '';
    };

    const typographyErrorStyle = () => {
        if (isError) return 'text-error-main';
        return '';
    };

    return (
        <div className="flex flex-col gap-1 w-full">
            <p
                className={twMerge(
                    'input-label text-gray-light-text-primary',
                    typographyErrorStyle()
                )}
            >
                {label}
            </p>
            <div className="relative">
                <div className="absolute top-1/2 transform -translate-y-1/2 pl-2">
                    {iconLeft}
                </div>
                <input
                    type={type}
                    className={twMerge(
                        'w-full border outline-none input-text border-gray-light-extra-input-border hover:border-gray-light-action-active focus:border-primary-main rounded-[6px] px-[14px] py-[7px] placeholder:text-gray-light-text-disabled placeholder:font-light',
                        hasIconLeft(),
                        hasIconRight(),
                        errorStyle()
                    )}
                    name={name}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                    {...props}
                />
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-2">
                    {iconRight}
                </div>
            </div>
            {isError && (
                <p className={twMerge('helper-text', typographyErrorStyle())}>
                    {formik.errors[name]}
                </p>
            )}
        </div>
    );
};

export default TextField;
