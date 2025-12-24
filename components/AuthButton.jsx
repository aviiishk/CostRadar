'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { AuthModal } from './AuthModal'
import { LogInIcon, LogOutIcon } from 'lucide-react'
import { signOut } from '@/app/actions'

const AuthButton = ({ user }) => {
  const [showAuthModal, setShowAuthModal] = useState(false)

  // ✅ LOGOUT
  if (user) {
    return (
      <form action={signOut}>
        <Button
          type="submit"
          variant="default"
          size="sm"
          className="bg-orange-400 text-white hover:bg-orange-500 gap-2"
        >
          <LogOutIcon className="h-4 w-4 hidden sm:inline" />
          <span>Log out</span>
        </Button>
      </form>
    )
  }

  // ✅ LOGIN
  return (
    <>
      <Button
        onClick={() => setShowAuthModal(true)}
        variant="default"
        size="sm"
        className="bg-orange-400 text-white hover:bg-orange-500 gap-2"
      >
        <LogInIcon className="h-4 w-4 hidden sm:inline" />
        <span>Sign In</span>
      </Button>

      <AuthModal
        isopen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  )
}

export default AuthButton
