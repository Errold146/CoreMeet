import Image from 'next/image';

export function Logo() {
    return (

        <Image
            src="/logo-core.png"
            alt="Logo CoreMeet"
            width={120}
            height={50}
            priority
            className="object-contain w-auto h-auto"
        />
    )
}
