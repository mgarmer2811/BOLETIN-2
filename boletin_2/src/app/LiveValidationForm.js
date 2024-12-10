import { useState } from "react";

export default function LiveValidationForm() {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [errors, setErrors] = useState({ username: "", password: "" });

    const validateField = (name, value) => {
        if (name === "username") {
            return value.length < 3
                ? "El nombre de usuario debe tener 3 caracteres al menos"
                : "";
        }
        if (name === "password") {
            return value.length < 6
                ? "La contraseña debe tener 6 caracteres al menos"
                : "";
        }
        return "";
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const usernameError = validateField("username", formData.username);
        const passwordError = validateField("password", formData.password);

        if (!usernameError && !passwordError) {
            alert("Formulario enviado correctamente");
            console.log("Datos enviados:", formData);
        } else {
            alert("Cumple los errores de validacion");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Nombre de usuario:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </label>
                {errors.username && <p>{errors.username}</p>}
            </div>

            <div>
                <label>
                    Contraseña:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                {errors.password && <p>{errors.password}</p>}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}
