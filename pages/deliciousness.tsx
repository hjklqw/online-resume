import type { NextPage } from 'next'

import { PageModel } from '/common/models/page'
import {
  DeliciousnessPage,
  recipeIngredients,
  recipeInstructions,
} from '/contents/deliciousness'

const Deliciousness: NextPage = () => <DeliciousnessPage />

const page = Deliciousness as PageModel<{}>
page.title = 'Iced Peach Matcha Latte'
page.subtitle = 'Deliciousness this site is themed after'
page.description = 'Amazingly delicious recipe'
page.meta = {
  '@type': 'Recipe',
  name: 'Iced Peach Matcha Latte',
  url: process.env.NEXT_PUBLIC_URL,
  email: 'mp.hjkqw@gmail.com',
  image: [
    'https://images.squarespace-cdn.com/content/v1/5ac261cf71069968df1e61a9/fb76429d-0eb4-420e-b013-96bc1c568570/peach+matcha+latte?format=2500w',
  ],
  author: {
    '@type': 'Person',
    name: 'MP',
  },
  prepTime: 'PT2M',
  cookTime: 'PT0M',
  totalTime: 'PT2M',
  recipeIngredient: recipeIngredients.map(
    (ingredient) => `${ingredient.amount} ${ingredient.name}`
  ),
  recipeInstructions: recipeInstructions.map((instruction) => ({
    '@type': 'HowToStep',
    text: instruction,
  })),
}

export default Deliciousness
