import { getLocalArticles } from "@/app/services/articles";
import { NextResponse } from "next/server";

export function GET(request: Request) {
  const articles = getLocalArticles();
  return NextResponse.json(articles);
}

export function POST(request: Request) {
  return;
}
