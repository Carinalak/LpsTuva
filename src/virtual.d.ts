declare module 'virtual:pwa-register' {
  interface RegisterSWOptions {
    immediate?: boolean
    onNeedRefresh?: () => void
    onOfflineReady?: () => void
    // för att få bort varningar
  }

  export function registerSW(options?: RegisterSWOptions): () => void
}
