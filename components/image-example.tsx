import Image from "next/image"

export function ImageExample() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-semibold">Image Example</h2>

      {/* Using Next.js Image component (recommended) */}
      <div className="border border-gray-200 rounded-md p-2">
        <h3 className="text-sm font-medium mb-2">Next.js Image Component:</h3>
        <Image
          src="/images/your-profile-photo.jpg"
          alt="Profile Photo"
          width={200}
          height={200}
          className="rounded-md"
        />
        <p className="text-xs text-gray-500 mt-1">Replace with your actual image path</p>
      </div>

      {/* Using standard HTML img tag */}
      <div className="border border-gray-200 rounded-md p-2">
        <h3 className="text-sm font-medium mb-2">Standard HTML img tag:</h3>
        <img src="/images/project-screenshot.png" alt="Project Screenshot" className="w-full max-w-md rounded-md" />
        <p className="text-xs text-gray-500 mt-1">Replace with your actual image path</p>
      </div>
    </div>
  )
}
