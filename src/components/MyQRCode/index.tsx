import QRCode, { QRCodeProps } from "react-qr-code";

type MyQRCodeProps = QRCodeProps & {
} 

export function MyQRCode({ ...props }: MyQRCodeProps) {
  return (
    <QRCode {...props} />
  )
}
