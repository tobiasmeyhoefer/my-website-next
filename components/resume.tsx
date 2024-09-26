'use client'

import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

interface ResumeData {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  about: string;
  experience: {
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
  }[];
  skills: { name: string }[];
}

interface MotivationLetterData {
  recipient: string;
  company: string;
  address: string;
  greeting: string;
  paragraphs: string[];
  closing: string;
}

const resumeData: ResumeData = {
  name: "Max Mustermann",
  title: "Softwareentwickler",
  contact: {
    email: "max.mustermann@example.com",
    phone: "+49 123 456789",
    location: "Berlin, Deutschland"
  },
  about: "Erfahrener Softwareentwickler mit Schwerpunkt auf Web-Technologien und einer Leidenschaft für die Erstellung effizienter, skalierbarer Anwendungen.",
  experience: [
    {
      title: "Senior Softwareentwickler",
      company: "TechCorp GmbH",
      period: "2018 - Heute",
      responsibilities: [
        "Entwicklung und Wartung von Unternehmensanwendungen",
        "Leitung eines Teams von 5 Entwicklern",
        "Implementierung von CI/CD-Pipelines"
      ]
    },
    {
      title: "Softwareentwickler",
      company: "WebSolutions AG",
      period: "2015 - 2018",
      responsibilities: [
        "Entwicklung von responsiven Webapplikationen",
        "Optimierung der Datenbankabfragen"
      ]
    }
  ],
  education: [
    {
      degree: "M.Sc. Informatik",
      institution: "Technische Universität Berlin",
      period: "2013 - 2015"
    }
  ],
  skills: [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Node.js" },
    { name: "Next.js" },
    { name: "SQL" },
    { name: "Git" },
    { name: "Docker" }
  ]
}

const motivationLetterData: MotivationLetterData = {
  recipient: "Frau Schmidt",
  company: "InnovaTech GmbH",
  address: "Musterstraße 123, 12345 Berlin",
  greeting: "Sehr geehrte Frau Schmidt,",
  paragraphs: [
    "mit großem Interesse habe ich Ihre Stellenausschreibung für die Position als Senior Softwareentwickler gelesen. Als erfahrener Entwickler mit umfassender Expertise in modernen Webtechnologien bin ich überzeugt, dass meine Fähigkeiten und mein Enthusiasmus für innovative Lösungen eine wertvolle Bereicherung für Ihr Team darstellen würden.",
    "In meiner aktuellen Position bei TechCorp GmbH habe ich erfolgreich komplexe Unternehmensanwendungen entwickelt und ein Team von Entwicklern geleitet. Meine Erfahrung in der Implementierung von CI/CD-Pipelines und der Optimierung von Entwicklungsprozessen hat zu einer signifikanten Steigerung der Produktivität und Codequalität geführt.",
    "Besonders beeindruckt bin ich von InnovaTechs Engagement für zukunftsweisende Technologien und Ihre Beiträge zur Open-Source-Community. Ich sehe in Ihrem Unternehmen die ideale Umgebung, um meine Fähigkeiten weiter auszubauen und gleichzeitig einen bedeutenden Beitrag zu Ihren innovativen Projekten zu leisten.",
    "Ich würde mich sehr freuen, in einem persönlichen Gespräch mehr über die Position und Ihre Erwartungen zu erfahren. Vielen Dank für Ihre Zeit und Berücksichtigung meiner Bewerbung."
  ],
  closing: "Mit freundlichen Grüßen,\nMax Mustermann"
}

const ResumeContent: React.FC<{ data: ResumeData }> = ({ data }) => (
  <Card className="h-full overflow-auto">
    <CardHeader className="flex flex-row items-center gap-4">
      <Avatar className="w-20 h-20">
        <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Profilbild" />
        <AvatarFallback>{data.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div>
        <CardTitle className="text-2xl">{data.name}</CardTitle>
        <p className="text-muted-foreground">{data.title}</p>
      </div>
    </CardHeader>
    <CardContent className="space-y-6">
      <section>
        <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
        <p>Email: {data.contact.email}</p>
        <p>Telefon: {data.contact.phone}</p>
        <p>Ort: {data.contact.location}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Über mich</h2>
        <p>{data.about}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Berufserfahrung</h2>
        {data.experience.map((exp, index) => (
          <Card key={index} className="mb-4">
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{exp.company} | {exp.period}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Ausbildung</h2>
        {data.education.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{edu.degree}</CardTitle>
              <p className="text-sm text-muted-foreground">{edu.institution} | {edu.period}</p>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Fähigkeiten</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <Badge key={index}>{skill.name}</Badge>
          ))}
        </div>
      </section>
    </CardContent>
  </Card>
)

const MotivationLetter: React.FC<{ data: MotivationLetterData }> = ({ data }) => (
  <Card className="h-full overflow-auto">
    <CardContent className="space-y-6 p-6">
      <div className="text-right mb-8">
        <p>{resumeData.name}</p>
        <p>{resumeData.contact.email}</p>
        <p>{resumeData.contact.phone}</p>
        <p>{resumeData.contact.location}</p>
      </div>
      <div className="mb-8">
        <p>{data.recipient}</p>
        <p>{data.company}</p>
        <p>{data.address}</p>
      </div>
      <p>{data.greeting}</p>
      {data.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <p className="whitespace-pre-line">{data.closing}</p>
    </CardContent>
  </Card>
)

const ResumeAndLetter: React.FC = () => {
  const resumeRef = useRef<HTMLDivElement>(null)
  const letterRef = useRef<HTMLDivElement>(null)

  const handlePrintResume = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: 'Lebenslauf_Max_Mustermann',
  })

  const handlePrintLetter = useReactToPrint({
    content: () => letterRef.current,
    documentTitle: 'Motivationsschreiben_Max_Mustermann',
  })

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={handlePrintResume} className="w-full sm:w-auto">
          <Download className="mr-2 h-4 w-4" /> Lebenslauf als PDF
        </Button>
        <Button onClick={handlePrintLetter} className="w-full sm:w-auto">
          <Download className="mr-2 h-4 w-4" /> Motivationsschreiben als PDF
        </Button>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div ref={letterRef} className="w-full lg:w-1/2 h-[297mm] bg-white">
          <MotivationLetter data={motivationLetterData} />
        </div>
        <div ref={resumeRef} className="w-full lg:w-1/2 h-[297mm] bg-white">
          <ResumeContent data={resumeData} />
        </div>
      </div>
    </div>
  )
}

export default ResumeAndLetter