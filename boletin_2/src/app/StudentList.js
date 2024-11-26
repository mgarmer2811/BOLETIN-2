import { useState } from 'react'

let nextId = 0;

export default function StudentList() {
    const[students, setStudents] = useState([]);

    function handleAddStudent(studentName) {
        setStudents([...students,{id:nextId,name:studentName}]);
        nextId++;
    }

    function handleDeleteStudent(studentId) {
        setStudents(students.filter(s => s.id !== studentId));
    }

    return(
        <div>
            <AddStudent
                onAddStudent={handleAddStudent}
            />
            <Students
                arrayStudents={students}
                onDelete={handleDeleteStudent}
            />
        </div>
    );
}

function Students({arrayStudents, onDelete}) {
    return(
        <ul>
            {arrayStudents.map(student => (
                <li key={student.id}>
                    <Student
                        student={student}
                        onDeleteStudent={onDelete}
                    />
                </li>
            ))}
        </ul>
    );
}

function Student({student, onDeleteStudent}) {
    return(
        <>
            <div>
                {student.name}
                <button onClick={() => onDeleteStudent(student.id)} >
                    Eliminar
                </button>
            </div>
        </>
    );
}

function AddStudent({onAddStudent}) {
    const[name, setName] = useState('');

    return(
        <>
            <input
            placeholder='Agregar estudiante'
            value={name}
            onChange={e => setName(e.target.value)}
            />
            <button onClick={() => {
                setName('');
                onAddStudent(name);
            }}>Agregar</button>
        </>
    );
}