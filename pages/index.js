import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <h1>Please navigate to "/test/xxx"</h1>
      These two links should be prebuild:
      <li>
        <Link href="/en/test/prebuild">
          <a>EN Version</a>
        </Link>
      </li>
      <li>
        <Link href="/de/test/prebuild">
          <a>DE Version</a>
        </Link>
      </li>
      <li>
        <Link href="/de/test/prebuild/random-stuff">
          <a>This should not translate anything (irrespective of your locale)</a>
        </Link>
      </li>
    </div>
  )
}

export default Home
