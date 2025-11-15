import { useState } from "react"
import Alert from "./Alert"

export function useAlert() {
  const [alert, setAlert] = useState(null)

  const showAlert = (type, message, duration = 3000) => {
    setAlert({ type, message, duration })
  }

  const AlertComponent = () => {
    if (!alert) return null
    return (
      <Alert
        type={alert.type}
        message={alert.message}
        duration={alert.duration}
        onClose={() => setAlert(null)}
      />
    )
  }

  return { showAlert, AlertComponent }
}
