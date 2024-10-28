declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent
  }
}

export interface BeforeInstallPromptEvent extends Event {
  prompt: () => void
  userChoice: Promise<{outcome: 'accepted' | 'dismissed'}>
}
