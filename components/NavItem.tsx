import Link from "next/link";

export default function NavItem({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link href={href}>
        <a
          className={`block px-4 py-2 rounded-md ${
            isActive ? "text-amber-700" : ""
          }`}
        >
          {children}
        </a>
      </Link>
    </li>
  );
}
