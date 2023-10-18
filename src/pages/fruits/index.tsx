import { useRouter } from 'next/router';

export default function Fruits() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/');
    };

    return (
        <main>
            <h1>Fruits</h1>
            <button onClick={handleClick}>Home</button>
        </main>
    )
}