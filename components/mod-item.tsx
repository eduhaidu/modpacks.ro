'use client';

interface ModItemProps {
    name: string;
    author: string;
    description: string;
    thumbnailUrl: string;
}

export default function ModItem({ name, description, thumbnailUrl }: ModItemProps) {
    return (
        <div className="flex flex-col items-start rounded-lg border bg-popover p-6">
            <div className="relative w-full rounded-md border">
                <img
                    src={thumbnailUrl}
                    alt="Modpack Thumbnail"
                    className="h-48 w-full rounded-t-md object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100">
                    <button className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-800 shadow hover:bg-white">
                        View Details
                    </button>
                </div>
            </div>
            <h3 className="mt-4 text-lg font-semibold">{name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
                {description}
            </p>
        </div>
    );
}