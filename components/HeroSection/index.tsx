import React from 'react'
import Image from 'next/image'

function HeroSection() {
    return (
        <section
            id="home"
            className="sm:h-screen w-full flex flex-col sm:flex-row items-center px-10  max-w-7xl mx-auto pt-28 gap-8 md:gap-12 lg:gap-16 xl:gap-24"
        >
            <div className="image w-3/4 relative aspect-square">
                <Image
                    src="/photo.jpg"
                    className="w-full object-cover aspect-square rounded-3xl opacity-80"
                    alt=""
                    fill={true}
                    priority={true}
                />
                <div className="gradient absolute w-full h-1/2 bg-gradient-to-t from-background to-transparent bottom-0 left-0 right-0"></div>
            </div>
            <figure className="text w-full rounded-2xl bg-background shadow-lg ring-1 ring-primary">
                <h1 className="text-2xl lg:text-3xl p-4 lg:p-8">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-sans bg-clip-text text-transparent bg-gradient-to-br from-primary  to-accent">
                        Andrija Matic <br />
                    </span>
                </h1>
                <div className="text-sm sm:text-md md:text-base lg:text-lg text-muted font-normal pt-0 lg:pt-0 p-4 lg:p-8">
                    Thanks for taking your time to see my profile.😊
                    <br />
                    An experienced AI and Web Expert.
                    <br /> I have successfully led projects across a variety of
                    industries, including Finance, Healthcare, Automotive,
                    Retail, Manufacturing and E-commerce, resulting in
                    significant improvements in performance, user engagement,
                    and operational efficiency.
                    <br /> My strong analytical skills and commitment to
                    continuous learning and innovation allow me to deliver
                    high-quality, impactful solutions that drive business
                    success.
                    <br />
                    🤝I hope we can connect and cooperate soon.
                </div>
            </figure>
        </section>
    )
}

export default HeroSection
