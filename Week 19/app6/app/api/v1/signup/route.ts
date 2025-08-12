import  {NextResponse, NextRequest} from "next/server";
import { PrismaClient } from "@prisma/client/extension";

const prismaClient = new PrismaClient();

export async function POST(req: NextRequest){

    const data = await req.json();

prismaClient.user.create({
    data: {
        username: data.username, 
        password: data.password
    }
})
    
    return NextResponse.json({
        message: "you have been signed up"
    })
}