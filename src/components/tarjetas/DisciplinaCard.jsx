export default function DisciplinaCard({ nombre, atletas, color }) {
  return (
    <div className="p-4 rounded-xl shadow-md bg-white border hover:scale-105 transition cursor-pointer flex flex-col justify-between">
      <div className="text-lg font-semibold text-gray-800">{nombre}</div>

      <div className="text-sm text-gray-500 mt-2">
        Atletas inscritos: <span className="font-bold">{atletas}</span>
      </div>

      <div className={`mt-4 h-2 rounded-full ${color}`}></div>
    </div>
  );
}
