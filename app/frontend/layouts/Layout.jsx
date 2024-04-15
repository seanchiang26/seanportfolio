// import { Link } from "@inertiajs/react";

const Layout = ({children}) => (
    <>
        <div className="min-h-full">
            <nav className="">
            </nav>

            <div>
                {children}
            </div>
        </div>
    </>
)

export default page => <Layout>{page}</Layout>;