import { Avatar, Button, Chip, Table } from "@/ui/components"
import { Copy, EllipsisVertical } from "lucide-react"

export default function Home() {
	return (
		<div className="p-4 w-full sm:w-3xl h-dvh mx-auto flex flex-col gap-2 items-center justify-center">
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
									#{user.id.toString()}

									<Button
										iconOnly
										size="sm"
										variant="ghost"
									>
										<Copy className="text-muted"/>
									</Button>
								</div>
							</Table.Cell>

							<Table.Cell>
								<div className="flex items-center gap-3">
									<Avatar.Root size="sm">
										<Avatar.Image src={user.image_url}/>
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
								>
									<EllipsisVertical/>
								</Button>
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>
		</div>
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
		image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jCtfaiEmORqaGNVoy0GwSHmek67WKPiVFQ&s",
		name: "Kate Moore",
		role: "Chief Executive Officer",
		status: "Active",
	},
	{
		email: "john@acme.com",
		id: "5273849",
		image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXKZ-BU6zkQf6xxjI3eh0XGI69rMcCy2q6Kg&s",
		name: "John Smith",
		role: "Chief Technology Officer",
		status: "Active",
	},
	{
		email: "sara@acme.com",
		id: "7492836",
		image_url: "https://img.magnific.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg?semt=ais_hybrid&w=740&q=80",
		name: "Sara Johnson",
		role: "Chief Marketing Officer",
		status: "On Leave",
	},
	{
		email: "michael@acme.com",
		id: "8293746",
		image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBta8XRe6Sh-aPvgi_UZjx0-lDlvXLa7lJ2A&s",
		name: "Michael Brown",
		role: "Chief Financial Officer",
		status: "Active",
	},
	{
		email: "emily@acme.com",
		id: "1234567",
		image_url: "https://www.shutterstock.com/image-photo/human-face-women-portrait-260nw-267575231.jpg",
		name: "Emily Davis",
		role: "Product Manager",
		status: "Inactive",
	},
];