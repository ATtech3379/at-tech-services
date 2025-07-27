import Image from 'next/image'
import React from 'react'

function AboutUs() {
    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            {/* <Badge variant="outline">About A&T Tech Services</Badge> */}
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                Trusted by 10,000+ Companies Worldwide
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                Since 2020, we've been helping companies of all sizes build better software faster. From startups to
                                Fortune 500 companies, our platform powers the next generation of digital experiences.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-green-600">99.9%</div>
                                <div className="text-sm text-muted-foreground">Uptime SLA</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-blue-600">10M+</div>
                                <div className="text-sm text-muted-foreground">Deployments</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-purple-600">150+</div>
                                <div className="text-sm text-muted-foreground">Countries</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-green-600">24/7</div>
                                <div className="text-sm text-muted-foreground">Support</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <Image
                            src="/placeholder.svg?height=400&width=600"
                            alt="TechFlow team working"
                            width={600}
                            height={400}
                            className="rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs