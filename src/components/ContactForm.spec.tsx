import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ContactForm } from "./ContactForm";

const EDGE_FUNCTION_URL =
  "https://pbvjsixlqnuzcnqahbxu.supabase.co/functions/v1/contacts-landings-br";
const FORM_PROFILE = "Consultoria Cloud";

describe("ContactForm", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
    (fetch as ReturnType<typeof vi.fn>).mockResolvedValue({ ok: true });
    Object.defineProperty(window, "location", {
      value: { href: "https://example.com/consultoria-cloud" },
      writable: true,
    });
  });

  it("renders form with 4 fields and submit button", () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText(/nome completo/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/\(00\) 00000-0000/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/descreva sua necessidade/i)).toBeInTheDocument();
    const submitBtn = screen.getAllByRole("button").find((b) => b.getAttribute("type") === "submit");
    expect(submitBtn).toBeInTheDocument();
  });

  it("has required attribute on name, email and phone", () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText(/nome completo/i)).toBeRequired();
    expect(screen.getByPlaceholderText(/e-mail/i)).toBeRequired();
    expect(screen.getByPlaceholderText(/\(00\) 00000-0000/)).toBeRequired();
  });

  it("submits with correct payload and headers when filled with test data", async () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByPlaceholderText(/nome completo/i), {
      target: { value: "TESTE Karime" },
    });
    fireEvent.change(screen.getByPlaceholderText(/e-mail/i), {
      target: { value: "karime.kumagai@luby.com.br" },
    });
    fireEvent.change(screen.getByPlaceholderText(/\(00\) 00000-0000/), {
      target: { value: "44998885133" },
    });
    fireEvent.change(screen.getByPlaceholderText(/descreva sua necessidade/i), {
      target: { value: "pipipopo pipipopo" },
    });
    const submitBtn = screen.getAllByRole("button").find((b) => b.getAttribute("type") === "submit");
    fireEvent.click(submitBtn!);

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(fetch).toHaveBeenCalledWith(
      EDGE_FUNCTION_URL,
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "Content-Type": "application/json",
          Authorization: "Bearer test-anon-key",
        }),
      })
    );
    const body = JSON.parse((fetch as ReturnType<typeof vi.fn>).mock.calls[0][1].body);
    expect(body.origin_url).toBe("https://example.com/consultoria-cloud");
    expect(body.name).toBe("TESTE Karime");
    expect(body.email).toBe("karime.kumagai@luby.com.br");
    expect(body.phone).toBe("44998885133");
    expect(body.message).toBe("pipipopo pipipopo");
    expect(body.profile).toBe(FORM_PROFILE);
    expect(body.raw_payload).toEqual(
      expect.objectContaining({
        name: "TESTE Karime",
        email: "karime.kumagai@luby.com.br",
        phone: "44998885133",
        message: "pipipopo pipipopo",
      })
    );
    expect(body.raw_payload.submittedAt).toBeDefined();
  });
});
