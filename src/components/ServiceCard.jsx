/* eslint-disable no-unused-vars */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ScrollReveal from "@/components/ScrollReveal.jsx"
import { Icon } from "lucide-react"

export function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <ScrollReveal delay={index * 100}>
      <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-card">
        <CardHeader className="flex flex-row items-center gap-4 pb-4">
          <div className="p-3 rounded-md bg-primary/10 text-primary">
            <Icon className="h-8 w-8" />
          </div>
          <CardTitle className="text-xl font-semibold text-foreground">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </ScrollReveal>
  )
}
