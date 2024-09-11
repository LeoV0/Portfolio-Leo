/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Code } from "./Code";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";;
import Link from "next/link";
import { ReactIcon } from "./icons/ReactIcon";



export const Hero = () => {
    return <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full flex flex-col gap-2">
            <h2 className="font-caption text-5xl font-bold text-primary">Léo Gousset</h2>
            <h3 className="text-3xl font-caption">
                Junior Developper Front-End
            </h3>
            <p className="text-base">
                I love creating new{" "} 
                <Link href="https://github.com/leov0">
                <Code className="inline-flex items-center gap-1"> <GithubIcon size={16} className="inline"/>Projects</Code>
                </Link>
                , currently working on {" "}
                <Code className="inline-flex items-center gap-1"> <ReactIcon size={16} className="inline"/>React</Code> . I'm living in
                
                <Code className="inline-flex items-center gap-1"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/langfr-225px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png" style={{width: 16, height: "auto"}} alt="flag france" />France</Code>.
            </p>
        </div>
        <div className="flex-[2] max-md:m-auto ml-auto">
            <img src="https://avatars.githubusercontent.com/u/90071559?v=4" className="w-full h-auto max-w-xs rounded-full max-md:w-56" alt="leo's picture"/>
        </div>
    </Section>
}