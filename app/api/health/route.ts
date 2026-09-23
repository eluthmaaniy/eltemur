export const dynamic = "force-dynamic";

export function GET() {
  return Response.json(
    {
      status: "ok",
      service: "eltemur-zentra-studio",
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
