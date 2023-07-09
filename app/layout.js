import Nav from "@/components/Nav"

import "@/styles/globals.css"

export const metadata = {
  title: 'Semester Management system ',
  description: 'this is one of the semester management system',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
<div className="container">

        <Nav/>
        {children}
</div>
 
      </body>
    </html>
  )
}
