
import {useState} from "react";

export default function FormPractice() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(name, password);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </form>
    )
}