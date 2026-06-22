import { Avatar, Button, Dialog, Item } from "@/ui/components"

export default function Home() {
	return (
		<div className="p-4 w-full sm:w-lg h-dvh mx-auto flex flex-col gap-4 items-center justify-center">
			<Dialog.Root>
				<Dialog.Trigger>Open dialog</Dialog.Trigger>

				<Dialog.Portal>
					<Dialog.Backdrop/>

					<Dialog.Popup>
						<Dialog.Close nativeClose/>

						<Dialog.Title>What is Lorem Ipsum?</Dialog.Title>

						<Dialog.Description>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem
							Ipsum
							has been the industry's standard dummy
						</Dialog.Description>

						<Dialog.Actions>
							<Button className="w-full">Continue</Button>

							<Dialog.Root>
								<Dialog.Trigger>Open nested dialog</Dialog.Trigger>

								<Dialog.Portal>
									<Dialog.Backdrop/>

									<Dialog.Popup>
										<Dialog.Close nativeClose/>

										<Dialog.Title>What is Lorem Ipsum?</Dialog.Title>
										<Dialog.Description>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem
											Ipsum
											has been the industry's standard dummy
										</Dialog.Description>

										<Dialog.Actions>
											<Button className="w-full">Continue</Button>
										</Dialog.Actions>
									</Dialog.Popup>
								</Dialog.Portal>
							</Dialog.Root>
						</Dialog.Actions>
					</Dialog.Popup>
				</Dialog.Portal>
			</Dialog.Root>
		</div>
	)
}