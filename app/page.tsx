"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function Landing() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      const emailResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/collect-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!emailResponse.ok) {
        if (emailResponse.status === 400) {
          toast.error("Email already submitted");
        } else {
          toast.error("Failed to submit email");
        }
        return;
      }

      toast.success("Thanks for signing up! We’ll be in touch.");
      setSubmitted(true);

      try {
        await fetch("/api/send-waitlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
      } catch {
        toast.error("Failed to send confirmation email");
      }
    } catch {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      {/* Nav */}
      <nav className="flex justify-between items-center px-6 py-6 max-w-6xl mx-auto">
        <div className="text-2xl font-black tracking-tight">
          Label<span className="text-purple-600">shot</span>
        </div>
        <div className="text-sm font-semibold text-purple-600">Coming Soon</div>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-16 pb-24 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="uppercase tracking-widest text-xs font-bold text-purple-600 mb-6">
            Supplement product visuals
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            Turn your label <br />
            <span className="text-purple-600">into a product image.</span>
            <br />
            In seconds
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-10 max-w-xl">
            Upload your flat label and get a photorealistic supplement product
            image in seconds. No photographers. No Photoshop. No mangled
            ingredient lists.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md"
            >
              <input
                type="email"
                placeholder="you@brand.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-4 rounded-xl border-2 border-neutral-200 focus:border-purple-600 focus:outline-none text-base"
              />
              <button
                type="submit"
                className="px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition"
              >
                Get Early Access
              </button>
            </form>
          ) : (
            <div className="mt-6 text-purple-600 font-semibold">
              You’re on the list. We’ll be in touch.
            </div>
          )}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-neutral-200 max-w-6xl mx-auto" />

      {/* How it works */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black mb-16">How it works</h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="text-purple-600 font-black text-xl mb-4">01</div>
            <h3 className="font-bold text-xl mb-3">Upload your label</h3>
            <p className="text-neutral-600">
              PNG or PDF. Any size. Any format. We handle the rest.
            </p>
          </div>

          <div>
            <div className="text-purple-600 font-black text-xl mb-4">02</div>
            <h3 className="font-bold text-xl mb-3">Precision 3D wrap</h3>
            <p className="text-neutral-600">
              We mathematically wrap your label onto a real 3D model. No
              distorted text. No hallucinated ingredients.
            </p>
          </div>

          <div>
            <div className="text-purple-600 font-black text-xl mb-4">03</div>
            <h3 className="font-bold text-xl mb-3">Studio-ready export</h3>
            <p className="text-neutral-600">
              Download images ready for Shopify, Amazon, and Meta ads. Done in
              seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="px-6 pb-32 max-w-6xl mx-auto">
        <div className="bg-purple-600 text-white rounded-3xl p-12 md:p-16">
          <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
            AI product tools distort your label.
            <br />
            We don’t.
          </h2>
          <p className="text-purple-100 max-w-2xl text-lg">
            Other AI tools scramble your ingredients list and invent text that
            isn’t there. We use real 3D rendering for the product itself — and
            AI only for the background. Your compliance stays intact.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-neutral-200 max-w-6xl mx-auto flex justify-between text-sm text-neutral-500">
        <div className="font-bold text-neutral-900">
          Label<span className="text-purple-600">shot</span>
        </div>
        <div>© 2026 Labelshot</div>
      </footer>
    </div>
  );
}
