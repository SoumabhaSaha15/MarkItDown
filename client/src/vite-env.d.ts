/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_USER_PROFILE: string
  readonly VITE_GOOGLE_LOGIN_URI: string
  readonly VITE_GOOGLE_LOGOUT: string // Optional if it might not always be present
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
