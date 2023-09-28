import { updateListItem } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function POST(
	req: Request,
	{ params }: { params: { userId: string } }
) {
	try {
		const { payload } = await req.json();

		const itemId = await updateListItem(payload, params.userId);

		return NextResponse.json({ itemId });
	} catch (error: any) {
		return NextResponse.json(
			{ error: error.message },
			{ status: 420, statusText: error.message }
		);
	}
}
