'use client'
import { useRef } from 'react'
import MainPage from '@/app/home/page'
import AboutMe from '@/components/AboutMe'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
// import bg1 from './bg1.png'
import moon from '../../public/moon3.jpeg'
import ModelLoader from '@/components/ModelLoader'

export default function Home() {
	const ref = useRef()

	return (
		<main>
			<Parallax
				pages={3}
				ref={ref}
			>
				<ParallaxLayer
					offset={0.5}
					speed={0.3}
					factor={2}
					style={{
						backgroundImage: `url(${moon.src})`,
						backgroundSize: 'cover',
						opacity: '0.3',
					}}
					onClick={() => ref.current.scrollTo(2)}
				/>

				<ParallaxLayer
					sticky={{ start: 0.5, end: 2.5 }}
					className="flex items-start justify-center"
				>
					<div className="w-fit center">
						<iframe
							src="https://giphy.com/embed/NTjkdAKV2v0MZDWuWD"
							width="fit-content"
							height="100%"
							class="giphy-embed"
							allowFullScreen
						></iframe>
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					offset={0}
					speed={0.05}
					onClick={() => ref.current.scrollTo(1)}
					className="flex items-center"
				>
					<MainPage />
					{/* <ModelLoader /> */}
				</ParallaxLayer>

				<ParallaxLayer
					offset={1}
					speed={0.05}
					factor={1}
					onClick={() => ref.current.scrollTo(1)}
					className="flex items-center"
				>
					<AboutMe />
				</ParallaxLayer>
			</Parallax>
		</main>
	)
}
