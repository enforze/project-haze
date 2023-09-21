import { createUser } from "@/lib/redis";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const { name, email, password } = await req.json();

		const user = await createUser({ name, email, password });

		return NextResponse.json({ user });
	} catch (error: any) {
		return NextResponse.json(
			{ error: error.message },
			{ status: 420, statusText: error.message }
		);
	}
}
