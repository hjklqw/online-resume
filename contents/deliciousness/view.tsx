import Image from 'next/image'

import styles from './styles.module.scss'

import { ingredients, instructions } from './data'

export const DeliciousnessPage = () => (
  <>
    <div className={styles.imageContainer}>
      <Image
        src="https://images.squarespace-cdn.com/content/v1/5ac261cf71069968df1e61a9/fb76429d-0eb4-420e-b013-96bc1c568570/peach+matcha+latte"
        alt="Not my photo"
        width={758}
        height={1137}
        layout="responsive"
      />
      <p>(I ran out of milk so please enjoy this photo from Google instead)</p>
    </div>

    <section className={styles.section}>
      <h2>Ingredients</h2>
      <ul className={styles.ingredients}>
        {ingredients.map((ingredient, i) => (
          <li key={i}>
            <div>
              <span>{ingredient.amount}</span>
              <span>{ingredient.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>

    <section className={styles.section}>
      <h2>Instructions</h2>
      <ol>
        {instructions.map((instruction, i) => (
          <li key={i}>{instruction}</li>
        ))}
      </ol>
    </section>
  </>
)
