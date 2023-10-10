import {NextRequest, NextResponse} from "next/server";

export async function POST(request: NextRequest) {
    console.log(request.body);
    return NextResponse.json({ success: true }, { status: 200 })
}

export async function GET(request: NextRequest) {
    console.log("Probando");
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 200 })

}