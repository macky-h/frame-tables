import HEADER from '../components/header'
import FOOTER from '../components/footer'

const DefaultLayout = props => (
  <div>
    <HEADER />
    <div>{props.children}</div>
    <FOOTER />
  </div>
)

export default DefaultLayout