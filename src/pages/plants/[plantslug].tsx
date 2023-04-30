import Head from "next/head";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";


export default function singlePlant() {
	return (
		<>
			<Head>
				<title>Plant ID</title>
			</Head>
			<div className="flex lg:w-3/4 sm:w-11/12 mx-auto">
				<main>
					<div className="flex w-full">
						{/* main container */}
						<div className="flex basis-2/4 h-[600px] bg-white justify-center items-center">
							{/* image container */}
							<img
                                className="h-[60%] scale-70 hover:scale-125 ease-in duration-500"
								src="https://raw.githubusercontent.com/olawanlejoel/nextjs-ecommerce-graphcms/main/public/images/alocasia.png"
								alt=""
							/>
						</div>
						<div className="flex flex-col items-start justify-center basis-1/2 mx-5">
							{/* plant container */}
							<h3 className="font-semibold text-3xl mb-3">Dot Lichen</h3>
							<h3 className=" text-2xl">$ 277</h3>
							<p className="my-3">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Cumque enim ad ullam, iste
								tenetur rem nemo porro quo pariatur modi nisi
								labore vero numquam nam! Natus non eius libero
								blanditiis!
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
