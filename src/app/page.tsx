"use client"

import { Meter, Progress } from "@/ui/components"
import { useEffect, useState } from "react";

export default function Home() {
	const [value, setValue] = useState(20);

	useEffect(() => {
		const interval = setInterval(() => {
			setValue((current) => current === 100 ? 0 : Math.min(100, Math.round(current + Math.random() * 25)));
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="p-4 w-full sm:w-lg h-dvh mx-auto flex flex-col gap-4 items-center justify-center">
			<Meter.Root value={value} className="w-64">
				<Meter.Label>Storage</Meter.Label>
				<Meter.Value/>

				<Meter.Track>
					<Meter.Indicator/>
				</Meter.Track>
			</Meter.Root>

			<Progress.Root value={value} className="w-64">
				<Progress.Label>Loading</Progress.Label>
				<Progress.Value/>

				<Progress.Track>
					<Progress.Indicator/>
				</Progress.Track>
			</Progress.Root>
		</div>
	)
}