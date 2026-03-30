/**
 * Form submission utility.
 * Uses Web3Forms API (free, no backend needed).
 * 
 * Setup: set VITE_WEB3FORMS_KEY in .env
 * Fallback: opens mailto link if no key configured.
 */

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export interface FormData {
  name: string;
  phone?: string;
  email?: string;
  company?: string;
  message?: string;
  service?: string;
  source: string;
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
  } catch {
    // If fetch fails (e.g. network), try HTML form fallback
    try {
      submitViaHtmlForm(accessKey, data);
      return { ok: true, message: "Заявка отправлена" };
    } catch {
      return { ok: false, message: "Ошибка соединения. Попробуйте позже или позвоните нам." };
    }
  }
}

/**
 * Fallback: submit via hidden HTML form (avoids CORS issues).
 * Web3Forms supports standard form POST with redirect.
 */
function submitViaHtmlForm(accessKey: string, data: FormData) {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = WEB3FORMS_ENDPOINT;
  form.style.display = "none";

  const fields: Record<string, string> = {
    access_key: accessKey,
    subject: `Новая заявка с сайта Martin Media — ${data.source}`,
    from_name: "Martin Media Website",
    redirect: window.location.origin + "/brief?submitted=true",
    name: data.name,
    phone: data.phone || "—",
    email: data.email || "—",
    company: data.company || "—",
    service: data.service || "—",
    message: data.message || "—",
  };

  for (const [key, value] of Object.entries(fields)) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = value;
    form.appendChild(input);
  }

  document.body.appendChild(form);
  form.submit();
}
