import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { announcementRequestSchema } from "@/src/features/anunciar/schemas/announcement-request";
import { prisma } from "@/src/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = announcementRequestSchema.parse(body);

    await prisma.announcementRequest.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        message: validatedData.message,
        propertyType: validatedData.propertyType,
        addressOrNeighborhood: validatedData.addressOrNeighborhood,
        bedrooms: validatedData.bedrooms,
        bathrooms: validatedData.bathrooms,
        area: validatedData.area,
        purpose: validatedData.purpose,
        estimatedValue: validatedData.estimatedValue,
      },
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Dados inválidos. Verifique os campos e tente novamente." },
        { status: 400 }
      );
    }

    console.error("Error creating announcement request:", error);
    return NextResponse.json(
      { error: "Erro ao processar solicitação. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}
