import i18n from 'i18n-js'

import { ptPT } from './locales/ptPT'

i18n.defaultLocale = 'pt-pt'
i18n.locale = 'pt-pt'
i18n.fallbacks = true
i18n.translations = {
  'pt-pt': ptPT,
}

export { i18n }
