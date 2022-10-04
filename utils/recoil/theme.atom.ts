import { atom } from 'recoil'
import { persistEffect } from './persist.effect'
import { Theme } from '/assets/theme'

export const themeAtom = atom<string>({
  key: 'theme',
  default: Theme.DEFAULT,
  effects_UNSTABLE: [
    persistEffect({
      storageKey: 'theme',
      valueToString: (value) => value,
      stringToValue: (str) => (str === null ? Theme.DEFAULT : str),
    }),
  ],
})
