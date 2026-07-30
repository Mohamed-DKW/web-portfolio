import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { MailIcon } from "lucide-react";

type FooterProps = {
  language?: "es" | "en";
};

export default function Footer({ language = "es" }: FooterProps) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTime(
        date.toLocaleTimeString(language === "es" ? "es-ES" : "en-US", {
          hour12: language === "en",
          hour: "numeric",
          minute: "numeric",
        }),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [language]);

  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="container mx-auto flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
        <span className="flex flex-col gap-3 md:flex-row md:items-center md:space-x-4">
          <p className="text-xs text-muted-foreground">
            {language === "es"
              ? "Desarrollado con Next.js, Tailwind CSS y Framer Motion."
              : "Built with Next.js, Tailwind CSS and Framer Motion."}
          </p>
          {time && <p className="text-xs text-muted-foreground">{time}</p>}
        </span>
        <Link
          href="mailto:mdukurayw@gmail.com"
          passHref
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button variant={"outline"}>
            <MailIcon className="h-4 w-4 md:mr-2" />
            <span className="hidden md:flex">mdukurayw@gmail.com</span>
          </Button>
        </Link>
      </div>
      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
    </footer>
  );
}
