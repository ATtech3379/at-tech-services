import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function Footer() {
    return (
        <footer className="w-full py-4 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-4 items-center ">
                    <div className="space-y-4 ">
                        <div className="w-full flex items-center justify-center space-x-2">
                            <Image
                                src="/images/logo.png"
                                alt="A&T Tech Services"
                                width={440}
                                height={440}
                                className="h-24 w-auto"
                                priority
                            />
                        </div>

                    </div>

                    <div className="space-y-4">
                        <h4 className="font-medium text-center" >
                            <Link href="#home">
                                Home
                            </Link>
                        </h4>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-medium text-center">
                            <Link href="#contact">
                                Contact Us
                            </Link>
                        </h4>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-medium text-center">
                            <Link href="#about">
                                About Us
                            </Link>
                        </h4>
                    </div>
                </div>

                {/* <div className="mt-12 pt-8 border-t border-muted-foreground/20 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">© 2024 TechFlow. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 sm:mt-0">
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Cookie Policy
                        </Link>
                    </div>
                </div> */}
            </div>
        </footer>
    )
}

export default Footer