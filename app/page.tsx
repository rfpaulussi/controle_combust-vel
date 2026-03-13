"use client";
import { Fuel, ArrowLeftRight, Droplet, ClipboardList } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">⛽ Controle de Combustível</h1>
        <p className="text-gray-600">Gestão de Roçadeiras - Operacional</p>
      </header>

      {/* KPIs Estratégicos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-500">
          <div className="flex items-center gap-4">
            <Fuel className="text-blue-500" />
            <div>
              <p className="text-sm text-gray-500 uppercase font-bold">Abastecido</p>
              <p className="text-2xl font-black text-gray-800">1.240 L</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-green-500">
          <div className="flex items-center gap-4">
            <ArrowLeftRight className="text-green-500" />
            <div>
              <p className="text-sm text-gray-500 uppercase font-bold">Devolvido</p>
              <p className="text-2xl font-black text-gray-800">85 L</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-orange-500">
          <div className="flex items-center gap-4">
            <Droplet className="text-orange-500" />
            <div>
              <p className="text-sm text-gray-500 uppercase font-bold">Consumo Real</p>
              <p className="text-2xl font-black text-gray-800">1.155 L</p>
            </div>
          </div>
        </div>
      </div>

      {/* Área de Ação Rápida */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-2 mb-6 text-gray-700">
          <ClipboardList />
          <h2 className="text-xl font-bold">Últimos Lançamentos (Campo)</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 border-b">
                <th className="pb-3 px-2">Equipamento</th>
                <th className="pb-3 px-2">Operador</th>
                <th className="pb-3 px-2 text-right">Litragem</th>
                <th className="pb-3 px-2 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b hover:bg-gray-50">
                <td className="py-4 px-2 font-medium">Roçadeira Honda #04</td>
                <td className="py-4 px-2">Sgt. Almeida</td>
                <td className="py-4 px-2 text-right">5.5 L</td>
                <td className="py-4 px-2 text-center">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">OK</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
