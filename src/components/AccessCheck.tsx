// Server Component - No client-side code needed when password protection is disabled
export default function AccessCheck({ children }: { children: React.ReactNode }) {
  // Password protection disabled - render content immediately on server
  return <>{children}</>
}
