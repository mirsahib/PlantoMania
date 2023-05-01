import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import Script from "next/script";
config.autoAddCss = false; 


export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js" strategy="beforeInteractive"/>
		</>
	);
}
