import type { ReactNode } from "react"

import { Alert, Avatar, Badge, Button, Chip, Switch, Table } from "@cora-ui/react"
import { Bell, Copy, EllipsisVertical } from "lucide-react"

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
	<section className="w-full flex flex-col gap-3">
		<h2 className="text-xs font-semibold uppercase tracking-wide text-muted">{title}</h2>
		<div className="flex flex-wrap items-center gap-3">{children}</div>
	</section>
)

export default function Home() {
	return (
		<main className="p-8 w-full max-w-4xl mx-auto flex flex-col gap-10">
			<header className="flex flex-col gap-1">
				<h1 className="text-2xl font-bold">Cora UI</h1>
				<p className="text-sm text-muted">React 19 components built on Base UI and Tailwind CSS v4.</p>
			</header>

			<Section title="Buttons">
				<Button variant="primary">Primary</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="ghost">Ghost</Button>
				<Button variant="error">Error</Button>
				<Button iconOnly variant="secondary" aria-label="More">
					<EllipsisVertical/>
				</Button>
			</Section>

			<Section title="Button sizes">
				<Button size="sm">Small</Button>
				<Button size="md">Medium</Button>
				<Button size="lg">Large</Button>
				<Button disabled>Disabled</Button>
			</Section>

			<Section title="Chips">
				<Chip color="neutral">Neutral</Chip>
				<Chip color="info" variant="secondary">Info</Chip>
				<Chip color="success" variant="secondary">Success</Chip>
				<Chip color="warning" variant="secondary">Warning</Chip>
				<Chip color="error" variant="secondary">Error</Chip>
			</Section>

			<Section title="Badges">
				<Badge.Root>
					<Button iconOnly variant="secondary" aria-label="Notifications">
						<Bell/>
					</Button>
					<Badge.Indicator status="error">5</Badge.Indicator>
				</Badge.Root>
				<Badge.Root>
					<Button iconOnly variant="secondary" aria-label="Messages">
						<Bell/>
					</Button>
					<Badge.Indicator status="success"/>
				</Badge.Root>
			</Section>

			<Section title="Switches">
				<Switch.Root defaultChecked>
					<Switch.Thumb/>
				</Switch.Root>
				<Switch.Root>
					<Switch.Thumb/>
				</Switch.Root>
				<Switch.Root disabled defaultChecked>
					<Switch.Thumb/>
				</Switch.Root>
			</Section>

			<Section title="Avatars">
				{users.slice(0, 4).map((user) => (
					<Avatar.Root key={user.id} size="sm">
						<Avatar.Image src={user.image_url} alt={user.name}/>
						<Avatar.Fallback>{Avatar.getInitials(user.name)}</Avatar.Fallback>
					</Avatar.Root>
				))}
			</Section>

			<Section title="Alert">
				<Alert.Root className="w-full">
					<Alert.Indicator status="info"/>
					<Alert.Content>
						<Alert.Title>Heads up</Alert.Title>
						<Alert.Description>
							This alert is server-rendered — Avatar.getInitials() also runs on the server.
						</Alert.Description>
					</Alert.Content>
				</Alert.Root>
			</Section>

			<section className="w-full flex flex-col gap-3">
				<h2 className="text-xs font-semibold uppercase tracking-wide text-muted">Table</h2>

				<Table.Root>
					<Table.Caption>Table of users</Table.Caption>

					<Table.Header>
						<Table.Row>
							<Table.Head>Worker ID</Table.Head>
							<Table.Head>Member</Table.Head>
							<Table.Head>Role</Table.Head>
							<Table.Head>Status</Table.Head>
							<Table.Head>Actions</Table.Head>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						{users.map((user) => (
							<Table.Row
								key={user.id}
								id={user.id}
							>
								<Table.Cell className="font-medium">
									<div className="flex items-center gap-2">
										#{user.id}

										<Button
											iconOnly
											size="sm"
											variant="ghost"
											aria-label="Copy worker id"
										>
											<Copy className="text-muted"/>
										</Button>
									</div>
								</Table.Cell>

								<Table.Cell>
									<div className="flex items-center gap-3">
										<Avatar.Root size="sm">
											<Avatar.Image src={user.image_url} alt={user.name}/>
											<Avatar.Fallback>{Avatar.getInitials(user.name)}</Avatar.Fallback>
										</Avatar.Root>

										<div className="flex flex-col">
											<span className="text-xs">{user.name}</span>
											<span className="text-xs text-muted">{user.email}</span>
										</div>
									</div>
								</Table.Cell>

								<Table.Cell className="min-w-52">{user.role}</Table.Cell>

								<Table.Cell className="min-w-25">
									<Chip
										color={statusColorMap[user.status]}
										variant="secondary"
									>
										{user.status}
									</Chip>
								</Table.Cell>

								<Table.Cell className="text-center">
									<Button
										iconOnly
										size="sm"
										variant="secondary"
										aria-label="Row actions"
									>
										<EllipsisVertical/>
									</Button>
								</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table.Root>
			</section>
		</main>
	)
}

interface User {
	id: string;
	name: string;
	image_url: string;
	role: string;
	status: "Active" | "Inactive" | "On Leave";
	email: string;
}

const statusColorMap: Record<string, "success" | "error" | "warning"> = {
	Active: "success",
	Inactive: "error",
	"On Leave": "warning",
};
const users: User[] = [
	{
		email: "kate@acme.com",
		id: "4586932",
		image_url: "https://i.pravatar.cc/80?img=1",
		name: "Kate Moore",
		role: "Chief Executive Officer",
		status: "Active",
	},
	{
		email: "john@acme.com",
		id: "5273849",
		image_url: "https://i.pravatar.cc/80?img=12",
		name: "John Smith",
		role: "Chief Technology Officer",
		status: "Active",
	},
	{
		email: "sara@acme.com",
		id: "7492836",
		image_url: "https://i.pravatar.cc/80?img=5",
		name: "Sara Johnson",
		role: "Chief Marketing Officer",
		status: "On Leave",
	},
	{
		email: "michael@acme.com",
		id: "8293746",
		image_url: "https://i.pravatar.cc/80?img=13",
		name: "Michael Brown",
		role: "Chief Financial Officer",
		status: "Active",
	},
	{
		email: "emily@acme.com",
		id: "1234567",
		image_url: "https://i.pravatar.cc/80?img=9",
		name: "Emily Davis",
		role: "Product Manager",
		status: "Inactive",
	},
];
