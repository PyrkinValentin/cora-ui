import { Slider } from "@/ui/components"

export default function Home() {
	return (
		<div className="w-full sm:w-lg mt-75 h-90 flex flex-col gap-2 mx-auto">
			<Slider.Root orientation="horizontal" defaultValue={25}>
				<div className="flex items-center justify-between gap-2">
					<Slider.Label>Volume</Slider.Label>
					<Slider.Value/>
				</div>

				<Slider.Control>
					<Slider.Track>
						<Slider.Indicator/>
						<Slider.Thumb/>
					</Slider.Track>
				</Slider.Control>

			</Slider.Root>
		</div>
	)
}