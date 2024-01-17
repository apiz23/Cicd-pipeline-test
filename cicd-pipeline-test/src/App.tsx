import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import * as react from "react-icons/fa";
export default function App() {
	return (
		<>
			<div className="h-fit">
				<div className="max-w-xl mx-auto my-20">
					<Card className="text-center shadow-md">
						<CardHeader>
							<CardTitle className="text-5xl">Yeah</CardTitle>
							<CardDescription className="text-2xl">Success</CardDescription>
						</CardHeader>
						<CardContent>
							<react.FaReact className="h-20 w-20 mx-auto" />
						</CardContent>
					</Card>
				</div>
			</div>
		</>
	);
}
