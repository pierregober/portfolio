import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Tech() {
  return (
    <>
      <Head>
        <title>Tech Stack - Pierre Gober</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Frontend">
            <Tool title="React">
              A JavaScript library developed by Facebook for building user
              interfaces
            </Tool>
            <Tool title="React Native">
              A JavaScript framework for building native mobile apps.
            </Tool>
            <Tool title="Typescript">
              Provides several advantages in application-building, including the
              option of simpler React components and better JavaScript XML (JSX)
              support for static type validation.
            </Tool>
            <Tool title="Python">
              An interpreted, high-level, general-purpose programming language.
            </Tool>
            <Tool title="HTML">
              The standard markup language for creating web pages and web
            </Tool>
            <Tool title="CSS">
              A style sheet language used for describing the presentation of a
              document written in a markup language like HTML
            </Tool>
            <Tool title="Redux">
              A predictable state container for JavaScript apps
            </Tool>
            <Tool title="SCSS">
              A style sheet language used for describing the presentation of a
              document written in a markup language like HTML but in a more
              powerful way.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Backend">
            <Tool title="Node">
              {` A JavaScript runtime built on Chrome's V8 JavaScript engine.`}
            </Tool>
            <Tool title="Express">
              A minimal and flexible Node.js web application framework that
              provides a robust set of features for web and mobile applications.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Database">
            <Tool title="DynamoDB (NoSQL)">
              A key-value and document database that delivers single-digit
              millisecond performance at any scale.
            </Tool>
            <Tool title="Postgres (SQL)">
              A powerful, open source object-relational database system with
              over 30 years of active development that has earned it a strong
              reputation for reliability, feature robustness, and performance.
            </Tool>
          </ToolsSection>
          <ToolsSection title="DevOps">
            <Tool title="Serverless Framework (FaaS)">
              A free and open-source web framework written using Node.js. It is
              designed to build scalable applications, with a focus on
              serverless, microservices and distributed systems.
            </Tool>
            <Tool title="Docker">
              A set of platform as a service (PaaS) products that use OS-level
              virtualization to deliver software in packages called containers.
            </Tool>
            <Tool title="Kubernetes">
              An open-source system for automating deployment, scaling, and
              management of containerized applications.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Other">
            <Tool title="Git">
              A distributed version-control system for tracking changes in
              source code during software development.
            </Tool>
            <Tool title="Amazon Web Services">
              A comprehensive, evolving cloud computing platform; it provides a
              suite of cloud-computing services that make up an on-demand
              computing platform.
            </Tool>
            <Tool title="Google Cloud Platform">
              A suite of cloud computing services that runs on the same
              infrastructure that Google uses internally for its end-user
              products, such as Google Search and YouTube.
            </Tool>
            <Tool title="Netlify">
              A cloud computing company that offers hosting and serverless
              backend services for static websites.
            </Tool>
            <Tool title="Strapi">
              A free and open-source headless CMS delivering your content
              anywhere you need.
            </Tool>
            <Tool title="Auth0">
              A cloud-based software-as-a-service (SaaS) platform for
              authentication and authorization.
            </Tool>
            <Tool title="Stripe">
              A suite of payment APIs that powers commerce for online businesses
              of all sizes, including fraud prevention, and subscription
              management.
            </Tool>
            <Tool title="Storybook">
              An open source tool for developing UI components in isolation.
            </Tool>
            <Tool title="Jest">
              A delightful JavaScript Testing Framework with a focus on
              simplicity.
            </Tool>
            <Tool title="Testing Library">
              Simple and complete testing utilities that encourage good testing
              practices.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
              I was using an Intel-based 16” MacBook Pro prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it
              through with our various launch simulations.
            </Tool>
            <Tool title="Apple Pro Display XDR (Standard Glass)">
              The only display on the market if you want something HiDPI and
              bigger than 27”. When you’re working at planetary scale, every
              pixel you can get counts.
            </Tool>
            <Tool title="IBM Model M SSK Industrial Keyboard">
              They don’t make keyboards the way they used to. I buy these any
              time I see them go up for sale and keep them in storage in case I
              need parts or need to retire my main.
            </Tool>
            <Tool title="Apple Magic Trackpad">
              Something about all the gestures makes me feel like a wizard with
              special powers. I really like feeling like a wizard with special
              powers.
            </Tool>
            <Tool title="Herman Miller Aeron Chair">
              If I’m going to slouch in the worst ergonomic position imaginable
              all day, I might as well do it in an expensive chair.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code">
              Was using ATOM until it hit the end of support... so this is a
              good alternative.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
