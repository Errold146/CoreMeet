import Image from 'next/image';

export function Logo() {
    return (
        <div>
            <Image
                src="/logo-core.png"
                alt="Logo CoreMeet"
                width={160}
                height={50}
                priority
                className="object-contain"
            />
        </div>
    )
}
