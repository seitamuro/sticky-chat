import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Layout(props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="stylesheet" href="/bootstrap.min.css"></link>
            </Head>

            <Header header={props.header} />

            <div className="row">
                {props.children}
            </div>

            <Footer footer="copyright@inuha" />
        </div>
    )
}