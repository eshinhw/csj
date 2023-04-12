import { getLocalArticles } from "@/app/services/articles";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
  const articles = await getLocalArticles();
  return NextResponse.json(articles);
}

// export async function PUT(request: Request) {
//   NextRequest.
// }
