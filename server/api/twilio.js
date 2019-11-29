import twilio from "twilio";

class TwilioAPIClass {
  from = process.env.TWILIO_FROM_NUMBER;
  client = new twilio(
    process.env.TWILIO_API_SID,
    process.env.TWILIO_API_AUTH_TOKEN
  );

  async sendMessage(message, to) {
    const { sid } = await this.client.messages.create({
      body: message,
      to: `+${to}`,
      from: `+${this.from}`
    });
    return sid;
  }
}

export const TwilioAPI = new TwilioAPIClass();
