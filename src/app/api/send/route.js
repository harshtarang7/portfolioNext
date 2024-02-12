// import { EmailTemplate } from '../../../components/EmailTemplate';
import {NextResponse} from 'next/server'
import { Resend } from 'resend';

const resend = new Resend('re_ZexkF1Xv_MjfLrmc1zsKEHiffQXSSXVgh');
const fromEmail=process.env.FROM_EMAIL;

export async function POST (req,res) {
    // const {body}=await req.json();
    const {email,subject,message}=req.body;
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: subject,
      react: <>
      <h1>{subject}</h1>
      <p>thank you for contacting me</p>
      <p>NEw Message Submitted</p>
      <p>{message}</p>
      </>,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}