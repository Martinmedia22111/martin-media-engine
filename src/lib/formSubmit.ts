/**
 * Form submission utility.
 * Uses Web3Forms API (free, no backend needed).
 * 
 * To set up:
 * 1. Go to https://web3forms.com/ and enter martinmedia.minsk@gmail.com
 * 2. You'll receive an access key by email
 * 3. Set it in .env as VITE_WEB3FORMS_KEY
 * 
 * Fallback: if no key is configured, opens mailto link.
 */

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export interface FormData {
  name: string;
  phone?: string;
  email?: string;
  company?: string;
  message?: string;
  service?: string;
  source: string; // which form/page submitted from
}

export async function submitForm(data: FormData): Promise<{ ok: boolean; message: string }> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

  if (!accessKey) {
    // Fallback: open mailto
    const subject = encodeURIComponent(`Заявка с сайта Martin Media — ${data.source}`);
    const body = encodeURIComponent(
      `Имя: ${data.name}\nТелефон: ${data.phone || '—'}\nEmail: ${data.email || '—'}\nКомпания: ${data.company || '—'}\nУслуга: ${data.service || '—'}\nСообщение: ${data.message || '—'}`
    );
    window.open(`mailto:martinmedia.minsk@gmail.com?subject=${subject}&body=${body}`, '_blank');
    return { ok: true, message: "Открыто почтовое приложение" };
  }

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Новая заявка с сайта Martin Media — ${data.source}`,
        from_name: "Martin Media Website",
        name: data.name,
        phone: data.phone || "—",
        email: data.email || "—",
        company: data.company || "—",
        service: data.service || "—",
        message: data.message || "—",
        source_page: data.source,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return { ok: true, message: "Заявка успешно отправлена" };
    }
    return { ok: false, message: result.message || "Ошибка отправки" };
  } catch (error) {
    console.error("Form submission error:", error);
    return { ok: false, message: "Ошибка соединения. Попробуйте позже." };
  }
}
