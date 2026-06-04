function InputField({ 
    label, 
    type = "text", 
    placeholder, 
    value, 
    onChange, 
    variant = "default" 
}) {
    // Preserve the user's exact styles
    const authStyle = "w-3/4 p-3 mb-6 rounded-lg border border-amber-950 dark:border-[#422B23] bg-white dark:bg-[#1C1210] dark:text-white focus:outline-none transition-colors";
    const defaultStyle = "w-full p-4 rounded-2xl bg-pink-200 dark:bg-[#1C1210] mt-3 outline-none text-primary transition-colors";
    
    const inputClass = variant === 'auth' ? authStyle : defaultStyle;

    return (
        <div className={variant === 'auth' ? "w-full flex justify-center" : "w-full"}>
            {label && (
                <label className="text-primary text-lg font-semibold block">
                    {label}
                </label>
            )}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={inputClass}
            />
        </div>
    );
}

export default InputField;
