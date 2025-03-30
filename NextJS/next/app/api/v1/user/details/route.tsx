import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        // {
            "title":'hello',
            "completed":true
        }
        // },
        // {
        //     "title":'hello2',
        //     "completed":false}
    );
}

