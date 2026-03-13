import './globals.css'

export const metadata = {
  title: "Controle de Combustível",
  description: "Gestão operacional Demax",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
