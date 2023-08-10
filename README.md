# JSGrab

JSGrab is a website javascript code that can be used to collect browser fingerprints and send them to a server using a webhook. The collected data then can be used for tracking users or detecting fraud.

## How it works

JSGrab gets the following from the their browser:

- User agent
- Platform
- Language
- Color depth
- Pixel ratio
- Plugins
- MIME types
- Cookies enabled
- Timezone
- Network information
- Hardware concurrency
- Do not track

This information is then sent to a server using an http post request