import { NextRequest, NextResponse } from "next/server";
import { submitToIndexNow } from "@/lib/indexnow";

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const tokenQuery = searchParams.get("token");
    const force = searchParams.get("force") === "true";

    // Extract authorization bearer token if present
    const authHeader = request.headers.get("authorization");
    const tokenHeader = authHeader?.startsWith("Bearer ") ? authHeader.substring(7) : null;

    const expectedToken = process.env.INDEXNOW_TRIGGER_TOKEN;

    if (!expectedToken) {
      console.error("[IndexNow API] INDEXNOW_TRIGGER_TOKEN is not configured in environment variables.");
      return NextResponse.json(
        { success: false, error: "Server configuration error: Trigger token is not configured" },
        { status: 500 }
      );
    }

    const token = tokenQuery || tokenHeader;
    if (!token || token !== expectedToken) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const result = await submitToIndexNow({ force });
    
    return NextResponse.json(result, { status: result.success ? 200 : 400 });
  } catch (error: any) {
    console.error("[IndexNow API] Unhandled error in route handler:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  return POST(request);
}
