import {
  AccessIcon,
  ArrowRight02Icon,
  Mail02Icon,
  ViewIcon,
} from 'hugeicons-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function SignIn() {
  return (
    <div className="m-6 flex flex-col justify-between rounded-[32px] bg-white px-20 py-[72px]">
      <div>
        <header className="flex flex-col gap-2">
          <h1 className="font-title text-2xl font-bold leading-[1.2] text-customGray-500">
            Acesse sua conta
          </h1>
          <span className="font-text text-sm leading-[1.2] text-customGray-300">
            Informe seu e-mail e senha para entrar
          </span>
        </header>

        <form className="mt-12 flex flex-col">
          <div>
            <Label
              className="font-text text-xs font-medium uppercase leading-[1.2] text-customGray-300"
              htmlFor="email"
            >
              E-mail
            </Label>

            <div className="relative">
              <Mail02Icon className="absolute left-[2px] top-1/2 -translate-y-1/2 transform text-customGray-200" />
              <Input
                id="email"
                placeholder="Seu e-mail cadastrado"
                className="pl-[34px]"
              />
            </div>
          </div>

          <div className="mt-5">
            <Label
              className="font-text text-xs font-medium uppercase leading-[1.2] text-customGray-300"
              htmlFor="password"
            >
              Senha
            </Label>

            <div className="relative">
              <AccessIcon className="absolute left-[2px] top-1/2 -translate-y-1/2 transform text-customGray-200" />
              <Input
                id="password"
                placeholder="Sua senha de acesso"
                className="pl-[34px]"
              />
              <ViewIcon className="absolute right-[2px] top-1/2 -translate-y-1/2 transform text-customGray-200" />
            </div>
          </div>

          <Button className="mt-12 flex justify-between leading-[1.2]">
            Acessar
            <ArrowRight02Icon />
          </Button>
        </form>
      </div>

      <footer className="mt-auto flex flex-col gap-5">
        <span className="font-text text-base font-normal leading-[1.2] text-customGray-300">
          Ainda não tem uma conta?
        </span>
        <Button
          variant="outline"
          className="font-text flex justify-between leading-[1.2]"
        >
          Cadastrar
          <ArrowRight02Icon />
        </Button>
      </footer>
    </div>
  )
}
