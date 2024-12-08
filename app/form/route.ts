import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return new Response(await handler(req), { status: 200 });
}

export async function PATCH(req: NextRequest) {
  return new Response(await handler(req), { status: 200 });
}

export async function POST(req: NextRequest) {
  return new Response(await handler(req), { status: 200 });
}

export async function PUT(req: NextRequest) {
  return new Response(await handler(req), { status: 200 });
}

export async function DELETE(req: NextRequest) {
  return new Response(await handler(req), { status: 200 });
}

export async function HEAD(req: NextRequest) {
  return new Response(await handler(req), { status: 200 });
}

export async function OPTIONS(req: NextRequest) {
  return new Response(await handler(req), { status: 200 });
}



async function handler(req: NextRequest): Promise<string> {
  let response = `[${req.method}]\n`;

  // Process Query Parameters
  const { searchParams } = new URL(req.url);
  if (Array.from(searchParams).length > 0) {
    response += "QUERY PARAMETERS\n";
    searchParams.forEach((value, key) => {
      response += formatValue(key, value);
    });
  }

  if (req.body) {
    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const body = await req.json();
      response += "BODY PARAMETERS\n";
      for (const [key, value] of Object.entries(body)) {
        response += formatValue(key, value);
      }
    }

    // Parse Form Data
    else if (contentType.includes("application/x-www-form-urlencoded")) {
      const body = await req.text();
      const params = new URLSearchParams(body);
      response += "BODY PARAMETERS\n";
      params.forEach((value, key) => {
        response += formatValue(key, value);
      });
    }
  }

  return response;
}

function formatValue(key: string, value: any) {
  let message = "";
  if (Array.isArray(value)) {
    value.forEach((val, index) => {
      message += `${key}[${index}] = ${val}\n`;
    });
  } else {
    message += `${key} = ${value}\n`;
  }
  return message;
}
