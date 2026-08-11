import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatDateShort } from "@/lib/utils";

export const metadata = { title: "Demo Requests — Admin" };

async function getDemos() {
  try {
    const { prisma } = await import("@/lib/prisma");
    return await prisma.demoBooking.findMany({
      orderBy: { createdAt: "desc" },
      take: 100,
    });
  } catch {
    return [];
  }
}

export default async function DemosAdminPage() {
  const demos = await getDemos();

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-xl font-semibold">Demo Requests</h1>
        <p className="text-sm text-muted-foreground">{demos.length} total requests</p>
      </div>

      {demos.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          No demo requests yet.
        </div>
      ) : (
        <div className="rounded-xl border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Industry</TableHead>
                <TableHead>Preferred Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Submitted</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {demos.map((demo) => (
                <TableRow key={demo.id}>
                  <TableCell className="font-medium">{demo.name}</TableCell>
                  <TableCell>{demo.company}</TableCell>
                  <TableCell>{demo.email}</TableCell>
                  <TableCell>{demo.industry || "—"}</TableCell>
                  <TableCell>{demo.preferredDate ? `${demo.preferredDate} ${demo.preferredTime || ""}` : "Flexible"}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        demo.status === "CONFIRMED" ? "success" :
                        demo.status === "PENDING" ? "warning" : "outline"
                      }
                      className="text-xs"
                    >
                      {demo.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {formatDateShort(demo.createdAt)}
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
