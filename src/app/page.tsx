import Image from 'next/image';
import Link from 'next/link';
import { Rocket, ShieldCheck, BarChart, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// User can define the web launch URL here
const WEB_LAUNCH_URL = "https://example.com";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background font-body">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-lg">Mid-States Operating Company</span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto flex max-w-7xl flex-col items-center justify-center space-y-8 px-4 text-center md:px-6">
          <div className="w-full max-w-4xl">
            <Card className="overflow-hidden rounded-xl border-0 shadow-2xl shadow-primary/10">
              <CardContent className="p-6">
                <div className="flex flex-col items-center gap-4">
                  <Image
                    src="https://placehold.co/1200x180.png"
                    alt="StatusScout Logo"
                    width={1200}
                    height={180}
                    className="rounded-md"
                    data-ai-hint="logo company"
                  />
                  <Image
                    src="https://placehold.co/1200x1273.png"
                    alt="Cerberus Watchdog Logo"
                    width={1200}
                    height={1273}
                    className="rounded-md"
                    data-ai-hint="logo watchdog"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="pt-8">
            <Button asChild size="lg" className="h-14 transform-gpu px-10 text-lg transition-transform duration-200 hover:scale-105">
              <Link href={WEB_LAUNCH_URL} target="_blank" rel="noopener noreferrer">
                <Rocket className="mr-2 h-6 w-6" />
                Web Launcher
              </Link>
            </Button>
          </div>
          <p className="max-w-[700px] text-muted-foreground md:text-xl pt-8 pb-8">
            Access your HTML 5 web-based StatusScout hub by selecting the Web Launcher button above
          </p>
        </section>

        <section id="features" className="w-full bg-card py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to keep your services online and performing optimally.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 pt-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <Card className="bg-transparent shadow-none border-0">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-headline">Real-time Monitoring</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Keep a constant eye on your application's uptime, performance, and health with live data streams.
                </CardContent>
              </Card>
              <Card className="bg-transparent shadow-none border-0">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Bell className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-headline">Instant Alerts</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Receive immediate notifications via email, SMS, or Slack the moment an issue is detected.
                </CardContent>
              </Card>
              <Card className="bg-transparent shadow-none border-0">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-headline">Detailed Reporting</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Access comprehensive reports and analytics to track performance trends and make data-driven decisions.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-card">
        <div className="container mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 py-6 text-center sm:flex-row md:px-6">
          <p className="text-sm text-muted-foreground">
            © 2022-2025 <Link href="https://www.tradewindcontrols.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Tradewind Controls</Link>. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
