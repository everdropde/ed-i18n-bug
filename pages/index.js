import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <h1>Please navigate to "/test/xxx"</h1>
      <h2>These two links/contents should be prebuild:</h2>
      <ul>
        <li>
          <Link locale="en" href="en/test/prebuild">
            <a>ssg build EN Version - changes locale to en</a>
          </Link>
        </li>
        <li>
          <Link locale="de" href="de/test/prebuild">
            <a>ssg build DE Version - changes locale to de</a>
          </Link>
        </li>
      </ul>
      <h2>These link/content should get generated if hitting the page the first time:</h2>
      <ul>
        <li>
          <Link href="test/prebuild/random-stuff">
            <a>I am a randrom route the triggers the catch all page text/[[...slug]] - does not change current locale</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
