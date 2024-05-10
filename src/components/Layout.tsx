import {Suspense} from "react"
import { Outlet } from "react-router-dom"
import { Container } from "react-bootstrap"

import Header from "./Header"
import Footer from "./Footer"
import Loader from "./Loader"

export default function Layout() {
    return (
        <>
            <Header />
                <main className="p-4">
                    <Suspense fallback={<Loader />}>
                        <Container>
                            <Outlet />
                        </Container>
                    </Suspense>
                </main>
            <Footer />
        </>
    )
}