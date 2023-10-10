import {NextRequest, NextResponse} from "next/server";

export async function POST(request: NextRequest) {
    console.log(await request.json());
    return new NextResponse(null, {status: 200})
}

export async function GET() {
    console.log("Probando");
    return NextResponse.json({ success: true }, { status: 200 })
}