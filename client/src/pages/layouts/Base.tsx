import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

export interface BaseProps {
	children: React.ReactNode;
}

const Base: React.FC<BaseProps> = ({ children }) => {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				{children}
			</main>
		</>
	);
}

export default Base;