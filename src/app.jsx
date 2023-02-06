import { createTheme, ThemeProvider } from "@mui/material"
import { HashRouter, Routes, Route, Navigate } from "react-router-dom"

import { PdfPage } from "./pages/pdfPage"
import { HomePage } from "./pages/homePage"

const theme = createTheme({
	palette: {
		type: "dark",
		primary: {
			main: "#415A77",
		},
		secondary: {
			main: "#778DA9",
		},
		background: {
			paper: "#e5e5e5",
			default: "#0D1B2A",
		},
	},
})

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<HashRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/pdf" element={<PdfPage />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</HashRouter>
		</ThemeProvider>
	)
}
