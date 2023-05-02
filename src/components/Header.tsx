import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Cart from "@/modules/cart/Cart";

function Header() {
	return (
		<div className="py-6 mb-6 bg-primary">
			<nav className="flex justify-between items-center w-[90%] max-w-screen-lg  mx-auto">
				<div className="flex flex-row gap-8 items-center text-white ">
					<Link href="/">
						<h1 className="text-xl font-semibold">Plantomania</h1>
					</Link>
				</div>
				<ul className="flex gap-8 text-white">
					<li className="font-semibold">
						<Link href={"/"}>
							<i
								className="fa fa-user mr-1"
								aria-hidden="true"
							></i>
						</Link>
					</li>
					<li>
						<button
							// onClick={()=>{console.log("click")}}
							className="font-semibold text-yellow-200"
							type="button"
							data-drawer-target="drawer-right-example"
							data-drawer-show="drawer-right-example"
							data-drawer-placement="right"
							aria-controls="drawer-right-example"
						>
							<FontAwesomeIcon
								icon={faCartShopping}
								className="pr-1 text-white"
								
							/>
							Cart
						</button>
						<Cart/>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
