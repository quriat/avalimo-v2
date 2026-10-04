import { NextRequest, NextResponse } from "next/server";

const N8N_BASE = "https://n8napp.adamj.fit";
const BOOKING_WEBHOOK = `${N8N_BASE}/webhook/avalimo-booking`;

function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  if (digits.startsWith("+")) return phone.replace(/\s/g, "");
  return phone;
}

async function postWebhook(url: string, payload: unknown): Promise<Response> {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      email,
      pickup,
      dropoff,
      time,
      vehicle,
      passengers,
      flight,
      notes,
      price,
    } = body;

    if (!name || !phone || !pickup || !dropoff || !time || !vehicle) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Split combined datetime-local into date + time for compatibility
    const [pickupDate, pickupTime] = typeof time === "string" ? time.split("T") : ["", ""];

    const bookingPayload = {
      client_name: name,
      client_phone: normalizePhone(phone),
      client_email: email || "",
      pickup_location: pickup,
      dropoff_location: dropoff,
      pickup_date: pickupDate,
      pickup_time: pickupTime?.slice(0, 5) || "",
      time,
      vehicle,
      passengers: passengers || "1",
      flight_number: flight || "",
      special_requests: notes || "",
      price: price || "",
    };

    // Send to the n8n booking router. The router handles:
    // - AppFlowy sync
    // - Client confirmation email
    // - Owner dispatch email
    // - Client iMessage confirmation (if phone provided)
    // - Owner iMessage notification
    const bookingRes = await postWebhook(BOOKING_WEBHOOK, bookingPayload);
    if (!bookingRes.ok) {
      const text = await bookingRes.text().catch(() => "");
      console.error("n8n booking webhook failed:", bookingRes.status, text);
      return NextResponse.json(
        { error: "Could not send booking notification. Please call (832) 567-8050." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: "Booking submitted." });
  } catch (err) {
    console.error("/api/book error:", err);
    return NextResponse.json(
      { error: "Server error. Please call (832) 567-8050 to complete your booking." },
      { status: 500 }
    );
  }
}
