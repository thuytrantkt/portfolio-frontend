import Link from "next/link";

import { ThemeToggle } from "@/components/demo/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";

export default function DemoPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-10 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">FE-02 component demo</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight">
            shadcn/ui primitives
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Portfolio building blocks installed for FE-03. Reuse these in
            sections and layout components.
          </p>
        </div>
        <ThemeToggle />
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      <Separator className="my-8" />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Badges</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>TypeScript</Badge>
          <Badge variant="secondary">Next.js</Badge>
          <Badge variant="outline">FastAPI</Badge>
          <Badge variant="destructive">Deprecated</Badge>
        </div>
      </section>

      <Separator className="my-8" />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Project card</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio v2</CardTitle>
              <CardDescription>
                Next.js + FastAPI rebuild with RTK Query.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                View project
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Loading state</CardTitle>
              <CardDescription>Skeleton placeholder for FE-04.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8" />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Contact form shell</h2>
        <Card>
          <CardHeader>
            <CardTitle>Get in touch</CardTitle>
            <CardDescription>
              Form markup only — submit wiring comes in FE-04.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="demo-name">Name</Label>
              <Input id="demo-name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="demo-email">Email</Label>
              <Input
                id="demo-email"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="demo-message">Message</Label>
              <Textarea
                id="demo-message"
                placeholder="Tell me about your project..."
                rows={4}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="button">Send message</Button>
          </CardFooter>
        </Card>
      </section>

      <p className="mt-10 text-sm text-muted-foreground">
        <Link href="/" className="underline-offset-4 hover:underline">
          Back to home
        </Link>
      </p>
    </div>
  );
}
