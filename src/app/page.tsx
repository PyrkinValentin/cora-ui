import { ToggleGroup, Toggle } from "@/ui/components"

export default function Home() {
	return (
		<div className="w-full sm:w-lg mt-75 mx-auto">
			<ToggleGroup>
				<Toggle>Toggle 1</Toggle>
				<Toggle>Toggle 2</Toggle>
				<Toggle>Toggle 3</Toggle>
			</ToggleGroup>
		</div>
	)
}