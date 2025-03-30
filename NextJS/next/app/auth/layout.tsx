import { Navbar } from "@/components/Navbar";

export default function AuthLayout({children:children}:{children:React.ReactNode}) {
 return(
    <div>
        <Navbar/>
        {children}
    </div>
 )
}