import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      type,
      name,
      email,
      message = '',
      platforms,
      niche,
      company,
      preferredTimeWindow,
    } = body as {
      type?: 'creator' | 'brand';
      name?: string;
      email?: string;
      message?: string;
      platforms?: string;
      niche?: string;
      company?: string;
      preferredTimeWindow?: string;
    };

    if (!type || !name || !email) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    if (type === 'creator' && (!platforms || !niche)) {
      return NextResponse.json(
        { ok: false, error: 'Platforms and niche are required for creators.' },
        { status: 400 }
      );
    }

    if (type === 'brand' && !company) {
      return NextResponse.json(
        { ok: false, error: 'Company is required for brands.' },
        { status: 400 }
      );
    }

    const subject =
      type === 'creator' ? 'New Creator Signup' : 'New Brand Inquiry';

    const lines: string[] = [];

    if (type === 'creator') {
      lines.push('Type: Creator');
      lines.push(`Name: ${name}`);
      lines.push(`Email: ${email}`);
      lines.push(`Platforms: ${platforms}`);
      lines.push(`Niche: ${niche}`);
      lines.push('');
      lines.push('Message:');
      lines.push(message || '(no additional message)');
    } else {
      lines.push('Type: Brand');
      lines.push(`Name: ${name}`);
      lines.push(`Email: ${email}`);
      lines.push(`Company/Brand: ${company}`);
      lines.push(
        `Preferred time window: ${preferredTimeWindow || '(not provided)'}`
      );
      lines.push('');
      lines.push('Message:');
      lines.push(message || '(no additional message)');
    }

    const text = lines.join('\n');

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { ok: false, error: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: 'SORAA <onboarding@resend.dev>',
      to: 'joinsoraa@gmail.com',
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error in /api/contact', error);
    return NextResponse.json(
      { ok: false, error: 'Failed to send email.' },
      { status: 500 }
    );
  }
}

