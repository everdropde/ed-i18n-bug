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
//useless comment
const Component = () => {
  const router = useRouter()

  const {
    query: { slug = [] },
    locale,
  } = router
  const { t } = useTranslation('common')

  return (
    <>
      Text depdending on locale should be here - should not be "title": {' '}
      <span style={{ color: 'red', marginTop: '20px' }}>{t('title')}</span>
      <p>The url query params are: {slug}</p>
      <p>Your locale is: {locale}</p>
    </>
  )
}

export default Component
