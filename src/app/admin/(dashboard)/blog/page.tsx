import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus } from "lucide-react";
import { formatDateShort } from "@/lib/utils";

export const metadata = { title: "Blog Posts — Admin" };

async function getBlogPosts() {
  try {
    const { prisma } = await import("@/lib/prisma");
    return await prisma.blogPost.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch {
    return [];
  }
}

export default async function BlogAdminPage() {
  const posts = await getBlogPosts();

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold">Blog Posts</h1>
          <p className="text-sm text-muted-foreground">{posts.length} posts</p>
        </div>
        <Button size="sm">
          <Plus className="w-4 h-4 mr-1" />
          New Post
        </Button>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          No blog posts yet. Posts created through the API will appear here.
        </div>
      ) : (
        <div className="rounded-xl border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium max-w-xs truncate">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">{post.title}</Link>
                  </TableCell>
                  <TableCell>{post.category}</TableCell>
                  <TableCell>{post.author}</TableCell>
                  <TableCell>
                    <Badge variant={post.published ? "success" : "outline"} className="text-xs">
                      {post.published ? "Published" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell>{post.views}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {formatDateShort(post.createdAt)}
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
