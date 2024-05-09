const CheckboxField = ({ name, text }: { name: string; text: string }) => {
    return (
        <div className="flex items-center gap-2">
            <input
                className="checked:bg-primary-light size-4"
                type="checkbox"
                id={name}
                name={name}
            ></input>
            <label
                htmlFor={name}
                className="body-1 text-gray-light-text-primary"
            >
                {text}
            </label>
        </div>
    );
};

export default CheckboxField;
