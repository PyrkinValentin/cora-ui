import { Checkbox, Radio, RadioGroup, Switch } from "@/ui/components"

export default function Home() {
	return (
		<div className="p-4 w-full sm:w-lg h-dvh mx-auto flex flex-col gap-4 items-center justify-center">
			<Switch.Root>
				<Switch.Thumb/>
			</Switch.Root>

			<label className="flex items-center gap-2 select-none">
				<Checkbox.Root>
					<Checkbox.Indicator/>
				</Checkbox.Root>
				Option
			</label>

			<RadioGroup>
				<Radio.Root value={0}>
					<Radio.Indicator/>
				</Radio.Root>

				<Radio.Root value={1}>
					<Radio.Indicator/>
				</Radio.Root>

				<Radio.Root value={2}>
					<Radio.Indicator/>
				</Radio.Root>
			</RadioGroup>
		</div>
	)
}