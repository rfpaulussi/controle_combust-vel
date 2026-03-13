"use client"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">

      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          ⛽ Controle de Combustível
        </h1>
        <p className="text-gray-600">
          Gestão de Roçadeiras - Operacional Demax
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-500">
          <p className="text-sm text-gray-500 font-bold uppercase">
            Abastecido
          </p>
          <p className="text-2xl font-black">1.240 L</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-green-500">
          <p className="text-sm text-gray-500 font-bold uppercase">
            Devolvido
          </p>
          <p className="text-2xl font-black">85 L</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-orange-500">
          <p className="text-sm text-gray-500 font-bold uppercase">
            Consumo Real
          </p>
          <p className="text-2xl font-black">1.155 L</p>
        </div>

      </div>

    </div>
  )
}
