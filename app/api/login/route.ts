import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Email এবং Password দিন"
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "API ঠিকভাবে কাজ করছে",
      user: {
        email
      }
    });

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Server Error"
      },
      { status: 500 }
    );
  }
}
