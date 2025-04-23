import { Sora } from 'next/font/google'
import '@/styles/globals.css'

const soraFont = Sora({
	variable: '--font-sora',
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<body className={`${soraFont.variable} antialiased`}>
        {children}
      </body>
		</html>
	)
}