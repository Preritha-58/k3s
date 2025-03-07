import { headers } from "next/headers"
import Link from "next/link"

export const runtime = "edge"

export default function EdgePage() {
  const headersList = headers()
  const userAgent = headersList.get("user-agent")
  const country = headersList.get("x-vercel-ip-country") || "Unknown"
  const city = headersList.get("x-vercel-ip-city") || "Unknown"

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-3xl w-full">
        <Link href="/" className="text-blue-400 hover:underline mb-6 inline-block">
          ← Back to home
        </Link>

        <h1 className="text-3xl font-bold mb-6">Edge Function Demo</h1>

        <div className="bg-slate-700/30 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Request Information</h2>
          <div className="space-y-2">
            <p>
              <strong>User Agent:</strong> {userAgent}
            </p>
            <p>
              <strong>Country:</strong> {country}
            </p>
            <p>
              <strong>City:</strong> {city}
            </p>
            <p>
              <strong>Time:</strong> {new Date().toISOString()}
            </p>
          </div>
        </div>

        <div className="bg-slate-700/30 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">About Edge Functions</h2>
          <p className="mb-4">
            This page is running at the Edge - the server closest to you in Vercel's global network. Edge Functions are
            ideal for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Geolocation-based customization</li>
            <li>A/B testing</li>
            <li>Custom headers and cookies</li>
            <li>Bot protection</li>
            <li>Low-latency API responses</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

