import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatDateShort } from "@/lib/utils";

export const metadata = { title: "Contact Messages — Admin" };

async function getContacts() {
  try {
    const { prisma } = await import("@/lib/prisma");
    return await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
      take: 100,
    });
  } catch {
    return [];
  }
}

export default async function ContactsAdminPage() {
  const contacts = await getContacts();

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold">Contact Messages</h1>
          <p className="text-sm text-muted-foreground">{contacts.length} total messages</p>
        </div>
      </div>

      {contacts.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          No messages yet. They will appear here when submitted.
        </div>
      ) : (
        <div className="rounded-xl border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((msg) => (
                <TableRow key={msg.id}>
                  <TableCell className="font-medium">{msg.name}</TableCell>
                  <TableCell>{msg.email}</TableCell>
                  <TableCell>{msg.company || "—"}</TableCell>
                  <TableCell className="max-w-xs truncate">{msg.subject}</TableCell>
                  <TableCell>
                    <Badge variant={msg.status === "UNREAD" ? "default" : "outline"} className="text-xs">
                      {msg.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {formatDateShort(msg.createdAt)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
