import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "./lib/readAll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Head from "next/head";

export default function Home({
	plants,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
    <Head>
      <title>Plantomania | Online Retail Store to Buy Plant</title>
    </Head>
			<div className="flex lg:w-3/4 sm:w-11/12 mx-auto">
				<main className="">
					<section className="">
						<ul className="flex flex-wrap ">
							{plants.map((plant) => {
								return (
									<li
										key={plant.id}
										className="flex flex-col basis-1/4"
									>
										<div className="flex flex-col justify-between m-4 h-1/4">
											<Link href={`plants/${plant.id}`}>
												<div className="flex bg-white p-4 justify-center mb-2">
													<img
														className="scale-50 hover:scale-75 ease-in duration-500"
														src={plant.img}
														alt=""
													/>
												</div>
											</Link>
											<div className="">
												{/* plants description */}
												<h4 className="font-semibold">
													{plant.name}
												</h4>
												<p className="mb-2">
													$ {plant.price}
												</p>
												<button className="p-3 text-white bg-primary hover:bg-[#3b8167] rounded">
													Add To Cart
													<FontAwesomeIcon
														icon={faCartPlus}
														className="pl-1"
													/>
												</button>
											</div>
										</div>
									</li>
								);
							})}
						</ul>
					</section>
				</main>
			</div>
		</>
	);
}
export { getStaticProps } from "./lib/readAll";
