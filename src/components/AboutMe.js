import React from 'react'
import { SvgIcon } from '@mui/material'
import { DocumentScanner } from '@mui/icons-material'

function AboutMe() {
	return (
		<div className="w-full float-left ">
			<div className="flex">
				<div className="p-[100px]">
					<h1>About Me</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
						minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
						deserunt mollit anim id est laborum.
					</p>
				</div>

				<div className="p-[100px]">
					<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
						<span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">About Me</span>
					</h1>
					<p className="my-[20px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
						minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
						deserunt mollit anim id est laborum.
					</p>
					<button
						type="button"
						class="text-white bg-green-500 hover:bg-green-800 pointer focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
					>
						<SvgIcon
							component={DocumentScanner}
							className="w-3.5 h-3.5 mr-2"
						/>
						RESUME
					</button>
				</div>
			</div>
		</div>
	)
}

export default AboutMe
