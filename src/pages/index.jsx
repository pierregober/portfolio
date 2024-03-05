// Vendor
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// Custom Components
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'

// Logos
import logoLAPathways from '@/images/logos/la-pathways.svg'
import logoHarvard from '@/images/logos/school/harvard.svg'
import logoScrumAlliance from '@/images/logos/scrum-alliance.svg'
import logoPennState from '@/images/logos/school/pennstate.svg'
import logoMicrosoft from '@/images/logos/microsoft.svg'
import logoCleverlyDone from '@/images/logos/cd.svg'
import logoSubject from '@/images/logos/subject.svg'
import logoUSMC from '@/images/logos/usmc.svg'
import logoTechMD from '@/images/logos/techmd.svg'
import logoMCK from '@/images/logos/mck.svg'
import logoAWS from '@/images/logos/aws.svg'
import logoLSGS from '@/images/logos/lsgs.svg'

// Homepage Images
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function GradCap(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 48 48"
    >
      <g>
        <path
          fill="#444444"
          d="M24,43c-7.29,0-13-3.075-13-7V23c0-0.553,0.448-1,1-1h24c0.552,0,1,0.447,1,1v13C37,39.925,31.29,43,24,43z"
        ></path>{' '}
        <path
          fill="#444444"
          d="M44,35c-0.552,0-1-0.447-1-1V19c0-0.553,0.448-1,1-1s1,0.447,1,1v15C45,34.553,44.552,35,44,35z"
        ></path>{' '}
        <path
          fill="#5B5B5B"
          d="M24,31c-0.165,0-0.33-0.041-0.479-0.122l-22-12C1.2,18.703,1,18.366,1,18s0.2-0.703,0.521-0.878l22-12 c0.299-0.162,0.659-0.162,0.958,0l22,12C46.8,17.297,47,17.634,47,18s-0.2,0.703-0.521,0.878l-22,12C24.33,30.959,24.165,31,24,31z"
        ></path>
      </g>
    </svg>
  )
}

function CertIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 48 48"
    >
      <g>
        <path d="M44,7H21a1,1,0,0,0,0,2H44a1,1,0,0,0,0-2Z" fill="#444"></path>{' '}
        <path d="M44,23H21a1,1,0,0,0,0,2H44a1,1,0,0,0,0-2Z" fill="#444"></path>{' '}
        <path d="M44,39H21a1,1,0,0,0,0,2H44a1,1,0,0,0,0-2Z" fill="#444"></path>{' '}
        <rect
          x="3"
          y="2"
          width="12"
          height="12"
          rx="1"
          ry="1"
          fill="#b3b3b3"
        ></rect>{' '}
        <rect
          x="3"
          y="34"
          width="12"
          height="12"
          rx="1"
          ry="1"
          fill="#b3b3b3"
        ></rect>{' '}
        <path
          d="M10.414,24l4.293-4.293a1,1,0,0,0-1.414-1.414L9,22.586,4.707,18.293a1,1,0,0,0-1.414,1.414L7.586,24,3.293,28.293a1,1,0,1,0,1.414,1.414L9,25.414l4.293,4.293a1,1,0,0,0,1.414-1.414Z"
          fill="#47b0ea"
        ></path>
      </g>
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

const schema = yup
  .object({
    email: yup.string().required(),
    message: yup.string().required(),
  })
  .required()

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function Newsletter() {
  const { register, handleSubmit, watch } = useForm({
    resolver: yupResolver(schema),
  })

  const sendMessage = () => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'portfolio-capture',
        email: watch('email'),
        message: watch('message'),
      }).toString(),
    })
      .then(() =>
        alert('Message Sent! Thank you, I will get back to you soon ❤️')
      )
      .catch((error) => alert(error))
  }

  return (
    <form
      name="portfolio-capture"
      data-netlify="true"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      onSubmit={handleSubmit(sendMessage)}
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Hit me up!</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Contact me for permanent, contract opportunities, or just to say hi.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div
          className="mt-6 flex"
          style={{ flexDirection: 'column', gap: '8px' }}
        >
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            name="email"
            {...register('email')}
            required
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
          />
          <textarea
            rows="5"
            type="text"
            name="message"
            placeholder="Say something nice..."
            aria-label="Message content"
            required
            {...register('message')}
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
          />
        </div>
        <Button type="submit" className="flex-none" style={{ width: '100%' }}>
          Send
        </Button>
      </div>
    </form>
  )
}

