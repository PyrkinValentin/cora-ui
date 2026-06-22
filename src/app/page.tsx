"use client"

import { Badge, Button } from "@/ui/components"
import { useState } from "react";

export default function Home() {
	const [invisible, setInVisible] = useState(false)

	return (
		<div className="p-4 w-full sm:w-lg h-dvh mx-auto flex flex-col gap-4 items-center justify-center">
			<Badge.Root>
				<Button onClick={() => setInVisible(!invisible)}>Button</Button>

				<Badge.Indicator
					invisible={invisible}
					size="sm"
					status="warning"
					side="top"
					align="end"
				>
					3
				</Badge.Indicator>
			</Badge.Root>
		</div>
	)
}