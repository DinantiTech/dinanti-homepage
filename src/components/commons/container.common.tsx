export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-full mx-auto max-w-[1024px] sm:px-0 px-4">
            { children }
        </div>
    )
}