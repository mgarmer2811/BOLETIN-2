import { useState } from 'react';

export default function UserTable() {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({ name: '', email: '', age: '' });

    function handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    }

    function handleAddUser(e) {
        e.preventDefault();
        if (!form.name || !form.email || !form.age) {
            alert('Por favor, completa todos los campos');
            return;
        }
        if (isNaN(form.age) || form.age <= 0) {
            alert('Por favor, ingresa una edad válida');
            return;
        }
        setUsers([...users, form]);
        setForm({ name: '', email: '', age: '' });
    }

    function handleDeleteUser(index) {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
    }

    return (
        <div>
            <h2>Gestión de Usuarios</h2>
            <form onSubmit={handleAddUser}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={form.name}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={form.email}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Edad"
                    value={form.age}
                    onChange={handleInputChange}
                />
                <button type="submit">Agregar Usuario</button>
            </form>

            <br />
            <table border="1">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Edad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length === 0 ? (
                        <tr>
                            <td colSpan="4">No hay usuarios registrados.</td>
                        </tr>
                    ) : (
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <button onClick={() => handleDeleteUser(index)}>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
