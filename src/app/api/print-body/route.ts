import {NextRequest, NextResponse} from "next/server";

export async function POST(request: NextRequest) {
    console.log(request.body);
    return NextResponse.json({ success: true }, { status: 200 })
}

export async function GET() {
    console.log("Probando");
    return NextResponse.json({ success: true }, { status: 200 })

}