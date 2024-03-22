"use client"

// import { Button } from '@/app/ui/button';
import { useFormState, useFormStatus } from "react-dom"
import { authenticate } from "@/app/lib/actions"

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)

  return (
    <div className="absolute top-0 bg-white bottom-0 left-0 right-0 z-20">
      <form action={dispatch} className="space-y-3 h-full flex justify-center items-center">
        {/* <form className="space-y-3 h-full flex justify-center items-center"> */}
        <div className="flex flex-col h-fit">
          <div className="relative">
            <input
              className="rounded-md border border-middleGray py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
              required
              minLength={6}
            />
          </div>
          <LoginButton />
          {/* <button>login</button> */}
          <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
            {errorMessage && (
              <>
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

function LoginButton() {
  const { pending } = useFormStatus()

  return (
    <>
      <button className="mt-4 hover:font-bold transition-all duration-200" aria-disabled={pending}>
        Log in
      </button>
    </>
  )
}
