import DownloadButton from "@/components/download-button";

export default function DownloadPage() {
  return (
    <div className="flex flex-col items-center justify-center pt-80">
      <h1 className="text-4xl font-bold mb-8">Download Application</h1>
      <DownloadButton />
    </div>
  )
}