import UserForm from "@/app/component/UserForm";
import { Grid } from "@mui/material";

export default function Dashboard() {
	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<h1>Pages</h1>
				</Grid>
				<Grid item xs={12}>
					<UserForm />
				</Grid>
			</Grid>
		</>
	);
}
