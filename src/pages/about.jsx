import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/me_and_doggo.PNG'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Pierre Gober</title>
        <meta
          name="description"
          content="I’m Pierre. I live in Los Angeles, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Pierre Gober. I live in Los Angeles, where I code the future
              of tech.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Ever since I was a child, I&rsquo;ve had a deep passion for
                technology. I still fondly recall the first computer I ever laid
                hands on: a gift from my grandma, it featured a green monochrome
                screen. At just 5 years old, I was captivated. I&rsquo;d spend
                countless hours exploring its functionalities and eventually
                teaching myself to type. As the years went by, my enthusiasm for
                tech only grew. By high school, I was not just a user but a
                modifier. I learned how to solder, which allowed me to modify
                and repair custom game consoles. The PSP became my specialty. I
                modded and sold them on eBay, cycling through over 25 of them
                during my high school years. Without the profits from my savvy
                side hustle, purchasing a PSP for myself would have been just
                out of my grasp.
              </p>
              <p>
                After high school, I proudly served in the United States Marine
                Corps for four years, specifically as a field wireman for the
                infantry unit 2nd Battalion, 5th Marines. During this time, I
                faced challenges that honed my leadership, teamwork, and
                problem-solving abilities, especially under high-pressure
                situations. Through various deployments and training exercises,
                I mastered the art of adaptability, always finding ways to
                overcome unexpected challenges &mdash; a skill that I&apos;ve
                carried with me and applied in every facet of my life since
                then.
              </p>
              <p>
                Upon concluding my service, I found that the skills and
                discipline I acquired in the Marines translated seamlessly into
                the world of coding. I&apos;ve been fortunate to work across
                diverse sectors - from government roles to startups and big tech
                companies. These experiences have equipped me with a unique
                perspective on addressing challenges.
              </p>
              <p>
                Today, I proudly lead CleverlyDone, a software development
                company with a mission. We specialize in crafting custom
                software solutions for organizations poised to make a
                significant impact in the world.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://www.instagram.com/pierregober/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://www.github.com/pierregober"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/pierregober"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:pierre@cleverlydone.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                pierre@cleverlydone.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
