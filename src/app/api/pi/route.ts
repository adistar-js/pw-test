import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { fullName, address, mobile, email, gender } = data;

  const { error } = await supabase.from('store').insert([
    { name: fullName, address, number:mobile, email, gender }
  ]);
  console.log(error)
  if (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
} 