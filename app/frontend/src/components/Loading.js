export default function Loading() {
  return (
    <div className="flex flex-wrap justify-around my-32">
      <div className="flex items-center justify-center w-56 h-56">
        <div className="px-16 py-4 text-lg font-black leading-none text-center text-blue-950 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
      </div>
    </div>
  )
}