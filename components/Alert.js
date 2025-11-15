import { useState, useEffect } from "react"
import { FaCheckCircle, FaTimesCircle, FaInfoCircle, FaExclamationTriangle } from "react-icons/fa"

export default function Alert({ type = "success", message, onClose, duration = 3000 }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(onClose, 300)
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [duration, onClose])

  const types = {
    success: {
      bg: "from-green-500 to-emerald-600",
      icon: <FaCheckCircle className="text-2xl" />,
      text: "text-white"
    },
    error: {
      bg: "from-red-500 to-rose-600",
      icon: <FaTimesCircle className="text-2xl" />,
      text: "text-white"
    },
    info: {
      bg: "from-blue-500 to-blue-600",
      icon: <FaInfoCircle className="text-2xl" />,
      text: "text-white"
    },
    warning: {
      bg: "from-yellow-500 to-orange-500",
      icon: <FaExclamationTriangle className="text-2xl" />,
      text: "text-white"
    }
  }

  const config = types[type] || types.success

  return (
    <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}>
      <div className={`bg-gradient-to-r ${config.bg} ${config.text} px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 min-w-[300px] max-w-md`}>
        <div className="flex-shrink-0">
          {config.icon}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-base leading-relaxed">{message}</p>
        </div>
        <button onClick={() => { setIsVisible(false); setTimeout(onClose, 300) }} className="flex-shrink-0 ml-2 hover:bg-white hover:bg-opacity-20 p-1 rounded-lg transition-all">
          <FaTimesCircle className="text-xl" />
        </button>
      </div>
    </div>
  )
}
