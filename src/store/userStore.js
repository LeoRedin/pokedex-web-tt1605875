import create from 'zustand'

const useUserStore = create(set => ({
  username: '',
  isAuthenticated: true,
  login: () => set({ isAuthenticated: true }),
}))

export { useUserStore }
