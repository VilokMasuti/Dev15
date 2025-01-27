import { NextResponse } from "next/server";

import User from "../../../../database/user.model";
import handleError from "../../../../lib/handlers/error";
import { NotFoundError } from "../../../../lib/http-errors";
import { UserSchema } from "../../../../lib/validation";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = await params;
  if (!id) throw new NotFoundError("User");
  try {
    const user = await User.findById(id);
    if (!user) throw new NotFoundError("User");
    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (error) {
    return handleError(error, "api");
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  if (!id) throw new NotFoundError("User");
  try {
    const body = await request.json();
    const validatedData = UserSchema.partial().parse(body);
    const updatedUser = await User.findByIdAndUpdate(id, validatedData, {
      new: true,
    });

    if (!updatedUser) throw new NotFoundError("User");

    return NextResponse.json(
      { success: true, data: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    return handleError(error, "api");
  }
}

// DELETE /api/users/[id]
export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  if (!id) throw new NotFoundError("User");
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) throw new NotFoundError("User");
    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (error) {
    return handleError(error, "api");
  }
}
