import create from 'zustand'

const useUserStore = create(set => ({
  username: '',
  isAuthenticated: false,
  login: () => set({ isAuthenticated: true }),
}))

export { useUserStore }
