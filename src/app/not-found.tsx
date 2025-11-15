import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="mb-4 text-2xl font-bold">404 - Página No Encontrada</h2>
      <p className="mb-8 text-gray-600">Lo sentimos, la página que buscas no existe.</p>
      <Link
        href="/"
        className="rounded-full bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90"
      >
        Volver al Inicio
      </Link>
    </div>
  );
}

export const dynamic = 'force-static';