import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Vercel Compute Models Demo</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        <ComputeCard
          title="Edge Functions"
          description="Run code at the edge, closest to your users"
          link="/edge"
          icon="🌐"
        />
        <ComputeCard
          title="Serverless Functions"
          description="Execute code on-demand in specific regions"
          link="/serverless"
          icon="⚡"
        />
        <ComputeCard
          title="Static Generation"
          description="Pre-render pages at build time for fastest delivery"
          link="/static"
          icon="📄"
        />
      </div>

      <div className="mt-12 p-6 bg-slate-700/30 rounded-lg max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">How Vercel's Compute Works</h2>
        <p className="mb-4">
          When you deploy to Vercel, your application is distributed across Vercel's global infrastructure:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Static assets are cached on Vercel's CDN at the edge</li>
          <li>Edge Functions run at the edge locations closest to users</li>
          <li>Serverless Functions execute in specific regions you configure</li>
        </ul>
        <p className="mt-4">This architecture eliminates the need to manage virtual machines or servers directly.</p>
      </div>
    </div>
  )
}

function ComputeCard({
  title,
  description,
  link,
  icon,
}: {
  title: string
  description: string
  link: string
  icon: string
}) {
  return (
    <Link
      href={link}
      className="flex flex-col p-6 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors border border-slate-600"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-slate-300">{description}</p>
    </Link>
  )
}

