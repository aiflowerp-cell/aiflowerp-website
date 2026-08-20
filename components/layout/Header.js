"use client";

import Link from "next/link";
import { useState } from "react";
import { business, navigation } from "@/config/business";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <img src={business.logo} alt="" width="42" height="42" />
          <span><strong>{business.shortName}</strong><small>Home furnishings</small></span>
        </Link>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? "Close" : "Menu"}</button>
        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <Button href="/contact">Visit our studio</Button>
        </nav>
      </div>
    </header>
  );
}
