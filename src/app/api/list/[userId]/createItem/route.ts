import { createListItem } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function POST(
	req: Request,
	{ params }: { params: { userId: string } }
) {
	try {
		const { content } = await req.json();

		const item = await createListItem(content, params.userId);

		return NextResponse.json({ item });
	} catch (error: any) {
		return NextResponse.json(
			{ error: error.message },
			{ status: 420, statusText: error.message }
		);
	}
}
