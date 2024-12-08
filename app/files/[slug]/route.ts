import { readFile } from "fs/promises";
import path from "path";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug; // 'a', 'b', or 'c'
  const buffer = await readFile(
    path.join(process.cwd(), "public/files/" + slug)
  );

  // set the headers to tell the browser to download the file
  const headers = new Headers();
  // remember to change the filename `test.pdf` to whatever you want the downloaded file called
  headers.append("Content-Disposition", 'attachment; filename="test.pdf"');
  headers.append("Content-Type", "application/pdf");

  return new Response(buffer, {
    headers,
  });
}
