import NavBar from "@/components/NavBar"
const items=[
  {title:"Front page",url:"/explore"},
  {title:"Job board",url:"/explore/job-board"},
  {title:"Activity",url:"/explore/activity"},
  {title:"Gift shop",url:"/explore/gift-shop"},
  {title:"Pricing",url:"/explore/pricing"},
  {title:"About",url:"/explore/about"},
  
]

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>
    <NavBar title={items} url="/explore"  />
    <div className="flex flex-1">
      <main className="flex-1 overflow-auto">
        {children}
        <span className="hidden" suppressHydrationWarning>{new Date().toLocaleTimeString()}</span>
      </main>
    </div>
  </div>
}