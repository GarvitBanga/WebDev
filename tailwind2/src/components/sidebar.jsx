export function SidebarClass1(){
    return <div className="flex">
        <div className="hidden w-96 h-screen md:flex bg-red-200 ">Sidebar1</div>
        <div className="bg-green-800 w-full h-screen">Content</div>


    </div>
}

export function SidebarTransition(){
    return <div className="flex">
    <div className="w-0 md:w-96 h-screen bg-red-200 transition-all duration-200">Sidebar1</div>
    <div className="bg-green-800 w-full h-screen">Content</div>
    </div>
}