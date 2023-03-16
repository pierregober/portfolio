import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
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
                I’ve loved tech since a young age. I remember the first time I
                got a computer. My grandma gave us a computer with a green
                monochrome screen and a 5.25-inch floppy drive. I was 5 years
                old. I spent hours playing with it, learning how to use it, and
                eventually learning to type on it. Later in high school I
                learned how to solder and how to mod and repair my own custom
                game consoles. I modded PSPs and sold them online on ebay. I’ve
                probably gone through 25 or so PSPs in high school alone. And
                for me I could never even afford one if I didn’t create my own
                job modding them.
              </p>
              <p>
                After highschool I went to the United States Marine Corps. I
                served for 4 years as a field wireman for the infantry unit 2nd
                Battalion 5th Marines. I learned a lot of things that shaped me
                to the man I am today. I learned how to be a leader, how to be a
                team player, how to work exceptionally well in high pressure
                situations, and more importantly how to be a problem solver.
              </p>
              <p>
                I transferred my skills learned in the military and applied them
                to coding. I have also been very fortunate to have worked in
                government, startup and bit tech settings. That has allowed me
                to have a unique perspective on how to tackle issues.
              </p>
              <p>
                Today, I’m the founder of CleverlyDone, a software development
                company that helps your clients build the future of tech. We
                specialize in building custom software solutions for
                organizations that are looking to make a difference in the
                world.
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
