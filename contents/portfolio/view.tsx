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
          <p>
            A sample site for a imaginary bakery, built with React, Next.js
            (using the app directory), Typescript, and SASS.
            <br />
            Note that this is currently in-progress; only the Landing page and
            About page is complete. Links will not work just yet.
          </p>
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
