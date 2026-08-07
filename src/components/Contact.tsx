"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Meteors } from "@/components/ui/meteors";

const CONTACT_EMAIL = "nhtan5544@gmail.com";

// `value` holds literals that stay as-is in every locale (email, phone number);
// `valueKey` is for values that do get translated.
type ContactItem = {
  icon: typeof Mail;
  labelKey: string;
  value?: string;
  valueKey?: string;
  href?: string;
};

const contactInfo: ContactItem[] = [
  {
    icon: Mail,
    labelKey: "contact.info.email_label",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: MapPin,
    labelKey: "contact.info.location_label",
    valueKey: "contact.info.location_value",
  },
  {
    icon: Phone,
    labelKey: "contact.info.phone_label",
    value: "039 393 0709",
    href: "tel:+84393930709",
  },
];

export default function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // No backend/email service is wired up yet — hand off to the visitor's
  // own mail client instead of faking a "sent" state.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${t("contact.mail_subject")} ${form.name || "website"}`
    );
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 border-b border-border/60 pb-4 text-left"
        >
          <p className="text-xs font-semibold text-accent-foreground uppercase tracking-widest mb-2">
            {t("contact.subtitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-2">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground max-w-lg">{t("contact.description")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 space-y-3"
          >
            {contactInfo.map(({ icon: Icon, labelKey, value, valueKey, href }) => {
              const content = (
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-accent-foreground">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">{t(labelKey)}</p>
                    <p className="text-sm font-semibold text-foreground">
                      {valueKey ? t(valueKey) : value}
                    </p>
                  </div>
                </div>
              );
              return href ? (
                <a key={labelKey} href={href} className="block hover:opacity-80 transition-opacity">
                  {content}
                </a>
              ) : (
                <div key={labelKey}>{content}</div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="relative overflow-hidden [--card-spacing:--spacing(6)] bg-card/80 backdrop-blur-sm shadow-xl">
              <Meteors number={25} />
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("contact.name")}</Label>
                      <Input
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder={t("contact.name_placeholder")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("contact.email")}</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder={t("contact.email_placeholder")}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contact.message")}</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={t("contact.message_placeholder")}
                    />
                  </div>

                  <Button type="submit" className="w-full h-11 rounded-full">
                    <Send className="size-4" />
                    {t("contact.send")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
