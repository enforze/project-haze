import { getUser } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function GET(
	req: Request,
	{ params }: { params: { id: string } }
) {
	try {
		console.log(params.id);
		const user = await getUser(params.id);

		return NextResponse.json({ user });
	} catch (error: any) {
		return NextResponse.json(
			{ error: error.message },
			{ status: 420, statusText: error.message }
		);
	}
}
