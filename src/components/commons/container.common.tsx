export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-full mx-auto max-w-[1024px] lg:px-0 sm:px-6 px-4">
            { children }
        </div>
    )
}