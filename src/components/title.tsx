export default function Title({ title, desc }: {
  title: string
  desc?: string
}) {
  return (
    <div className="relative isolate overflow-hidden pt-16 mx-auto max-w-7xl py-4 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl text-center">
        {title}
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600 text-center px-8">
        {desc}
      </p>
    </div>
  )
}