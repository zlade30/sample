import { IconEye, IconEyeClosed } from '@tabler/icons-react';
import { InputHTMLAttributes, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type InputProps = {
    label?: string;
    name: string;
    formik: Formik;
};

const PasswordField = ({
    label,
    formik,
    name,
    ...props
}: InputProps & InputHTMLAttributes<HTMLInputElement>) => {
    const isError = Boolean(formik.touched[name] && formik.errors[name]);
    const [showPassword, setShowPassword] = useState(false);

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
                <input
                    type={showPassword ? 'text' : 'password'}
                    className={twMerge(
                        'w-full border outline-none input-text border-gray-light-extra-input-border hover:border-gray-light-action-active focus:border-primary-main rounded-[6px] px-[14px] py-[7px] placeholder:text-gray-light-text-disabled placeholder:font-light',
                        errorStyle()
                    )}
                    name={name}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                    {...props}
                />
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-2">
                    {showPassword ? (
                        <IconEye
                            className={twMerge(
                                'helper-text text-gray-light-text-secondary',
                                typographyErrorStyle()
                            )}
                            onClick={() => setShowPassword(false)}
                        />
                    ) : (
                        <IconEyeClosed
                            className={twMerge(
                                'helper-text text-gray-light-text-secondary',
                                typographyErrorStyle()
                            )}
                            onClick={() => setShowPassword(true)}
                        />
                    )}
                </div>
                {isError && (
                    <p
                        className={twMerge(
                            'helper-text text-gray-light-text-secondary',
                            typographyErrorStyle()
                        )}
                    >
                        {formik.errors[name]}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PasswordField;
