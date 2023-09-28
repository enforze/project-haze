import { getAllListItems } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function GET(
	req: Request,
	{ params }: { params: { userId: string } }
) {
	try {
		const items = await getAllListItems(params.userId);

		return NextResponse.json({ items });
	} catch (error: any) {
		return NextResponse.json(
			{ error: error.message },
			{ status: 420, statusText: error.message }
		);
	}
}