function Resume() {
  let resume = [
    {
      company: 'CleverlyDone',
      title: 'Owner',
      logo: logoCleverlyDone,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'McKinsey & Company',
      title: 'Software Engineer',
      logo: logoMCK,
      start: '2022',
      end: '2022',
    },
    {
      company: 'Subject',
      title: 'Software Engineer II',
      logo: logoSubject,
      start: '2021',
      end: '2022',
    },
    {
      company: 'Loyal Source Government Services',
      title: 'Software Developer',
      logo: logoLSGS,
      start: '2020',
      end: '2021',
    },
    {
      company: 'City of Los Angeles',
      title: 'Full Stack Software Engineer',
      logo: logoLAPathways,
      start: '2019',
      end: '2020',
    },
    {
      company: 'TechMD',
      title: 'Systems Analyst',
      logo: logoTechMD,
      start: '2017',
      end: '2018',
    },
    {
      company: 'United States Marine Corps',
      title: 'Field Wireman',
      logo: logoUSMC,
      start: '2013',
      end: '2017',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      {/* <a href="Pierre_Gober_Resume.pdf" download>
        <Button variant="secondary" className="group mt-6 w-full">
          Download Resume
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </a> */}
    </div>
  )
}

function School() {
  let school = [
    {
      company: 'Harvard University',
      title: 'ALM in Digital Media Design',
      logo: logoHarvard,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Penn State University',
      title: 'B.S. in Information Sciences and Technology',
      logo: logoPennState,
      start: '2019',
      end: '2021',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <GradCap className="h-6 w-6 flex-none" />
        <span className="ml-3">School</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {school.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Certs() {
  let certs = [
    {
      company: 'Cloud Practitioner',
      title: 'Amazon Web Services',
      logo: logoAWS,
      date: '2021',
    },
    {
      company: '70-480: Programming in HTML5 with JavaScript and CSS3',
      title: 'Microsoft',
      logo: logoMicrosoft,
      date: '2020',
    },
    {
      company: 'Certified Scrum Master',
      title: 'Scrum Alliance',
      logo: logoScrumAlliance,
      date: '2020',
    },
    {
      company: 'Certified Scrum Product Owner',
      title: 'Scrum Alliance',
      logo: logoScrumAlliance,
      date: '2020',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <CertIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Certs</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {certs.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.date}`}
              >
                <time>{role.date}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Pierre Gober - Software Engineer, Marine Corps Veteran, Real Estate
          Enthusiast, Avid Learner
        </title>
        <meta
          name="description"
          content="I’m Pierre, a software engineer and entrepreneur based in Los
          Angeles. I’m the CEO of CleverlyDone. We specialize in building
          custom software solutions for organizations that are looking to make
          a difference in the world. On my free time I enjoy learning about
          real estate and investing."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software Engineer,
            <br />
            Marine Corps Veteran,
            <br />
            Real Estate Enthusiast,
            <br />
            Avid Learner
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Pierre, a software engineer and entrepreneur based in Los
            Angeles. I’m the CEO of CleverlyDone. We specialize in building
            custom software solutions for organizations that are looking to make
            a difference in the world. On my free time I enjoy learning about
            real estate and investing.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://instagram.com/pierregober"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://www.github.com/pierregober"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/pierregober"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <School />
            <Certs />
            <Newsletter />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
