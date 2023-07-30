import dbConn from "@/utils/dbConn";

import {NextResponse} from "next/server";
import Connect from "@/models/connect";

export async function POST(req, res) {
    try {

        const body = await req.json();
        await dbConn();

        await Connect.create(body);

        return NextResponse.json({
            message:"Message sent successfully!"
        }, {
            status: 200
        })

    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}