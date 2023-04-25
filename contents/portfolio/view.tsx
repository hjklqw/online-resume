import { Sample } from './sample'

export const PortfolioPage = () => {
  return (
    <>
      <Sample
        name="Bakery sample"
        link="https://bakery.michellepoon.ca/"
        githubLink="https://github.com/hjklqw/bakery-sample"
        imageSrc="bakery.png"
        description={
          <>
            <p>
              A sample site for a imaginary bakery, perfect for small local
              businesses who want to promote their products without dipping into
              e-commerce just yet.
            </p>
            <p>
              <b>Technologies:</b> React, Next.js (using the app directory),
              Typescript, SASS, Zod
              <br />
              <b>Integrations:</b> Email (SendGrid: Mailing list subscription,
              contact form)
            </p>
          </>
        }
      />

      <Sample
        name="E-Commerce sample"
        link=""
        githubLink=""
        imageSrc="ecommerce.png"
        description={
          <>
            <p>
              A sample e-commerce site for businesses of any size. Built with
              React, Next.js, Typescript, Vanilla Extract, NextAuth, and
              PostgreSQL.
            </p>
            <p>Coming soon!</p>
          </>
        }
      />
    </>
  )
}
