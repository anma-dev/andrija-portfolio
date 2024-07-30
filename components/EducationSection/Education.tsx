import React from 'react'

interface EducationProps {
    title: string
    university: string
    img?: string
    degree?: string
    description: string
}

function Education({
    title,
    university,
    img,
    degree,
    description,
}: EducationProps) {
    return (
        <figure className="rounded-2xl bg-background shadow-lg ring-1 ring-primary flex flex-col text-base lg:text-lg">
            <blockquote className="flex gap-3 items-center p-6 font-semibold tracking-tight flex-1 justify-center">
                {degree && (
                    <img
                        loading="lazy"
                        className="h-10 w-10 flex-none rounded-full bg-gray-50"
                        src={degree}
                        alt={degree}
                    />
                )}
                <span>{`“${title}”`}</span>
                <div>{description}</div>
            </blockquote>
            <figcaption className="flex items-center gap-x-4 gap-y-4 px-6 py-4">
                {img && (
                    <img
                        loading="lazy"
                        className="h-10 w-10 flex-none rounded-full bg-gray-50"
                        src={img}
                        alt={university}
                    />
                )}
                <div className="flex-auto">
                    <div className="font-semibold">{university}</div>
                </div>
            </figcaption>
        </figure>
    )
}

export default Education
