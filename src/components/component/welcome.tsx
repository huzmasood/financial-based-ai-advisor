import Link from "next/link"

export function Welcome() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <div className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to AI Financial Advisory
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  The best app for stock recommendation.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="signin"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full h-20 flex items-center justify-center border-t text-gray-600 dark:border-gray-800 dark:text-gray-300">
        <p>© 2024 AI Financial Advisory. All rights reserved.</p>
      </div>
    </div>
  )
}
