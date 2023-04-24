import { ReactNode, createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

interface AuthContextProviderProps {
  children: ReactNode
}

interface UserProps {
  id: number
  email: string
  name: string
  password: string
  avatar: string | null 
  created_at: string
  updated_at: string
}

interface DataProps {
  user: UserProps 
  token: string 
}

interface ProfileContextType {
  user: UserProps
  signIn: ({ email, password }: SignInProps) => void
  signOut: () => void
  updateProfile: ({user}: any) => void
}

interface SignInProps {
  email: string
  password: string
}

interface UpdateProfileProps {
  user: UserProps
  avatarFile: string
}

export const AuthContext = createContext({} as ProfileContextType)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [data, setData] = useState({} as DataProps)

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
      localStorage.setItem("@rocketmovies:token", token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ user, token })
    } catch (err: any){
      if(err.response) {
        alert(err.response.data.message)
      } else {
        alert("Não foi possível entrar")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketmovies:token")
    localStorage.removeItem("@rocketmovies:user")

    setData({} as DataProps)
  }

  async function updateProfile({ user, avatarFile }: UpdateProfileProps) {
    try {
      if(avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch('/users/avatar', fileUploadForm)
        user.avatar = response.data.avatar
      }

      await api.put('/users', user)
      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))

      setData({user, token: data.token})
      alert('Perfil atualizado!')

    } catch (err: any){
      if(err.response) {
        alert(err.response.data.message)
      } else {
        alert("Não foi possível atualizar o perfil")
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketmovies:token")
    const user = localStorage.getItem("@rocketmovies:user")

    if(token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, signOut, updateProfile, user: data.user}}>
      { children }
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}