"use client"

import { Button, CloseButton, Toast } from "@/ui/components"

export default function Home() {
	const handleClick = () => {
		Toast.add({
			status: "success",
			title: "Home",
			description: "Home page",
			actionProps: {
				children: "Remove",
				onClick: () => Toast.close(),
			},
		})
	}

	return (
		<div className="mt-20 p-4 mx-auto sm:max-w-sm flex gap-2 flex-col flex-1 items-center justify-center">
			<Button onClick={handleClick}>Create Toast</Button>

			<Toast.Provider side="top" align="start">
				<Toast.Portal>
					<Toast.Viewport>
						<ToastList/>
					</Toast.Viewport>
				</Toast.Portal>
			</Toast.Provider>
		</div>
	)
}

const ToastList = () => {
	const { toasts } = Toast.useManager()

	return toasts.map((toast) => (
		<Toast.Root
			key={toast.id}
			toast={toast}
		>
			<Toast.Content>
				<Toast.Indicator/>

				<Toast.Summary>
					<Toast.Title/>
					<Toast.Description/>
				</Toast.Summary>

				<Toast.Action/>
				<Toast.Close render={<CloseButton floating size="sm"/>}/>
			</Toast.Content>
		</Toast.Root>
	))
}