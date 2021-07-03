import { MyQRCode } from '../../components/MyQRCode'
import './styles.scss'

export function Code() {
  return (
    <div className="container">
      <MyQRCode value="http://picturesofpeoplescanningqrcodes.tumblr.com/" />
    </div>
  )
}