"use client"

export default function TemplateBlogs({ children }: { children: React.ReactNode }) {
    console.log("Bllogggg.......");
    
    return (
        <div className="bg-SECONDARY relative">
            <>{children}</>
        </div>
    )
  }