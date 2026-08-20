import Link from "next/link";

export function Button({ href, children, variant = "primary" }) {
  const className = `button button-${variant}`;
  return href ? <Link className={className} href={href}>{children}</Link> : <button className={className}>{children}</button>;
}
