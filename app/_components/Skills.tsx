/* eslint-disable react/no-unescaped-entities */

import { ReactIcon } from "./icons/ReactIcon";
import { Section } from "./Section"
import { Badge } from "@/components/ui/badge";
import { Code } from "./Code";
import { TailwindLogo } from "./icons/TailwindLogo";
import { OpenAILogo } from "./icons/OpenAILogo";

export const Skills = () => {
    return (
    <Section className="flex flex-col items-start gap-4">
        <Badge variant={"outline"}>Skills</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0"> I love working on... </h2>
        <div className="flex max-md:flex-col gap-4">
              <div className="flex flex-col gap-2 flex-1">

                <ReactIcon size={42} className="animate-spin" style={{animationDuration: "10s",}}/>

              
              <h3 className="text-2xl font-semibold tracking-tight">React</h3>

              <p className="text-sm text-muted-foreground">I'm learning <Code>React</Code>. I also <Code>Next.js</Code> as a backend and frontend framework</p>
          </div>

          <div className="flex flex-col gap-2 flex-1">

                <TailwindLogo size={42}/>

              
              <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>

              <p className="text-sm text-muted-foreground">I can create <u>beautiful</u> application <i>using</i> <Code>Tailwind</Code></p>
          </div>

          <div className="flex flex-col gap-2 flex-1">

                <OpenAILogo size={42}/>

              
              <h3 className="text-2xl font-semibold tracking-tight">AI integration</h3>

              <p className="text-sm text-muted-foreground">I'm an expert of integrating AI in your applications to create a perfect <u>user experience</u></p>
          </div>
        </div>
    </Section>
    )
};