import Link from "next/link";

export function Hero() {
    return (
        <section className="bg-hero bg-cover bg-center h-150 flex justify-center items-center px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center max-w-2xl">
                <h1 className="text-3xl lg:text-4xl text-white uppercase font-black text-center">
                    Encuentra un CoreConnect o Crea una CoreCommunity para compartir lo que más te gusta.
                </h1>
                <Link
                    className="bg-naranja-500 hover:bg-naranja-600 transition-colors duration-200 rounded-xl text-xl text-white py-3 px-10 mt-5 font-bold"
                    href="/auth/register"
                >
                    Obtener una cuenta
                </Link>
            </div>
        </section>
    );
}
