import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'


function Header() {
  return (
    <div className='py-6 mb-6 bg-primary'>
      			<nav className="flex justify-between items-center w-[90%] max-w-screen-lg  mx-auto">
				<div className="flex flex-row gap-8 items-center text-white ">
					<Link href="/">
						<h1 className="text-xl font-semibold">Plantomania</h1>
					</Link>
				</div>
				<ul className="flex gap-8 text-white">
					<li className="font-semibold">
						<Link href={"/"}>
							<i className="fa fa-user mr-1" aria-hidden="true"></i>
						</Link>
					</li>
					<li className="font-semibold">
						<Link href="/publish">
							<FontAwesomeIcon icon={faCartShopping} className='pr-1'/>
              Cart
						</Link>
					</li>
				</ul>
			</nav>
    </div>
  )
}

export default Header