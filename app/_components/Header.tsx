import { Section } from "./Section"
import { buttonVariants }  from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Header = () => {
    return(
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">leo.com</h1>
                <div className="flex-1"/>
                <ul className="flex items-center gap-2">
                    <Link 
                    href="https://github.com/leov0"
                    className={cn(buttonVariants({ variant: "outline"}), "size-10 p-0")}>
                        <GithubIcon size={20} className="text-foreground"/>
                    </Link>

                    <Link 
                    href="https://www.linkedin.com/in/l%C3%A9o-gousset/"
                    className={cn(buttonVariants({ variant: "outline"}), "size-10 p-0")}>
                        <LinkedinIcon size={20} className="text-foreground"/>
                    </Link>
                </ul>
            </Section>
        </header>
    )
}