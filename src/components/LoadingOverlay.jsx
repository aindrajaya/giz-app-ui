import { useState } from 'react'

export default function LoadingOverlay({ isLoading, children }) {
  return (
    <>
      {isLoading && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            <p className="text-2xl font-bold text-gray-700 mt-4">Please wait, Image is processing...</p>
          </div>
        </div>
      )}
      {children}
    </>
  )
}
