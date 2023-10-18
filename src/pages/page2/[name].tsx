import { useRouter } from 'next/router';
import { FC } from 'react';

const DynamicName: FC = () => {
    const router = useRouter();
    const { name } = router.query;

    const handleClick = () => {
        router.push('/page2');
    };

    return (
        <main className="flex flex-col items-center">
            <div>{`Hello, ${name}`}</div>
            <div>
                <button className="text-cyan-500" onClick={handleClick}>
                    Go back to page 2
                </button>
            </div>
        </main>
    );
};

export default DynamicName;