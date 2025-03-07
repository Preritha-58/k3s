import Link from "next/link"

// This page uses static generation
export const dynamic = "force-static"

export default function StaticPage() {
  // This timestamp will be captured at build time
  const buildTime = new Date().toISOString()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-3xl w-full">
        <Link href="/" className="text-blue-400 hover:underline mb-6 inline-block">
          ← Back to home
        </Link>

        <h1 className="text-3xl font-bold mb-6">Static Generation Demo</h1>

        <div className="bg-slate-700/30 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Build-Time Information</h2>
          <div className="space-y-2">
            <p>
              <strong>Page Built At:</strong> {buildTime}
            </p>
            <p>
              <strong>Current Time:</strong> <span id="current-time">Loading...</span>
            </p>
            <p className="text-sm text-slate-400">
              Notice how the build time stays the same between refreshes, while the current time updates.
            </p>
          </div>
        </div>

        <div className="bg-slate-700/30 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">About Static Generation</h2>
          <p className="mb-4">This page is statically generated at build time. Static Generation is ideal for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Marketing pages</li>
            <li>Blog posts</li>
            <li>Documentation</li>
            <li>Product listings</li>
            <li>Any content that doesn't change frequently</li>
          </ul>
          <p className="mt-4">
            Static pages are cached on Vercel's global CDN and delivered instantly to users worldwide.
          </p>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          function updateTime() {
            document.getElementById('current-time').textContent = new Date().toISOString();
          }
          updateTime();
          setInterval(updateTime, 1000);
        `,
        }}
      />
    </div>
  )
}

