import React from 'react';

type LayoutProps = {
	children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
	return (
		<div>
			<header></header>
			<main>{children}</main>
		</div>
	);
}
export default Layout;
