import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: ['prebuild-en'] }, locale: 'en' },
      { params: { slug: ['prebuild-de'] }, locale: 'de' },
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
  const { q, slug = [] } = router.query
  const { t } = useTranslation('common')

  return (
    <>
      Text depdending on locale should be here - Title:{' '}
      <span style={{ color: 'red', marginTop: '20px' }}>{t('title')}</span>
      <p>The url query params are: {slug}</p>
    </>
  )
}

export default Component
