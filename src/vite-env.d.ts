/// <reference types="vite/client" />

interface RouteError {
    data: string;
    error: {
        columnNumber: number;
        fileName: string;
        lineNumber: number;
        message: string;
        stack: string;
    };
    internal: boolean;
    status: number;
    statusText: string;
    message: string;
}

declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

type Formik = FormikHandlers &
    FormikState<FormikValues> &
    FormikErrors<FormikValues> &
    FormikProps<FormikValues>;

type ButtonProps = {
    size?: 'small' | 'medium' | 'large';
    isActive?: boolean;
    icon?: React.ReactNode;
    text: string;
    hasSubmenu?: boolean;
    className?: string;
};

type LoginFormProps = {
    email: string;
    password: string;
};

type RegisterFormProps = {
    email: string;
    password1: string;
    password2: string;
};
