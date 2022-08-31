import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: ['prebuild'] }, locale: 'en' },
      { params: { slug: ['prebuild'] }, locale: 'de' },
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps = async (props) => {
  const { locale = 'de' } = props

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 300,
  }
}
const Component = () => {
  const router = useRouter()

  const {
    query: { slug = [] },
    locale,
  } = router
  const { t } = useTranslation('common')

  const translations = {
    en: 'I am an english translation',
    de: 'Ich bin eine deutsche Übersetzung',
  }

  const color =
    translations[locale] === t('this_is_the_translation_key') ? 'green' : 'red'

  return (
    <>
      <h1>Your locale is: {locale}</h1>
      <p>
        Expected result of the translated string should be:{' '}
        <span style={{ color: color, marginTop: '20px' }}>
          {translations[locale]}
        </span>
      </p>
      <p>
        Observed result based on i18n is:{' '}
        <span style={{ color: color, marginTop: '10px' }}>
          {t('this_is_the_translation_key')}
        </span>
      </p>
      {color === 'green' ? (
        <p style={{ color: 'red', fontSize: '16px', fontWeight: 'bold' }}>
          <b>Attention:</b>
          <br />
          Reload the current page or use browser back and switch a few times
          between locale version.
        </p>
      ) : null}
    </>
  )
}

export default Component
