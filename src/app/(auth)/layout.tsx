import Image from 'next/image'
import { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="grid-cols-auth mx-auto grid min-h-screen w-full max-w-[1366px]">
      <div>
        <Image
          className="m-10"
          src="/Logo.svg"
          width={270}
          height={69}
          alt="Marketplace | Painel de Vendedor"
        />

        <Image
          src="/Background.png"
          className="w-full"
          width={900}
          height={600}
          quality={100}
          alt=""
        />
      </div>
      {children}
    </div>
  )
}
