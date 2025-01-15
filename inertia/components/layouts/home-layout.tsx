import { Navbar } from './navbar'

export const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col gap-4">
      <Navbar />

      <div className="flex-1">{children}</div>
    </main>
  )
}
