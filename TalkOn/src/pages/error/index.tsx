import { Link } from "react-router-dom";

export function ErrorPage() {
    return(
        <div className="flex flex-col w-full min-h-screen justify-center items-center text-white">
            <h1 className="font-bold text-6xl mb-2">404</h1>
            <h1 className="font-bold text-4xl mb-4">Página não encontrada</h1>
            <p className="italic text-1xl mb-3">Você está em uma página que não existe!</p>

            <Link className="bg-gray-50/20 py-1 px-4 rounded-md" to='/'> Voltar para home </Link>
        </div>
    )
}