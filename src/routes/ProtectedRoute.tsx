import { Navigate } from "react-router-dom"
import type { ProtectedRouteProps } from "./types.ts"

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { children } = props
  const user = localStorage.getItem("currentUser")

  if (!user) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute
