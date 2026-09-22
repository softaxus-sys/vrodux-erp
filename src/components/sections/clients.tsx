"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const clients = [
  {
    name: "Leading Properties",
    domain: "leadingproperties.ae",
    logo: "/images/cropped-leading-properties-logo.png",
    width: 310,
    height: 80,
  },
  {
    name: "Leading Zone Consultancy",
    domain: "leadingzone.ae",
    logo: "/images/leadingzone-logo.png",
    width: 2048,
    height: 388,
  },
  {
    name: "Diamond Land Properties",
    domain: "diamondlandproperties.ae",
    logo: "/images/logo-dlp.avif",
    width: 525,
    height: 400,
  },
  {
    name: "Four B Property",
    domain: "fourbproperty.com",
    logo: "/images/logo-mark-light.webp",
    width: 128,
    height: 99,
    // Light (white) mark — needs a dark backdrop to stay visible
    dark: true,
  },
];

export function ClientsSection() {
  return (
    <section className="py-16 border-y bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">
            Our Clients
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Live on <span className="text-gradient">Vrodux ERP</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {clients.map((client, i) => (
            <motion.a
              key={client.domain}
              href={`https://${client.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex flex-col rounded-2xl border bg-card overflow-hidden hover:shadow-glow-sm hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-28 px-6 bg-white">
                {client.dark ? (
                  <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-neutral-900">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={client.width}
                      height={client.height}
                      className="h-9 w-auto object-contain"
                    />
                  </div>
                ) : (
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={client.width}
                    height={client.height}
                    className="max-h-16 w-auto max-w-full object-contain"
                  />
                )}
              </div>
              <div className="flex items-center justify-between gap-2 px-4 py-3 border-t">
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate">{client.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{client.domain}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
