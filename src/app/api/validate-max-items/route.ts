import {NextRequest, NextResponse} from "next/server";

export async function POST(request: NextRequest) {
    let cart = await request.json()
    console.log(JSON.stringify(cart))
    let itemsTotal = cart.resource.obj.lineItems.reduce((acc:any, curr:any) => {
        return acc + curr.quantity;
    }, 0);

    console.log(`itemsTotal->${itemsTotal}`)

    if (itemsTotal <= 1) {
        return new NextResponse(null, {status: 200});
    } else {
        return NextResponse.json({
            errors: [
                {
                    code: 'InvalidInput',
                    message: 'You can not put more than 10 items into the cart.',
                },
            ],
        },{status: 200})
    }
}