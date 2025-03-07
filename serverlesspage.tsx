import Link from "next/link"

// This uses the default Node.js runtime
export default async function ServerlessPage() {
  // Simulate a database query or external API call
  const data = await fetchDataWithDelay()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-3xl w-full">
        <Link href="/" className="text-blue-400 hover:underline mb-6 inline-block">
          ← Back to home
        </Link>

        <h1 className="text-3xl font-bold mb-6">Serverless Function Demo</h1>

        <div className="bg-slate-700/30 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Server-Side Data</h2>
          <div className="space-y-2">
            <p>
              <strong>Server Time:</strong> {data.timestamp}
            </p>
            <p>
              <strong>Random ID:</strong> {data.id}
            </p>
            <p>
              <strong>Processing Time:</strong> {data.processingTime}ms
            </p>
          </div>
        </div>

        <div className="bg-slate-700/30 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">About Serverless Functions</h2>
          <p className="mb-4">This page is running as a Serverless Function. Serverless Functions are ideal for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>API endpoints that need to process data</li>
            <li>Authentication and authorization</li>
            <li>Database operations</li>
            <li>Third-party API integration</li>
            <li>Complex server-side logic</li>
          </ul>
          <p className="mt-4">
            On Vercel, Serverless Functions automatically scale based on demand and you only pay for what you use.
          </p>
        </div>
      </div>
    </div>
  )
}

async function fetchDataWithDelay() {
  const startTime = Date.now()

  // Simulate a delay for database or API call
  await new Promise((resolve) => setTimeout(resolve, 300))

  const endTime = Date.now()

  return {
    timestamp: new Date().toISOString(),
    id: Math.random().toString(36).substring(2, 15),
    processingTime: endTime - startTime,
  }
}

