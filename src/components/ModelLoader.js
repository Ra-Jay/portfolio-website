import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import SpaceStation from '../../public/scene.gltf'

function Model() {
	const gltfLoader = new GLTFLoader()
	const modelRef = useRef()

	gltfLoader.load(SpaceStation, (gltf) => {
		const model = gltf.scene

		model.scale.set(0.3, 0.3, 0.3)
		model.position.set(0, 0, 0)

		modelRef.current = model
	})

	return (
		<group ref={modelRef}>
			<directionalLight
				intensity={1}
				position={[0, 5, 0]}
			/>
		</group>
	)
}

function ModelLoader() {
	return (
		<Canvas
			colorManagement
			camera={{ position: [0, 0, 300] }}
		>
			<Suspense fallback={null}>
				<Model />
			</Suspense>
		</Canvas>
	)
}

export default ModelLoader
