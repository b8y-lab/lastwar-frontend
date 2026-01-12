import { cookies } from "next/headers";
import log from "@/lib/logger.ts";

export async function GET()
{
    try {
        const resolvedCookies = await cookies();
        const spins = resolvedCookies.get("spins");

        const data = spins 
            ? spins.value
            : '0';
        
        return Response.json({spins: data});
    }
    catch (error) {
        await log('api/spin/get', JSON.stringify(error));
    }
}

export async function POST(request: Request)
{
    try {
        const body = await request.json();
        const { spins } = body;
        
        const resolvedCookies = await cookies();
        resolvedCookies.set("spins", spins.toString());
        
        return Response.json({spins: spins.toString()});
    }
    catch (error) {
        await log('api/spin/get', JSON.stringify(error));
        
        return Response.json(
            { message: "Error updating. " + error  },
            { status: 500 }
        );
    }
}