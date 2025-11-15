export default function ProgressBar({ collected, goal, isCompleted = false }) {
  const percentage = Math.min((collected / goal) * 100, 100)

  return (
    <div className="w-full">
      <div className={`w-full h-3 rounded-full overflow-hidden ${
        isCompleted ? 'bg-gray-300' : 'bg-gray-200'
      }`}>
        <div
          className={`h-full transition-all duration-500 ${
            isCompleted 
              ? 'h-full transition-all duration-500 bg-gradient-to-r from-green-400 to-green-500' 
              : 'bg-gradient-to-r from-primary to-secondary'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between mt-2 text-sm">
        <span className={`font-semibold ${isCompleted ? 'text-gray-600' : 'text-primary'}`}>
          Prikupljeno: {collected}€
        </span>
        <span className="text-gray-600">Cilj: {goal}€</span>
      </div>
    </div>
  )
}
