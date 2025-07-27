import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Code, Globe, Rocket, Shield, Users, Zap, Star } from "lucide-react"
import Link from "next/link"


export default function TechCompanyWebsite() {
  return (

    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center trust-gradient animate-fade-in">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">

            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Build the Future with
                <span className="text-primary"> A&T Tech Services</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
                Accelerate your development with our cutting-edge platform. Deploy faster, scale effortlessly, and
                innovate without limits.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={"#contact"}>
                <Button size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
                  Contact Us
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent hover:bg-muted hover:text-primary">
                <Link href="#about">
                  About Us
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Powerful Features for Modern Development
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
              Everything you need to build, deploy, and scale your applications with confidence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className=" border-2 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="flex size-12 items-center justify-center rounded-lg bg-blue-100">
                  <Zap className="size-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-700">Lightning Fast</CardTitle>
                <CardDescription>
                  Deploy your applications in seconds with our optimized infrastructure and global CDN.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className=" border-2 hover:border-green-600/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="flex size-12 items-center justify-center rounded-lg bg-green-100">
                  <Shield className="size-6 text-green-600" />
                </div>
                <CardTitle className="text-green-700">Enterprise Security</CardTitle>
                <CardDescription>
                  Bank-level security with end-to-end encryption, compliance certifications, and advanced monitoring.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-600/50  transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="flex size-12 items-center justify-center rounded-lg bg-purple-100">
                  <Globe className="size-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-700">Global Scale</CardTitle>
                <CardDescription>
                  Automatically scale to millions of users with our distributed infrastructure across 6 continents.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-green-600/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="flex size-12 items-center justify-center rounded-lg bg-green-100">
                  <Code className="size-6 text-green-600" />
                </div>
                <CardTitle className="text-green-700">Developer First</CardTitle>
                <CardDescription>
                  Intuitive APIs, comprehensive documentation, and tools that developers actually want to use.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-600/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="flex size-12 items-center justify-center rounded-lg bg-purple-100">
                  <Rocket className="size-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-700">Continuous Deployment</CardTitle>
                <CardDescription>
                  Automated CI/CD pipelines with zero-downtime deployments and instant rollbacks.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="size-6 text-primary" />
                </div>
                <CardTitle>Team Collaboration</CardTitle>
                <CardDescription>
                  Built-in collaboration tools, real-time editing, and seamless integration with your workflow.
                </CardDescription>
              </CardHeader>
            </Card>


          </div>
        </div>
      </section>

      {/* About A&T Tech Services Section */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          {/* Company Overview */}
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="text-primary border-primary">
              About A&T Tech Services
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Leading Technology Solutions Provider
            </h2>
            <p className="mx-auto max-w-[800px] text-muted-foreground text-lg">
              A&T Tech Services is a premier technology company specializing in innovative software solutions, digital
              transformation, and cutting-edge development services. We empower businesses to thrive in the digital
              age through our expertise and commitment to excellence.
            </p>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex size-16 items-center justify-center rounded-full bg-blue-100 mx-auto mb-4">
                  <Rocket className="size-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-700 text-xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To deliver innovative technology solutions that drive business growth and digital transformation,
                  helping our clients stay ahead in an ever-evolving digital landscape.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex size-16 items-center justify-center rounded-full bg-green-100 mx-auto mb-4">
                  <Globe className="size-8 text-green-600" />
                </div>
                <CardTitle className="text-green-700 text-xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the global leader in technology services, recognized for our innovation, reliability, and
                  commitment to creating solutions that make a meaningful impact on businesses worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex size-16 items-center justify-center rounded-full bg-purple-100 mx-auto mb-4">
                  <Shield className="size-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-700 text-xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Excellence, integrity, innovation, and customer-centricity guide everything we do. We believe in
                  building lasting partnerships through trust, transparency, and exceptional service.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Company Stats */}
          <div className="bg-muted/50 rounded-lg p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">A&T Tech Services by the Numbers</h3>
              <p className="text-muted-foreground">Our track record speaks for itself</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Services Overview */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">What We Do</h3>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                We offer comprehensive technology services to help businesses succeed in the digital world
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className=" border-2 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-blue-100">
                    <Zap className="size-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-700">Custom Software Development</CardTitle>
                  <CardDescription>
                    Tailored software solutions built to meet your specific business requirements and goals.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className=" border-2 hover:border-green-600/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-green-100">
                    <Globe className="size-5 text-green-600" />
                  </div>
                  <CardTitle className="text-green-700">Web Development</CardTitle>
                  <CardDescription>
                    Modern, responsive websites and web applications that deliver exceptional user experiences.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className=" border-2 hover:border-purple-600/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-purple-100">
                    <Shield className="size-5 text-purple-600" />
                  </div>
                  <CardTitle className="text-purple-700">Cloud Solutions</CardTitle>
                  <CardDescription>
                    Scalable cloud infrastructure and migration services to optimize your business operations.                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className=" border-2 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-blue-100">
                    <Users className="size-5 text-blue-600" />                  </div>
                  <CardTitle className="text-blue-700">IT Consulting</CardTitle>
                  <CardDescription>  Strategic technology consulting to help you make informed decisions and optimize your IT
                    infrastructure.                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className=" border-2 hover:border-green-600/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-green-100">
                    <Zap className="size-5 text-green-600" />
                  </div>
                  <CardTitle className="text-green-700">Digital Transformation</CardTitle>
                  <CardDescription>
                    Complete digital transformation services to modernize your business processes and systems.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className=" border-2 hover:border-purple-600/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-purple-100">
                    <Rocket className="size-5 text-purple-600" />
                  </div>
                  <CardTitle className="text-purple-700">Technical Support</CardTitle>
                  <CardDescription>
                    24/7 technical support and maintenance services to ensure your systems run smoothly.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Why Choose A&T Tech Services?</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="flex size-12 items-center justify-center rounded-full bg-blue-100 mx-auto mb-4">
                  <CheckCircle className="size-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Proven Expertise</h4>
                <p className="text-sm text-muted-foreground">
                  Years of experience delivering successful technology solutions across various industries.
                </p>
              </div>

              <div className="text-center">
                <div className="flex size-12 items-center justify-center rounded-full bg-green-100 mx-auto mb-4">
                  <Users className="size-6 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Dedicated Team</h4>
                <p className="text-sm text-muted-foreground">
                  Skilled professionals committed to delivering excellence in every project we undertake.
                </p>
              </div>

              <div className="text-center">
                <div className="flex size-12 items-center justify-center rounded-full bg-purple-100 mx-auto mb-4">
                  <Zap className="size-6 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">Cutting-Edge Technology</h4>
                <p className="text-sm text-muted-foreground">
                  We stay ahead of technology trends to provide you with the most innovative solutions.
                </p>
              </div>

              <div className="text-center">
                <div className="flex size-12 items-center justify-center rounded-full bg-blue-100 mx-auto mb-4">
                  <Shield className="size-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Quality Assurance</h4>
                <p className="text-sm text-muted-foreground">
                  Rigorous testing and quality control processes ensure reliable, high-performance solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Customers Say</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
              Don't just take our word for it. Here's what industry leaders have to say about TechFlow.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-green-500 text-green-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "TechFlow has revolutionized our deployment process. What used to take hours now takes minutes."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium">SJ</span>
                  </div>
                  <div>
                    <div className="font-medium">Sarah Johnson</div>
                    <div className="text-sm text-muted-foreground">CTO, InnovateCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-green-500 text-green-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The developer experience is unmatched. Our team productivity has increased by 40%."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium">MC</span>
                  </div>
                  <div>
                    <div className="font-medium">Mike Chen</div>
                    <div className="text-sm text-muted-foreground">Lead Developer, StartupXYZ</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-green-500 text-green-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Scaling to millions of users was seamless. TechFlow handled everything automatically."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium">AR</span>
                  </div>
                  <div>
                    <div className="font-medium">Alex Rodriguez</div>
                    <div className="text-sm text-muted-foreground">VP Engineering, TechGiant</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      {/* <section className="w-full py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <h3 className="text-2xl font-bold text-muted-foreground">Trusted by Industry Leaders</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2 text-lg font-semibold">
                <div className="size-8 bg-blue-100 rounded"></div>
                <span>TechCorp</span>
              </div>
              <div className="flex items-center space-x-2 text-lg font-semibold">
                <div className="size-8 bg-green-100 rounded"></div>
                <span>InnovateLab</span>
              </div>
              <div className="flex items-center space-x-2 text-lg font-semibold">
                <div className="size-8 bg-purple-100 rounded"></div>
                <span>FutureScale</span>
              </div>
              <div className="flex items-center space-x-2 text-lg font-semibold">
                <div className="size-8 bg-blue-100 rounded"></div>
                <span>CloudFirst</span>
              </div>
            </div>
            <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="size-4 text-green-600" />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="size-4 text-green-600" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="size-4 text-green-600" />
                <span>ISO 27001</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section
        id="contact"
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-blue-700 text-white"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in Touch with A&T Tech Services
              </h2>
              <p className="text-white/80 text-lg">
                We'd love to hear from you! Whether you have a question about our services, pricing, or anything else —
                our team is ready to answer all your questions.
              </p>
            </div>

            <div className="w-full max-w-md space-y-6">
              {/* Contact Info */}
              <div className="space-y-2 text-sm text-white/80">
                <p>
                  📧 Email:{" "}
                  <a
                    href="mailto:contact@attechservices.com"
                    className="underline hover:text-white"
                  >
                    contact@attechservices.com
                  </a>
                </p>
                <p>
                  📞 Phone:{" "}
                  <a
                    href="tel:+1234567890"
                    className="underline hover:text-white"
                  >
                    +1 (234) 567-890
                  </a>
                </p>
              </div>

              {/* Contact Form */}
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background text-foreground rounded px-4 py-2 w-full"
                />
                <Button
                  variant="secondary"
                  size="default"
                  className="hover:scale-105 transition-transform"
                >
                  Send Message
                </Button>
              </div>
              <p className="text-sm text-white/60">We typically respond within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
