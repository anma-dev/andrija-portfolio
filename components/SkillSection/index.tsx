import skills from '@/configs/skills'
import React from 'react'

function SkillsSection() {
    return (
        <section
            id="skills"
            className="max-w-7xl mx-auto p-10 pb-20"
        >
            <h2 className="text-primary text-5xl md:text-6xl font-semibold mb-12">
                Skills
            </h2>
            <figure className="rounded-2xl bg-background shadow-lg ring-1 ring-primary">
                <div className="flex flex-col-reverserow w-full items-center p-7">
                    <div className="w-full grid grid-cols-3 sm:grid-cols-4  md:grid-cols-5 gap-4 justify-items-center">
                        {skills.map(({ name, icon }, index) => {
                            return (
                                <div
                                    key={index}
                                    className="skill w-20 flex flex-col items-center gap-1 p-2 md:w-24 lg:w-28 rounded-2xl bg-background shadow-lg ring-1 ring-primary"
                                >
                                    <img
                                        src={icon}
                                        alt=""
                                        loading="lazy"
                                        className="w-full aspect-square rounded-full"
                                    />
                                    <p className="text-center text-sm">{name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </figure>
        </section>
    )
}

export default SkillsSection
