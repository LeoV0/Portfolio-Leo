/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, Bitcoin, BookOpen, CircleHelp, LucideIcon, TicketsPlane } from "lucide-react";
import Link from "next/link";

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className=" p-4 flex flex-col gap-2 w-full">
                    <p className="text-lg text-muted-foreground">Side, fun projects</p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProject
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                description={project.description}
                                url={project.url}
                            />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] w-full flex flex-col gap-4">
                <Card className="p-4 flex-1">
                    <p className="text-lg text-muted-foreground">Work</p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) => (
                            <Work
                                key={index}
                                image={work.image}
                                title={work.title}
                                role={work.role}
                                date={work.date}
                                url={work.url}
                            />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-2">
                <p className="text-lg text-muted-foreground">Contact me</p>

                <ContactCard name="leo.cigale@gmail.com" image="https://avatars.githubusercontent.com/u/90071559?v=4" mediumImage="https://www.cleanfox.io/blog/wp-content/uploads/2021/01/GMAIL-1024x772.png" description="Contact me on Gmail" />

                <ContactCard name="Léo Gousset" image="https://avatars.githubusercontent.com/u/90071559?v=4" mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrIbiofxGclX20CWBDtpmjOcbbuqEJS6PrSQ&s" description="Contact me on Linkedin" />
                </Card>
            </div>
        </Section>
    );
};

const ContactCard = (props: {
    image: string;
    mediumImage: string, 
    name: string;
    description: string;
}) => {
    return(
        <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
            <div className="relative">
                <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain" />
                <img src={props.mediumImage} alt={props.name} className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain" />
            </div>
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                <p className="text-base font-semibold">{props.name}</p>
            </div>

            <p className="text-xs text-muted-foreground">{props.description}</p>
            </div>
                <ArrowUpRight className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" size={16}/>
        </Card>
    )
};

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: CircleHelp,
        title: "Quiz Javascript",
        description: "Quiz of 10 questions on Javascript",
        url: "https://leov0.github.io/Quiz-javascript/"
    },
    {
        Logo: Bitcoin,
        title: "Bitcoin chart",
        description: "Bitcoin chart (January 1, 2020 to March 19, 2023)",
        url: "https://leov0.github.io/Cour-bitcoin/"
    },
    {
        Logo: BookOpen,
        title: "Registration form",
        description: "Registration form with constraints",
        url: "https://leov0.github.io/Formulaire-inscription/"
    },
    {
        Logo: TicketsPlane,
        title: "Discover Kyoto",
        description: "Reproduction of a tourism site",
        url: "https://leov0.github.io/Site-Kyoto/"
    },
];

type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};

const SideProject = (props: SideProjectProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.Logo size={20} />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    );
};

const WORKS: WorkProps[] = [
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Logo_Afpa.jpg",
        title: "Developpeur web",
        role: "Student",
        date: "2022 - 2023",
        url: "/"
    },
    {
        image: "https://appert.paysdelaloire.e-lyco.fr/wp-content/uploads/sites/3/2022/12/3.jpg",
        title: "BTS SNIR",
        role: "Student",
        date: "2021 - 2022",
        url: "/"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7F3R_CMWyPaizCRBtB-7ZDp819ycSQq1bEw&s",
        title: "BAC STI2D",
        role: "Student",
        date: "2020 - 2021",
        url: "/"
    },
];

type WorkProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
};

const Work = (props: WorkProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
                <img src={props.image} alt={props.title} className="w-10 h-10 rounded-md object-contain" />

            <div className="mr-auto">
                <div className="flex items-center gap-2">
                <p className="text-base font-semibold">{props.title}</p>
                </div>
                <p className="text-xs text-muted-foreground">{props.role}</p>
            </div>
                <p className="text-xs text-end text-muted-foreground">{props.date}</p>
                
        </Link>
    );
};