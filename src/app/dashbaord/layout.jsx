import Aside from "@/component/Aside";

export default function DashboardLayout({ children, }) {
    return (
        <section className="flex">
            {/* <Aside /> */}
            <h2 className="border">Aside</h2>
            <div className="flex-1 p-4">
                {children}
            </div>
        </section>
    )
}