import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/');
    };
    return (
        <main className="flex flex-col items-center">
            <div>Page 2</div>
            <div>
                <button className="text-cyan-500" onClick={handleClick}>
                    Go back to page 1
                </button>
            </div>
        </main>
    );
}
