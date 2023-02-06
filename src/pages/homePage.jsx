import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Checkbox from "@mui/material/Checkbox"
import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import CssBaseline from "@mui/material/CssBaseline"
import FormControlLabel from "@mui/material/FormControlLabel"
import { Badge } from "@mui/material"
import { styled } from "@mui/material"

const imageSize = 120
const profileImage = "https://media.licdn.com/dms/image/C4E03AQG_noM1LjACyQ/profile-displayphoto-shrink_200_200/0/1634609258730?e=1681344000&v=beta&t=_psGHCAbkEUBPVvEk9Y3F1RUv-_dmx38SC4GNl4DMs0"

const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		color: "#44b700",
		width: 20,
		height: 20,
		borderRadius: "100%",
		backgroundColor: "#44b700",
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		"&::after": {
			position: "absolute",
			top: 0,
			left: 0,
			content: '""',
			width: "100%",
			height: "100%",
			borderRadius: "50%",
			border: "1px solid currentColor",
			animation: "ripple 1.2s infinite ease-in-out",
		},
	},
	"@keyframes ripple": {
		"0%": {
			transform: "scale(.8)",
			opacity: 1,
		},
		"100%": {
			opacity: 0,
			transform: "scale(1.5)",
		},
	},
}))

export function HomePage() {
	console.log("testing")

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<StyledBadge
					variant="dot"
					overlap="circular"
					anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				>
					<Avatar src={profileImage} sx={{ height: imageSize, width: imageSize }} />
				</StyledBadge>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<Box
					//
					noValidate
					component="form"
					style={{
						backgroundColor: "whitesmoke",
					}}
				>
					<TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
					<TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
					<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
					<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href="#" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	)
}
