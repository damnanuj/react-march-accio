





const Input = ({ name, label, errorMessage, isValid, type }) => {

    return (
        <div className="input-container">
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} id={name} className={isValid ? 'valid' : 'invalid'} />
            {!isValid && <span className="error">{errorMessage}</span>}
        </div>
    );
}

export default Input