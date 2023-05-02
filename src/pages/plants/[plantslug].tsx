import Head from "next/head";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { getStaticProps } from "../../lib/readById";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";

export default function singlePlant({plant}:InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Head>
				<title>Plantomania</title>
			</Head>
			<div className="flex justify-center lg:w-3/4 sm:w-11/12 mx-auto">
				<main>
					<div className="flex w-full">
						{/* main container */}
						<div className="flex basis-2/4 h-[600px] bg-white justify-center items-center">
							{/* image container */}
							<Image
                                className="h-[60%] scale-50 hover:scale-75 ease-in duration-500"
								src={plant.img}
								width={200}
								height={250}
								alt=""
							/>
						</div>
						<div className="flex flex-col items-start justify-center basis-1/2 mx-5">
							{/* plant container */}
							<h3 className="font-semibold text-3xl mb-3">{plant.name}</h3>
							<h3 className=" text-2xl">$ {plant.price}</h3>
							<p className="my-3">
                                {plant.description}
							</p>
							<button className="p-3 text-white bg-primary rounded">
								Add To Cart
								<FontAwesomeIcon
									icon={faCartPlus}
									className="pl-1"
								/>
							</button>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}

export {getStaticProps,getStaticPaths} from '../../lib/readById'