import  {NextResponse} from "next/server";

export function POST(){


    return NextResponse.json({
        message: "you have been signed up"
    })
}