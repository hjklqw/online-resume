import { Sample } from './sample'

export const PortfolioPage = () => {
  return (
    <>
      <Sample
        name="Bakery sample (July 2023)"
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
              <b>Technologies:</b> React, Next.js, Typescript, SASS, Zod
              <br />
              <b>Integrations:</b> Email (SendGrid: Mailing list subscription,
              contact form)
            </p>
          </>
        }
      />

      <Sample
        name="Small-business e-commerce sample (August 2024)"
        link="https://shop.michellepoon.ca/"
        githubLink="https://github.com/hjklqw/sample-shop"
        imageSrc="small-ecommerce.png"
        description={
          <>
            <p>
              A clone of a live, low traffic, small-business e-commerce site
              that has taken and fulfilled real orders! Integrated with Stripe
              as its payment processor, but handles all product info in its DB
              for maximum customization capabilities.
            </p>
            <p>
              <b>Technologies:</b> React, Next.js, Typescript, SASS, MongoDB,
              Jotai
              <br />
              <b>Integrations:</b> Stripe, EmailJS, Google Analytics, Mailchimp
            </p>
          </>
        }
      />

      <Sample
        name="Large e-commerce sample"
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
